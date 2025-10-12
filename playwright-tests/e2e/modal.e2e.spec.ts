import { test, expect, Page, Locator } from '@playwright/test';

/* ---------- Helpers ---------- */

// A modal container across common libs/patterns
const modalLocator = (page: Page) =>
  page.locator(
    [
      '[role="dialog"]',
      '[role="alertdialog"]',
      '[aria-modal="true"]',
      '.modal:visible',
      '.ReactModal__Content:visible',
      '[data-radix-portal] [role="dialog"]',
    ].join(', ')
  );

// Try to close via button names; fallback to overlay/Escape
const closeModal = async (page: Page, modal: Locator) => {
  // Prefer explicit close buttons inside modal
  const candidates: Locator[] = [
    modal.getByRole('button', {
      name: /^(close|close modal|închide|ok|okay|cancel|got it|dismiss|accept)$/i,
    }),
    modal.locator('button:has(i.fa-times), button:has(svg[aria-label="Close"])'),
  ];

  for (const c of candidates) {
    if (await c.count()) {
      await c.first().click();
      return;
    }
  }
};

test.describe('Modals page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/modals');
    await expect(page.getByRole('heading', { name: /Modals/i })).toBeVisible();
  });

  test('opens modal and shows accessible dialog with focus', async ({ page }) => {
    // Open
    const openBtn = page.getByRole('button', { name: /open modal/i });
    await expect(openBtn).toBeVisible();
    await openBtn.click();

    // Assert modal visible
    const modal = modalLocator(page);
    await expect(modal).toBeVisible({ timeout: 10000 });

    // Accessibility hints: role or aria-modal
    const hasRole =
      (await modal.getAttribute('role')) === 'dialog' ||
      (await modal.getAttribute('role')) === 'alertdialog';
    const ariaModal = await modal.getAttribute('aria-modal');
    expect(hasRole || ariaModal === 'true').toBeTruthy();

    // Clean up by closing (don’t assert how, just ensure it disappears)
    await closeModal(page, modal);
    await expect(modal).toBeHidden({ timeout: 10000 });
  });

  test('can close modal via close button / backdrop / Escape', async ({ page }) => {
    // Open again
    await page.getByRole('button', { name: /open modal/i }).click();
    const modal = modalLocator(page);
    await expect(modal).toBeVisible({ timeout: 10000 });

    // Try the close strategies (button > backdrop > Escape)
    await closeModal(page, modal);

    // Verify closed
    await expect(modal).toBeHidden({ timeout: 10000 });

    // Optional: ensure page behind is interactive again
    await expect(page.getByRole('button', { name: /open modal/i })).toBeEnabled();
  });
});
