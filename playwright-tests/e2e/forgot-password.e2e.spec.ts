import { test, expect } from '@playwright/test';
import { waitForLatestResetLinkSinceNow } from '../utils/email.js';
import { generateStrongPassword, writeRuntimeSecrets } from '../utils/password.js';
import { acquireEmailLock, releaseEmailLock } from 'playwright-tests/utils/email-mutex.js';

const EMAIL = process.env.USER_EMAIL;
const APP = process.env.APP_BASE_URL;
const FROM = 'office@chesscoders.com';
const SUBJECT = 'Password Reset Request';

test.describe('@mail Reset password flow', () => {
  test.describe.configure({ mode: 'serial', timeout: 180_000 });
  test.beforeAll(() => {
    if (!EMAIL || !APP) {
      test.fail(true, 'USER_EMAIL & APP_BASE_URL env vars must be set');
    }
  });

  test.beforeAll(async ({}, testInfo) => {
    testInfo.setTimeout(3 * 60 * 1000); // 5 minute pt hook
    await acquireEmailLock({ timeoutMs: 8 * 60_000 });
  });
  test.afterAll(() => {
    try {
      releaseEmailLock();
    } catch {}
  });
  test('Successful reset + login with new password', async ({ page }) => {
    // 1) Go to login
    await page.goto(APP);

    // 2–3) Retry loop pentru trimiterea mailului de reset
    const SENT_TEXT = /You will receive an email with reset instructions/i;
    let sent = false;
    let lastErr: unknown;

    for (let attempt = 1; attempt <= 3 && !sent; attempt++) {
      try {
        // intră mereu pe Forgot înainte de fiecare încercare
        await page.getByRole('link', { name: /forgot password/i }).click();
        await expect(page).toHaveURL(/\/forgot/);

        // Submit email
        await page.getByRole('textbox', { name: /your email/i }).fill(EMAIL);
        await page.getByRole('button', { name: /send password reset email/i }).click();

        // așteaptă confirmarea trimiterii
        await page.getByText(SENT_TEXT).waitFor({ timeout: 10_000 });
        sent = true;
      } catch (err) {
        lastErr = err;

        // mică resetare de context între încercări
        if (attempt < 3) {
          // încearcă să revii la home ca să reiei flow-ul curat
          try {
            await page.goto(APP);
          } catch {}
        }
      }
    }

    if (!sent) {
      throw new Error(
        `Failed to send reset email after 3 attempts. Last error: ${String(lastErr)}`
      );
    }

    // 4) Așteaptă/obține link-ul din email
    const resetLink = await waitForLatestResetLinkSinceNow({
      to: EMAIL,
      from: FROM,
      subject: SUBJECT,
    });
    expect(resetLink).toMatch(/^https?:\/\//);

    // 5) Open reset link
    await page.goto(resetLink);

    // 6) Set new password
    const newPassword = generateStrongPassword();
    await page.getByRole('textbox', { name: /your new password/i }).fill(newPassword);
    await page.getByRole('button', { name: /reset password/i }).click();
    const toast = page.locator('.react-hot-toast [role="status"]', {
      hasText: /your password has been changed/i,
    });
    await toast.waitFor({ state: 'visible', timeout: 15_000 });

    // 7) Log in with new credentials
    await page.goto(APP);
    await page.getByRole('textbox', { name: /your email/i }).fill(EMAIL);
    await page.getByRole('textbox', { name: /your password/i }).fill(newPassword);
    await page.getByRole('button', { name: /login/i }).click();

    // 8) Assert logged in
    await expect(page).toHaveURL(/\/admin/);
    await expect(page.getByRole('heading', { name: /dashboard/i })).toBeVisible();

    // 9) Save new password for next runs
    writeRuntimeSecrets({ currentPassword: newPassword });
  });
});
