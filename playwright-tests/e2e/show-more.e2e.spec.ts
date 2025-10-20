// playwright-tests/e2e/show-more.e2e.spec.ts
import { test, expect, Page, Locator } from '@playwright/test';

// Find the "Show more" button by its <span> label
const findShowMoreButton = (page: Page) =>
  page
    .locator('button')
    .filter({ has: page.locator('span', { hasText: /^Show more$/i }) })
    .first();

// CONTENT = the *next sibling DIV* after the button's closest wrapper <div>
const findShowMoreContentDiv = (btn: Locator) => btn.locator('xpath=following-sibling::div[1]');

test.describe('Show More (icon + sibling div visibility)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/show-more');
    await expect(page.getByRole('heading', { name: /Components/i })).toBeVisible();
  });

  test('Show more: click → icon flips & sibling div appears; click again → flips back & div disappears', async ({
    page,
  }) => {
    const btn = findShowMoreButton(page);
    await expect(btn).toBeVisible();

    const iconDown = btn.locator('i.fas.fa-chevron-down');
    const iconUp = btn.locator('i.fas.fa-chevron-up');
    const content = findShowMoreContentDiv(btn);

    // This is the div that should be hidden initially and shown after click.
    const innerLine1 = content.getByText(/Hidden at first, viewable after you click on show more/i);
    const innerLine2 = content.getByText(
      /You can add anything you want as children of the show more component\./i
    );

    // Initially hidden
    await expect(content).toBeHidden();

    // 1) Expand
    await btn.click();

    // Icon flips down → up
    await expect(iconUp).toBeVisible({ timeout: 5000 });
    await expect(iconDown).toHaveCount(0);

    // Sibling DIV appears with expected text
    await expect(content).toBeVisible({ timeout: 5000 });
    await expect(innerLine1).toBeVisible();
    await expect(innerLine2).toBeVisible();

    // 2) Collapse
    await btn.click();

    // Icon flips back up → down
    await expect(iconDown).toBeVisible({ timeout: 5000 });
    await expect(iconUp).toHaveCount(0);

    // Sibling DIV disappears
    await expect(content).toBeHidden({ timeout: 5000 });
  });
  // Helper for the second toggle
  const findOptionalInfoButton = (page: Page) =>
    page
      .locator('button')
      .filter({ has: page.locator('span', { hasText: /^Optional info$/i }) })
      .first();

  test('Optional info: click → icon flips & sibling div hides; click again → flips back & div shows', async ({
    page,
  }) => {
    const btn = findOptionalInfoButton(page);
    await expect(btn).toBeVisible();

    const iconUp = btn.locator('i.fas.fa-chevron-up'); // initially up
    const iconDown = btn.locator('i.fas.fa-chevron-down'); // after collapse
    const content = findShowMoreContentDiv(btn);

    // Lines inside the sibling content div
    const line1 = content.getByText(/The same show more components, but with a twist\./i);
    const line2 = content.getByText(/Visible on first render and with a custom label\./i);

    // Initially visible + up chevron
    await expect(content).toBeVisible();
    await expect(line1).toBeVisible();
    await expect(line2).toBeVisible();
    await expect(iconUp).toBeVisible();
    await expect(iconDown).toHaveCount(0);

    // 1) Collapse
    await btn.click();

    // Icon up → down; content hides
    await expect(iconDown).toBeVisible({ timeout: 5000 });
    await expect(iconUp).toHaveCount(0);
    await expect(content).toBeHidden({ timeout: 5000 });

    // 2) Expand again
    await btn.click();

    // Icon down → up; content shows again
    await expect(iconUp).toBeVisible({ timeout: 5000 });
    await expect(iconDown).toHaveCount(0);
    await expect(content).toBeVisible({ timeout: 5000 });
    await expect(line1).toBeVisible();
    await expect(line2).toBeVisible();
  });
});
