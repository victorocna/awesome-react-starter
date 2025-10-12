import { test, expect } from '@playwright/test';
import { generateStrongPassword, writeRuntimeSecrets } from 'playwright-tests/utils/password';

const NEW_PASSWORD = generateStrongPassword();
const MISMATCH_PASSWORD = 'MismatchPassword!';

async function gotoProfile(page) {
  await page.goto('/admin');
  await page.getByRole('link', { name: /profile/i }).click();
  await expect(page).toHaveURL(/\/examples\/profile/);
}

test.describe('Profile page - Password reset', () => {
  test('Shows error if passwords do not match', async ({ page }) => {
    await gotoProfile(page);
    await page.getByRole('tab', { name: /change password/i }).click();
    await page.locator('#changePassword').fill(NEW_PASSWORD); // #changePassword
    await page.locator('#confirmPassword').fill(MISMATCH_PASSWORD); // #confirmPassword
    await page.getByRole('button', { name: /^save changes$/i }).click();

    await expect(page.getByText(/passwords do not match/i)).toBeVisible();
  });

  test('Successfully resets password with valid input', async ({ page }) => {
    await gotoProfile(page);
    await page.getByRole('tab', { name: /change password/i }).click();
    await page.locator('#changePassword').fill(NEW_PASSWORD);
    await page.locator('#confirmPassword').fill(NEW_PASSWORD);

    await page.getByRole('button', { name: /^save changes$/i }).click();

    await expect(page.getByText(/password updated|success/i)).toBeVisible();

    writeRuntimeSecrets({ currentPassword: NEW_PASSWORD });
  });
});
