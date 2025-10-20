import { test, expect, Page, Locator } from '@playwright/test';

/* ---------- Helpers ---------- */

const modalLocator = (page: Page) =>
  page.locator('[role="dialog"][aria-modal="true"], .modal.show');

const isMobileViewport = (page: Page) => {
  const vp = page.viewportSize();
  return !!vp && vp.width < 1024;
};

const mobileSection = (page: Page) => page.locator('div.lg\\:hidden').first();

const commitSearch = async (input: Locator, value: string) => {
  await input.fill(value);
  await input.blur();
};

const selectStatus = async (modal: Locator, name: RegExp) => {
  const listbox = modal.locator('#only-menu');
  await expect(listbox).toBeVisible();

  const byRole = listbox.getByRole('option', { name }).first();
  if (await byRole.count()) {
    await byRole.click();
    return;
  }
  const byText = listbox.locator('*', { hasText: name }).first();
  if (await byText.count()) {
    await byText.click();
    return;
  }

  throw new Error(`Could not find status option matching ${name}`);
};

/* ---------- Tests ---------- */

test.describe('Filter Modal page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/filter-modal');
    await expect(page.getByRole('heading', { name: /Filter Modal/i })).toBeVisible();
  });

  test('Desktop notice appears on large viewports', async ({ page }) => {
    test.skip(isMobileViewport(page), 'Desktop-only assertion.');
    await expect(page.getByText(/only available on mobile/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Open Filter Modal/i })).toHaveCount(0);
  });

  test('Mobile: search "asd" + select Pending → Aplică → <pre> arată valorile aplicate', async ({
    page,
  }) => {
    test.skip(!isMobileViewport(page), 'Mobile-only flow.');

    const mobile = mobileSection(page);
    await expect(mobile.getByText(/example of a filter modal/i)).toBeVisible();

    await mobile.getByRole('button', { name: /Open Filter Modal/i }).click();
    const modal = modalLocator(page);
    await expect(modal).toBeVisible({ timeout: 10000 });

    const SEARCH = 'asd';
    const search = modal.locator('#search');
    await commitSearch(search, SEARCH);
    await expect(search).toHaveValue(SEARCH);

    const toggle = modal.locator('#only-toggle-button');
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await selectStatus(modal, /Pending/i);

    const applyBtn = modal.getByRole('button', { name: /Aplică/i });
    await expect(applyBtn).toBeEnabled();
    await applyBtn.click();

    await expect(modal).toBeHidden({ timeout: 10000 });
    const optionsPre = mobile.locator('pre.text-sm.text-gray-600').first();
    await expect
      .poll(() => optionsPre.textContent(), { timeout: 8000 })
      .toMatch(/"search"\s*:\s*"asd"/i);
    await expect(optionsPre).toContainText(/"only":\s*"pending"/i);
  });

  test('Mobile: Reset curăță valorile și după Aplică <pre> arată default (search "", only "all")', async ({
    page,
  }) => {
    test.skip(!isMobileViewport(page), 'Mobile-only flow.');

    const mobile = mobileSection(page);
    await mobile.getByRole('button', { name: /Open Filter Modal/i }).click();

    const modal = modalLocator(page);
    await expect(modal).toBeVisible({ timeout: 10000 });

    const search = modal.locator('#search');
    const toggle = modal.locator('#only-toggle-button');
    const resetBtn = modal.getByRole('button', { name: /Resetează/i });

    await commitSearch(search, 'asd');
    await toggle.click();
    await selectStatus(modal, /Pending/i);

    await resetBtn.click();

    const optionsPre = mobile.locator('pre.text-sm.text-gray-600').first();
    await expect
      .poll(() => optionsPre.textContent(), { timeout: 8000 })
      .toMatch(/"search"\s*:\s*""/);
    await expect(optionsPre).toContainText(/"only":\s*"all"/i);
  });
});
