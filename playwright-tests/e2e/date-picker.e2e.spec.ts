import { test, expect, Page } from '@playwright/test';

const openCalendarFor = async (page: Page, inputId: string) => {
  const trigger = page.locator(`#${inputId} + div, #${inputId} + div i.fa-calendar-alt`).first();
  await expect(trigger).toBeVisible();
  await trigger.click();
  await expect(page.locator('.react-calendar, [role="dialog"] .react-calendar')).toBeVisible();
};

const clickFirstCurrentMonthDay = async (page: Page) => {
  const currentMonthDays = page.locator(
    'button.react-calendar__tile.react-calendar__month-view__days__day:not(.react-calendar__month-view__days__day--neighboringMonth)'
  );
  await expect(currentMonthDays.first()).toBeVisible();
  const count = await currentMonthDays.count();
  if (count > 0) {
    await currentMonthDays.first().click();
    return;
  }

  const header = page.locator('.react-calendar__navigation__label');
  const text = (await header.textContent())?.trim(); // ex: "April 2025"
  if (text) {
    const [month, year] = text.split(/\s+/);
    const dayName = new RegExp(`^${month}\\s+1,\\s+${year}$`, 'i'); // "April 1, 2025"
    await page.getByRole('button', { name: dayName }).click();
  } else {
    throw new Error('Nu am putut determina luna/anii din headerul calendarului.');
  }
};

// --- NOI: helpers pentru "azi" și zile trecute ---
const ariaLabelFor = (d: Date) => {
  const month = d.toLocaleString('en-US', { month: 'long' });
  const day = d.getDate();
  const year = d.getFullYear();
  return `${month} ${day}, ${year}`;
};
const todayAriaLabel = () => ariaLabelFor(new Date());
const yesterdayDate = () => {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d;
};

test.describe('Date Picker page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/date-picker');
    await expect(page).toHaveURL(/\/examples\/date-picker/);
  });

  test('renders inputs și iconițe calendar', async ({ page }) => {
    await expect(page.locator('#checkIn')).toBeVisible();
    await expect(page.locator('#checkOut')).toBeVisible();
    await expect(page.locator('#checkInDate')).toBeVisible();

    await expect(page.locator('#checkIn + div i.fa-calendar-alt')).toBeVisible();
    await expect(page.locator('#checkOut + div i.fa-calendar-alt')).toBeVisible();
    await expect(page.locator('#checkInDate + div i.fa-calendar-alt')).toBeVisible();
  });

  test('opens calendar via icon (check-in)', async ({ page }) => {
    await openCalendarFor(page, 'checkIn');
  });

  test('selects first day of current month (check-in)', async ({ page }) => {
    await openCalendarFor(page, 'checkIn');

    const valueBefore = await page.locator('#checkIn').inputValue();
    await clickFirstCurrentMonthDay(page);
    const valueAfter = await page.locator('#checkIn').inputValue();

    expect(valueAfter).not.toBe(valueBefore);
  });

  test('allows manual date entry (check-in)', async ({ page }) => {
    const input = page.locator('#checkIn'); // doar acesta e editabil
    await input.fill('2025-10-02');
    await input.blur();
    await expect(input).toHaveValue(/2025-10-02/);
  });

  test('shows error or resets on invalid date (check-in)', async ({ page }) => {
    const input = page.locator('#checkIn');
    await input.fill('invalid-date');
    await input.blur();

    const value = await input.inputValue();
    const content = await page.content();
    expect(value === '' || /invalid|eroare|error/i.test(content)).toBeTruthy();
  });

  test('click pe textboxul readonly (check-out) NU deschide calendarul', async ({ page }) => {
    const input = page.locator('#checkOut');
    await expect(input).toBeVisible();

    await input.click();

    await expect(page.locator('.react-calendar')).toHaveCount(0);
  });

  // 🔄 MODIFICAT: selectează ZIUA CURENTĂ pentru check-out
  test('click pe iconiță (check-out) deschide calendarul și selectează AZI', async ({ page }) => {
    const input = page.locator('#checkOut');
    await expect(input).toBeVisible();
    const before = await input.inputValue(); // probabil '' inițial

    await openCalendarFor(page, 'checkOut');

    // Selectează "azi" după aria-label (ex: "April 23, 2025")
    const label = todayAriaLabel();
    const todayBtn = page.getByRole('button', { name: new RegExp(`^${label}$`, 'i') });

    await expect(todayBtn).toBeVisible();
    await expect(todayBtn).not.toHaveClass(/react-calendar__tile--disabled/);

    await todayBtn.click();

    const after = await input.inputValue();
    expect(after).toBeTruthy();
    expect(after).not.toBe(before);
  });

  // ➕ NOU: zilele trecute sunt disabled (gestionăm și cazul când e 1 ale lunii)
  test('check-out: zilele din trecut sunt disabled', async ({ page }) => {
    await openCalendarFor(page, 'checkOut');

    const y = yesterdayDate();
    const t = new Date();
    const sameMonth = y.getMonth() === t.getMonth() && y.getFullYear() === t.getFullYear();

    if (sameMonth) {
      const yLabel = ariaLabelFor(y);
      const yBtn = page.getByRole('button', { name: new RegExp(`^${yLabel}$`, 'i') });
      await expect(yBtn).toBeVisible();
      // verificăm atributul disabled
      await expect(yBtn).toBeDisabled();
    } else {
      // dacă e 1 ale lunii → ieri e în luna precedentă, deci verificăm generic că există cel puțin un buton disabled
      const disabledTiles = page.locator(
        'button.react-calendar__tile.react-calendar__month-view__days__day[disabled]'
      );
      await expect(disabledTiles.first()).toBeVisible();
      const count = await disabledTiles.count();
      expect(count).toBeGreaterThan(0);
    }
  });
});
