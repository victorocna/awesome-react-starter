import { test, expect } from '@playwright/test';

test.describe('Logout flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin');
  });

  test('opens account menu and logs out', async ({ page }) => {
    // 1) Deschide meniul de user
    const userButton = page.getByRole('button').filter({ hasText: /@/ });

    await expect(userButton).toBeVisible();
    await userButton.click();

    // 2) Click pe "Logout" din context menu
    const logoutBtn = (await page.getByRole('menuitem', { name: /log\s*out/i }).count())
      ? page.getByRole('menuitem', { name: /log\s*out/i })
      : page.getByRole('button', { name: /log\s*out/i });

    await expect(logoutBtn).toBeVisible();
    await logoutBtn.click();

    // 3) Verifică redirecționarea la login & că meniul a dispărut
    await expect(page).toHaveURL(/\/login/i);
    await expect(page.getByRole('heading', { name: /login|sign in|autentificare/i })).toBeVisible({
      timeout: 5000,
    });
    await expect(userButton).toHaveCount(0);

    await page.goto('/admin');
    await expect(page).toHaveURL(/\/login/i);
  });
});
