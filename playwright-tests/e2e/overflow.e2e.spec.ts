import { test, expect, Locator } from '@playwright/test';

const getComputed = async (el: Locator, prop: string) =>
  el.evaluate(
    (node, p) =>
      getComputedStyle(node as Element)
        .getPropertyValue(p)
        .trim(),
    prop
  );

const expectTruncated = async (el: Locator) => {
  await expect(el).toBeVisible();

  // CSS checks for Tailwind's `truncate`
  await expect
    .poll(async () => await getComputed(el, 'white-space'), { timeout: 5000 })
    .toBe('nowrap');
  await expect(await getComputed(el, 'text-overflow')).toBe('ellipsis');

  // Some browsers return 'clip' for overflow-y; we only require overflow-x to be hidden/clip.
  const overflowX = await getComputed(el, 'overflow-x');
  expect(/hidden|clip/i.test(overflowX)).toBeTruthy();

  // Functional check: content must overflow horizontally
  const { scrollWidth, clientWidth } = await el.evaluate((node) => ({
    scrollWidth: (node as HTMLElement).scrollWidth,
    clientWidth: (node as HTMLElement).clientWidth,
  }));
  expect(scrollWidth).toBeGreaterThan(clientWidth);
};

test.describe('Overflow page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/overflow');
    await expect(page.getByRole('heading', { name: /Overflow/i })).toBeVisible();
  });

  test('items are truncated with ellipsis and have tooltips', async ({ page }) => {
    // Select the two truncate boxes by their title tooltips
    const first = page.locator('[title="A very very long text wrapped in the overflow element"]');
    const second = page.locator('[title="Another overflowing element that should be truncated"]');

    // Titles present (used as tooltips on hover)
    await expect(first).toHaveAttribute(
      'title',
      'A very very long text wrapped in the overflow element'
    );
    await expect(second).toHaveAttribute(
      'title',
      'Another overflowing element that should be truncated'
    );

    // Ensure the fixed width is applied (Tailwind w-60 ≈ 15rem). We check overflow behavior instead of exact px.
    await expectTruncated(first);
    await expectTruncated(second);
  });
});
