import { test, expect, Page, Locator } from '@playwright/test';

/** Returns the <label> that follows the example's <p> title */
const exampleLabelByTitle = (page: Page, titleRx: RegExp) =>
  page
    .locator('p.mb-1')
    .filter({ hasText: titleRx })
    .first()
    .locator('xpath=following-sibling::label[1]');

const checkboxIn = (label: Locator) => label.locator('input[type="checkbox"]');

/** Click the label only if the checkbox is enabled */
const clickToggle = async (label: Locator, cb: Locator) => {
  if (await cb.isDisabled()) return; // skip clicking disabled toggle
  await label.click();
};

test.describe('Toggle page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/toggle');
    await expect(page.getByRole('heading', { name: /Toggle/i })).toBeVisible();
  });

  test('Example #1 – Classic toggle with default label', async ({ page }) => {
    const label = exampleLabelByTitle(page, /Classic toggle with default label/i);
    const cb = checkboxIn(label);

    await expect(cb).not.toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).not.toBeChecked();
  });

  test('Example #2 – Classic toggle with custom label', async ({ page }) => {
    const label = exampleLabelByTitle(page, /Classic toggle with custom label/i);
    const cb = checkboxIn(label);

    await expect(cb).not.toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).not.toBeChecked();
  });

  test('Example #3 – Disabled toggle', async ({ page }) => {
    const label = exampleLabelByTitle(page, /Disabled toggle/i);
    const cb = checkboxIn(label);

    await expect(cb).toBeDisabled();
    const initial = await cb.isChecked();

    await expect(cb).toHaveJSProperty('checked', initial);
  });

  test('Example #4 – Toggle enabled by default', async ({ page }) => {
    const label = exampleLabelByTitle(page, /Toggle enabled by default/i);
    const cb = checkboxIn(label);

    await expect(cb).toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).not.toBeChecked();
    await clickToggle(label, cb);
    await expect(cb).toBeChecked();
  });

  test('Example #5 – Disabled toggle with initialState set to true', async ({ page }) => {
    const label = exampleLabelByTitle(page, /Disabled toggle with initialState set to true/i);
    const cb = checkboxIn(label);

    await expect(cb).toBeDisabled();
    await expect(cb).toBeChecked();

    await expect(cb).toBeChecked();
  });

  test('Example #6 – Toggle with custom onTrigger callback', async ({ page }) => {
    const label = exampleLabelByTitle(page, /custom onTrigger callback/i);
    const cb = checkboxIn(label);

    const start = await cb.isChecked();
    await clickToggle(label, cb);
    await expect(cb).toHaveJSProperty('checked', !start);
    await clickToggle(label, cb);
    await expect(cb).toHaveJSProperty('checked', start);
  });

  test('Example #7 – Toggle with custom styling (extraClass)', async ({ page }) => {
    const label = exampleLabelByTitle(page, /(custom stlying applied|Violet toggle)/i);
    const cb = checkboxIn(label);

    const start = await cb.isChecked();
    await clickToggle(label, cb);
    await expect(cb).toHaveJSProperty('checked', !start);
    await clickToggle(label, cb);
    await expect(cb).toHaveJSProperty('checked', start);
  });
});
