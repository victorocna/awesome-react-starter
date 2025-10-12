import { test, expect, Page, Locator } from '@playwright/test';

/* ========= Helpers ========= */

// Find an example section by the visible <label> text shown in your page
const findSectionByLabel = (page: Page, labelRx: RegExp) => {
  const label = page.getByLabel(labelRx, { exact: false }).locator('xpath=.');
  return label.locator('xpath=ancestor-or-self::*[contains(@class,"mb-4")][1]');
};

// Get first input inside the section (Downshift combobox uses an <input>)
const getInputInSection = (section: Locator) => section.locator('input').first();

// Resolve the listbox element tied to the input via aria-controls (fallback to last listbox)
const getMenuByInput = async (page: Page, input: Locator) => {
  const controls = await input.getAttribute('aria-controls');
  return controls ? page.locator(`#${controls}`) : page.locator('[role="listbox"]').last();
};

// Open combobox (toggle or input/ArrowDown), then wait for listbox to appear and populate
const openCombobox = async (page: Page, section: Locator) => {
  const input = getInputInSection(section);
  await expect(section).toBeVisible();
  await expect(input).toBeVisible();

  // Try toggle if present, else click input + ArrowDown
  const toggle = section.locator('button[id$="-toggle-button"]').first();
  if (await toggle.count()) {
    await toggle.click();
  } else {
    await input.click();
    await input.press('ArrowDown').catch(() => {});
  }

  const menu = await getMenuByInput(page, input);
  await expect(menu).toBeVisible({ timeout: 15000 });

  // Wait until options are rendered (role="option" or <li>)
  await expect
    .poll(
      async () =>
        (await menu.locator('[role="option"]').count()) || (await menu.locator('li').count()),
      { timeout: 15000 }
    )
    .toBeGreaterThan(0);

  return { input, menu };
};

// Return a locator for the options inside a menu (role="option" preferred)
const optionsIn = async (menu: Locator) => {
  const roleOpts = menu.locator('[role="option"]');
  if (await roleOpts.count()) return roleOpts;
  return menu.locator('li');
};

// Type to filter (autocomplete)
const typeFilter = async (input: Locator, text: string) => {
  await input.fill('');
  if (text) await input.type(text);
};

// Pick first option
const selectFirstOption = async (menu: Locator) => {
  const opts = await optionsIn(menu);
  await opts.first().scrollIntoViewIfNeeded();
  await opts.first().click();
};

// Pick an option with text different from the current input value (best effort)
const selectDifferentFrom = async (menu: Locator, currentValue: string) => {
  const opts = await optionsIn(menu);
  const count = await opts.count();
  for (let i = 0; i < count; i++) {
    const o = opts.nth(i);
    const text = (await o.innerText()).trim();
    if (text && text !== currentValue) {
      await o.scrollIntoViewIfNeeded();
      await o.click();
      return true;
    }
  }
  // Fallback: click the second/first anyway
  if (count > 1) {
    await opts.nth(1).click();
    return true;
  }
  if (count > 0) {
    await opts.first().click();
    return true;
  }
  return false;
};

/* ========= Suite ========= */

test.describe('Async Combobox page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/async-combobox');
    await expect(page.getByRole('heading', { name: /Async Combobox/i })).toBeVisible();
  });

  // Example 1 — Async crypto dropdown with placeholder
  test('Example: "Async crypto dropdown with placeholder" — autocomplete + select', async ({
    page,
  }) => {
    const section = findSectionByLabel(page, /Async crypto dropdown with placeholder/i);
    const input = getInputInSection(section);

    // Initially should be empty (placeholder scenario)
    await expect(input).toBeVisible();
    const beforeTyping = await input.inputValue();
    expect(beforeTyping).toBe(''); // start empty for placeholder

    // Type a filter to trigger async results (common substring like "et")
    await typeFilter(input, 'et');

    // Ensure menu is open and populated
    const menu = await getMenuByInput(page, input);
    await expect(menu).toBeVisible({ timeout: 15000 });
    await expect
      .poll(async () => await (await optionsIn(menu)).count(), { timeout: 15000 })
      .toBeGreaterThan(0);

    // Select first filtered option
    await selectFirstOption(menu);

    // Input should now have a value
    await expect.poll(() => input.inputValue(), { timeout: 8000 }).not.toBe('');
  });

  // Example 2 — Async crypto dropdown with default selection
  test('Example: "Async crypto dropdown with default selection" — waits default, then changes selection', async ({
    page,
  }) => {
    const section = findSectionByLabel(page, /Async crypto dropdown with default selection/i);
    const input = getInputInSection(section);

    // Wait for async default to materialize into the input
    await expect.poll(() => input.inputValue(), { timeout: 15000 }).not.toBe('');
    const defaultValue = await input.inputValue();

    // Open menu and pick something else
    const { menu } = await openCombobox(page, section);

    const changed = await selectDifferentFrom(menu, defaultValue);
    expect(changed).toBeTruthy();

    // Verify it actually changed (wait for debounce/state)
    await expect.poll(() => input.inputValue(), { timeout: 8000 }).not.toBe(defaultValue);
  });
});
