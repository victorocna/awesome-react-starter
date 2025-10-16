// playwright-tests/e2e/react-hook-form.e2e.spec.ts
import { test, expect, Page, Locator } from '@playwright/test';

/* ----------------- helpers ----------------- */

const statePre = (page: Page) => page.locator('pre.bg-red-200.font-mono.text-sm').first();

type RHFState = {
  values: {
    email: string;
    quantity: number;
    checkInDate: string;
    checkInTime: string;
  };
  [k: string]: any;
};

const readState = async (page: Page): Promise<RHFState> => {
  const raw = (await statePre(page).textContent()) ?? '{}';
  return JSON.parse(raw.replace(/\u00a0/g, ' '));
};

// Select a precise HH:mm from the popup and confirm.
// Ensures both hour & minute get (re)selected so that OK becomes enabled.
const pickTimeViaPopup = async (page: Page, hh: number, mm: number) => {
  const hours = page.locator('#hours');
  const minutes = page.locator('#minutes');

  // Popup present?
  if ((await hours.count()) === 0 && (await minutes.count()) === 0) return false;

  // Click target hour (fallbacks included)
  const hourId = `#hour-${hh}`;
  const hourLi = (await page.locator(hourId).count())
    ? page.locator(hourId)
    : hours.locator(`li:has-text("^${String(hh).padStart(2, '0')}$")`).first();
  if (await hourLi.count()) await hourLi.click();

  // Click target minute
  const minuteId = `#minute-${mm}`;
  const minuteLi = (await page.locator(minuteId).count())
    ? page.locator(minuteId)
    : minutes.locator(`li:has-text("^${String(mm).padStart(2, '0')}$")`).first();
  if (await minuteLi.count()) await minuteLi.click();

  // Wait for an enabled OK (the disabled one should no longer match)
  const okEnabled = page.locator('button:has-text("OK"):not([disabled])').first();
  await expect(okEnabled).toBeVisible({ timeout: 5000 });
  await okEnabled.click();

  return true;
};

test.describe('React Hook Form page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/react-hook-form');
    await expect(page.getByRole('heading', { name: /React hook forms/i })).toBeVisible();
  });

  test('fills fields and RHF state reflects submitted values', async ({ page }) => {
    // Email
    const email = page.locator('#email');
    await email.fill('user@example.com');
    await email.blur();

    // Plus/Minus quantity → set to 2
    const plusMinus = page.locator('div.plusminus').first();
    const qtyInput = plusMinus.locator('input#quantity[type="number"]').first();
    const plusBtn = plusMinus.locator('button:has(i.fa-plus)').first();
    await expect(qtyInput).toHaveValue('0');
    await plusBtn.click();
    await plusBtn.click();
    await expect(qtyInput).toHaveValue('2');

    // Date
    const dateInput = page.locator('#checkInDate');
    await dateInput.fill('2025-12-31');
    await dateInput.blur();
    await expect(dateInput).toHaveValue('2025-12-31');

    // Time: open popup, pick 03:05, confirm
    const timeInput = page.locator('#checkInTime');
    await timeInput.click();

    const picked = await pickTimeViaPopup(page, 3, 5);
    if (picked) {
      await expect.poll(() => timeInput.inputValue(), { timeout: 5000 }).toMatch(/^\d{2}:\d{2}$/);
    }

    // Submit
    const submitBtn = page.getByRole('button', { name: /^Submit$/i });
    await submitBtn.click();

    // Wait until RHF state updates then assert values
    await expect
      .poll(async () => (await readState(page)).values.email, { timeout: 8000 })
      .toBe('user@example.com');

    const st = await readState(page);
    expect(st.values.email).toBe('user@example.com');
    expect(st.values.quantity).toBe(2);
    expect(st.values.checkInDate).toBe('2025-12-31');
    if (st.values.checkInTime) {
      expect(st.values.checkInTime).toMatch(/^\d{2}:\d{2}$/);
    }
  });
});
