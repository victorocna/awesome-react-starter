import { test, expect } from '@playwright/test';
import { waitForLatestResetLinkSinceNow } from 'playwright-tests/utils/email';

export function uniqueEmail(base = process.env.USER_EMAIL!) {
  const [local, domain] = base.split('@');
  return `${local}+e2e-${Date.now()}@${domain}`;
}

const EMAIL = uniqueEmail();
const APP = process.env.APP_BASE_URL!;
const NAME = 'Ion Popescu';
const FROM = 'office@chesscoders.com';
const SUBJECT = 'Account Confirmation';
const PASSWORD = 'supersecretpassword';

test.setTimeout(120_000); // give the flow up to 2 minutes

async function signup(page, { name = NAME, email = EMAIL, password = PASSWORD } = {}) {
  await page.goto(`${APP}/signup`);
  await page.getByRole('textbox', { name: /your name/i }).fill(name);
  await page.getByRole('textbox', { name: /your email/i }).fill(email);
  await page.getByRole('textbox', { name: /your password/i }).fill(password);
  await page.getByRole('button', { name: /signup/i }).click();
}

test.describe.serial('@mail Signup & Confirm flow', () => {
  test('Signup user', async ({ page }) => {
    await signup(page);
    await expect(page).toHaveURL(/\/thank-?you/i);
  });

  test('Confirm - follow link from email and see success message', async ({ page }) => {
    const confirmLink = await waitForLatestResetLinkSinceNow({
      to: EMAIL,
      from: FROM,
      subject: SUBJECT,
      segment: 'confirm',
    });
    expect(confirmLink).toMatch(/^https?:\/\//);

    await page.goto(confirmLink);
    await expect(page.getByText(/\b(?:succes|success)\b/i)).toBeVisible({ timeout: 15_000 });
  });

  test('Login with confirmed user', async ({ page }) => {
    await page.goto(APP);
    await page.getByRole('textbox', { name: /your email/i }).fill(EMAIL);
    await page.getByRole('textbox', { name: /your password/i }).fill(PASSWORD);
    await page.getByRole('button', { name: /login/i }).click();

    await expect(page).toHaveURL(/\/admin/);
  });

  test('Signup - email already in use shows proper error', async ({ page }) => {
    // Attempt to sign up again with the same email created in the happy path
    await signup(page);
    // Expect we do NOT go to thank-you again
    await expect(page).not.toHaveURL(/\/thank-?you/i);

    // Common error patterns (adapt to your app’s actual message)
    const error = page.getByText(/(email).*(exist|already|used|în uz|exista)/i);
    await expect(error).toBeVisible();
  });

  test('Signup - invalid form shows validation errors and blocks submit', async ({ page }) => {
    await page.goto(`${APP}/signup`);

    // Try to submit empty form
    await page.getByRole('button', { name: /signup/i }).click();

    // Expect validation hints (adapt these to your UI copy)
    await expect(page.getByText(/name.*required|obligatoriu/i)).toBeVisible();
    await expect(page.getByText(/email.*required|invalid|format|obligatoriu/i)).toBeVisible();
    await expect(
      page.getByText(/password.*required|too short|weak|obligatoriu|at least|cel putin/i)
    ).toBeVisible();

    // Now fill with obviously invalid values
    await page.getByRole('textbox', { name: /your name/i }).fill('I');
    await page.getByRole('textbox', { name: /your email/i }).fill('not-an-email');
    await page.getByRole('textbox', { name: /your password/i }).fill('123');
    await page.getByRole('button', { name: /signup/i }).click();

    // Expect we remain on signup and see errors
    await expect(page).toHaveURL(/\/signup/i);
    await expect(page.getByText(/email.*invalid|valid|format/i)).toBeVisible();
    await expect(
      page.getByText(/password.*too short|weak|obligatoriu|at least|cel putin/i)
    ).toBeVisible();
  });
});
