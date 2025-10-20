import test, { expect } from '@playwright/test';

test('404 page', async ({ page }) => {
  await page.goto('/definitely-not-existing-page');
  await expect(page.getByText(/page.*does not exist|has been moved|deleted/i)).toBeVisible();
});
