import { test, expect } from '@playwright/test';
import { readRuntimeSecrets } from 'playwright-tests/utils/password';

test.describe('Login UI', () => {
  test('Successful login - correct credentials', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await page.getByRole('textbox', { name: /your email/i }).fill(process.env.USER_EMAIL!);
    await page
      .getByRole('textbox', { name: /your password/i })
      .fill(readRuntimeSecrets().currentPassword);
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page).toHaveURL(/\/admin/);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();
  });

  test('Failed login - wrong credentials', async ({ page, baseURL }) => {
    await page.goto(baseURL!);
    await page.getByRole('textbox', { name: /your email/i }).fill(process.env.USER_EMAIL!);
    await page.getByRole('textbox', { name: /your password/i }).fill('definitely-wrong');
    await page.getByRole('button', { name: /login/i }).click();
    await expect(page.locator('.react-hot-toast [role="status"], .error-message')).toContainText(
      /invalid|incorect/i,
      { timeout: 15_000 }
    );
    await expect(page).not.toHaveURL(/\/admin/);
  });
});
