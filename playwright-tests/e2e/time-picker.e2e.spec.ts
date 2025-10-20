import { test, expect, Page, Locator } from '@playwright/test';

// ===== Helpers =====
const openTimePopupFor = async (page: Page, input: Locator) => {
  await expect(input).toBeVisible();
  await input.click(); // input e readOnly, click-ul deschide panelul
  await expect(page.locator('ul#hours')).toBeVisible();
  await expect(page.locator('ul#minutes')).toBeVisible();
};

const pad = (n: number) => n.toString().padStart(2, '0');

const pickTime = async (page: Page, hour: number, minute: number) => {
  const h = page.locator(`#hour-${hour}`);
  const m = page.locator(`#minute-${minute}`);
  await expect(h).toBeVisible();
  await expect(m).toBeVisible();

  // scroll în caz că elementele sunt în afara viewport-ului listei scrollabile
  await h.scrollIntoViewIfNeeded();
  await h.click();
  await m.scrollIntoViewIfNeeded();
  await m.click();

  const okBtn = page.getByRole('button', { name: /^OK$/i });
  await expect(okBtn).toBeVisible();
  await okBtn.click();

  // după OK, panelul dispare
  await expect(page.locator('ul#hours')).toBeHidden({ timeout: 3000 });
};

test.describe('Time Picker page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/time-picker');
    await expect(page).toHaveURL(/\/examples\/time-picker/);
  });

  // Example #1 – Basic time picker (selectăm 04:06)
  test('Example #1: selectează 04:06 din panou', async ({ page }) => {
    const input = page.locator('input.input').nth(0);
    await openTimePopupFor(page, input);
    await pickTime(page, 4, 6);
    await expect(input).toHaveValue(`${pad(4)}:${pad(6)}`);
  });

  // Example #2 – Time picker with default value (are 12:00, îl schimbăm la 09:30)
  test('Example #2: pornește cu 12:00 și îl schimbă la 09:30', async ({ page }) => {
    const input = page.locator('input.input').nth(1);
    await expect(input).toHaveValue('12:00');
    await openTimePopupFor(page, input);
    await pickTime(page, 9, 30);
    await expect(input).toHaveValue('09:30');
  });

  // Example #3 – RHF: input cu id #checkInTime (selectăm 03:05)
  test('Example #3: RHF – selectează 03:05 pentru #checkInTime', async ({ page }) => {
    const input = page.locator('#checkInTime');
    await openTimePopupFor(page, input);
    await pickTime(page, 3, 5);
    await expect(input).toHaveValue('03:05');
  });

  // Example #4 – Interval (selectăm 01:15)
  test('Example #4: interval – selectează 01:15', async ({ page }) => {
    const input = page.locator('input.input').nth(3);
    await openTimePopupFor(page, input);
    // dacă intervalul e din 15 în 15, 01:15 e permis
    await pickTime(page, 1, 15);
    await expect(input).toHaveValue('01:15');
  });

  // Example #5 – Disabled (nu trebuie să deschidă panelul)
  test('Example #5: disabled – rămâne 12:00 și nu deschide panelul', async ({ page }) => {
    const input = page.locator('input.input').nth(4);
    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('12:00');

    // încercăm să "deschidem" – nu trebuie să apară listele
    await input.click({ force: true });
    await expect(page.locator('ul#hours')).toHaveCount(0);
    await expect(page.locator('ul#minutes')).toHaveCount(0);
  });
});
