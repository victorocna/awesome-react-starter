import { test, expect } from '@playwright/test';

test.describe('Date of birth page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/date-of-birth');
    await expect(page).toHaveURL(/\/examples\/date-of-birth/);
    await expect(page.getByRole('heading', { name: /Date of birth/i })).toBeVisible();
  });

  test('Example #1: select Month/Day/Year și verifică valorile', async ({ page }) => {
    const month = page.locator('select#month').nth(0);
    const day = page.locator('select#day').nth(0);
    const year = page.locator('select#year').nth(0);

    await expect(month).toBeVisible();
    await expect(day).toBeVisible();
    await expect(year).toBeVisible();

    // Alege o dată validă (există în opțiuni conform markup-ului)
    await month.selectOption({ value: '4' }); // April
    await day.selectOption({ value: '23' }); // 23
    await year.selectOption({ value: '1990' }); // 1990

    await expect(month).toHaveValue('4');
    await expect(day).toHaveValue('23');
    await expect(year).toHaveValue('1990');

    // (opțional) dacă UI-ul afișează un summary, îl poți verifica aici
    // await expect(page.getByText(/Selected date of birth.*1990-04-23/)).toBeVisible();
  });

  test('Example #2: are valori inițiale corecte și permite schimbarea lor', async ({ page }) => {
    const month = page.locator('select#month').nth(1);
    const day = page.locator('select#day').nth(1);
    const year = page.locator('select#year').nth(1);

    await expect(month).toBeVisible();
    await expect(day).toBeVisible();
    await expect(year).toBeVisible();

    // Inițiale conform markup-ului: June(6), 10, 1989
    await expect(month).toHaveValue('6');
    await expect(day).toHaveValue('10');
    await expect(year).toHaveValue('1989');

    // Schimbă data
    await month.selectOption({ value: '12' }); // December
    await day.selectOption({ value: '30' }); // 30
    await year.selectOption({ value: '2000' }); // 2000

    await expect(month).toHaveValue('12');
    await expect(day).toHaveValue('30');
    await expect(year).toHaveValue('2000');
  });
});
