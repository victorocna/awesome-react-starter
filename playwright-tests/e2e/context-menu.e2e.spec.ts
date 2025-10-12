import { test, expect } from '@playwright/test';

// Helper to open the first context menu by index
async function openContextMenu(page, index = 0) {
  const menuButtons = page.locator(
    '.fa-ellipsis-vertical, .button.full.primary, .not-prose .button'
  );
  await menuButtons.nth(index).click();
}

test.describe('Context Menu page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/context-menu');
    await expect(page).toHaveURL(/\/examples\/context-menu/);
  });

  test('shows context menu with onClick options and triggers alert', async ({ page }) => {
    await openContextMenu(page, 0);
    await expect(page.getByRole('button', { name: /option 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /option 2/i })).toBeVisible();
    // Optionally, click and check for alert (Playwright auto-accepts alerts)
    page.once('dialog', (dialog) => dialog.accept());
    await page.getByRole('button', { name: /option 1/i }).click();
  });

  test('shows context menu with href options and navigates', async ({ page }) => {
    await openContextMenu(page, 1);
    await expect(page.getByRole('button', { name: /link 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /link 2/i })).toBeVisible();
    await page.getByRole('button', { name: /link 1/i }).click();
    await expect(page).toHaveURL(/\/examples\/buttons/);
  });

  test('shows context menu with mixed options', async ({ page }) => {
    await page.goto('/examples/context-menu');
    await openContextMenu(page, 2);
    await expect(page.getByRole('button', { name: /option 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /link 1/i })).toBeVisible();
  });

  test('shows context menu with custom button', async ({ page }) => {
    await openContextMenu(page, 3);
    await expect(page.getByRole('button', { name: /option 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /option 2/i })).toBeVisible();
  });

  test('shows only admin or user options based on selection', async ({ page }) => {
    // Default: admin
    await openContextMenu(page, 4);
    await expect(page.getByRole('button', { name: /admin option 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /admin option 2/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /user option 1/i })).toHaveCount(0);
    // Switch to user
    await page.getByRole('button', { name: /show user options/i }).click();
    await openContextMenu(page, 4);
    await expect(page.getByRole('button', { name: /user option 1/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /user option 2/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /admin option 1/i })).toHaveCount(0);
  });
});
