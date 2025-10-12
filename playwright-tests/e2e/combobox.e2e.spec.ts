import { test, expect, Page, Locator } from '@playwright/test';

/* ============== Helpers ============== */

const findSectionByLabel = (page: Page, labelRx: RegExp) => {
  const label = page.getByLabel(labelRx, { exact: false }).locator('xpath=.');
  // cel mai apropiat container al exemplului
  return label.locator('xpath=ancestor-or-self::*[contains(@class,"mb-4")][1]');
};

const getInputInSection = (section: Locator) => section.locator('input').first();
const getToggleInSection = (section: Locator) =>
  section.locator('button[id$="-toggle-button"]').first();

const getMenuByInput = async (page: Page, input: Locator) => {
  const controls = await input.getAttribute('aria-controls'); // ex: "combobox-simple-menu"
  if (controls) return page.locator(`#${controls}`);
  // fallback: orice listbox care apare în secțiune
  return page.locator('[role="listbox"]').last();
};

const openCombobox = async (page: Page, section: Locator) => {
  const input = getInputInSection(section);
  const toggle = getToggleInSection(section);

  await expect(section).toBeVisible();
  await expect(input).toBeVisible();

  if (await toggle.count()) {
    await toggle.click();
  } else {
    await input.click();
    await input.press('ArrowDown').catch(() => {});
  }

  const menu = await getMenuByInput(page, input);
  await expect(menu).toBeVisible({ timeout: 10000 });
  return { input, menu };
};

const waitOptions = async (menu: Locator) => {
  const opts = menu.locator('[role="option"]');
  const li = menu.locator('li');
  await expect
    .poll(async () => (await opts.count()) || (await li.count()), { timeout: 10000 })
    .toBeGreaterThan(0);
  return (await opts.count()) ? opts : li;
};

const selectFirstOption = async (menu: Locator) => {
  const options = await waitOptions(menu);
  await options.first().scrollIntoViewIfNeeded();
  await options.first().click();
};

const selectSecondOptionIfAny = async (menu: Locator) => {
  const options = await waitOptions(menu);
  const count = await options.count();
  const index = Math.min(1, Math.max(0, count - 1));
  await options.nth(index).scrollIntoViewIfNeeded();
  await options.nth(index).click();
};

const typeFilter = async (input: Locator, text: string) => {
  await input.fill(''); // curăță
  await input.type(text);
};

/* ============== Suite ============== */

test.describe('Combobox page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/combobox');
    await expect(page.getByRole('heading', { name: /Combobox/i })).toBeVisible();
  });

  // Example 1 – Simple combobox
  test('Example #1: Simple combobox — autocomplete + select', async ({ page }) => {
    const section = findSectionByLabel(page, /Simple combobox/i);
    const input = getInputInSection(section);

    await expect(input).toBeVisible();
    // tastează o literă comună ca să apară sugestii
    await typeFilter(input, 'a');

    // meniul se poate deschide automat; dacă nu, îl deschidem
    const { menu } = (await getMenuByInput(page, input).then(
      async (m) => ({ menu: m }),
      async () => await openCombobox(page, section)
    )) as { menu: Locator };

    await waitOptions(menu);
    const before = await input.inputValue();
    await selectFirstOption(menu);
    const after = await input.inputValue();

    expect(after).toBeTruthy();
    if (before) expect(after).not.toBe(before);
  });

  // Example 2 – Combobox with countries
  test('Example #2: Combobox with countries — deschide și selectează', async ({ page }) => {
    const section = findSectionByLabel(page, /Combobox with countries/i);
    const { input, menu } = await openCombobox(page, section);

    await waitOptions(menu);
    const before = await input.inputValue();
    await selectFirstOption(menu);
    const after = await input.inputValue();

    expect(after).toBeTruthy();
    if (before) expect(after).not.toBe(before);
  });

  // Example 3 – Placeholder
  test('Example #3: Country combobox with placeholder — verifică placeholder + select', async ({
    page,
  }) => {
    const section = findSectionByLabel(page, /Country combobox with placeholder/i);
    const input = getInputInSection(section);

    await expect(input).toHaveAttribute('placeholder', 'Select a country');
    await expect(input).toHaveValue('');

    // autocomplete: scrie “ro” (sau orice) → apar opțiuni
    await typeFilter(input, 'ro');

    const menu = await getMenuByInput(page, input);
    await waitOptions(menu);
    await selectFirstOption(menu);

    await expect(input).not.toHaveValue('');
  });

  // Example 4 – Default selection
  test('Example #4: Country combobox with default selection — schimbă selecția', async ({
    page,
  }) => {
    const section = findSectionByLabel(page, /Country combobox with default selection/i);
    const input = getInputInSection(section);

    await expect(input).toHaveValue('Germany');

    // deschide prin toggle și alege o opțiune diferită
    const { menu } = await openCombobox(page, section);
    await selectSecondOptionIfAny(menu);

    const after = await input.inputValue();
    expect(after).toBeTruthy();
    expect(after).not.toBe('Germany');
  });

  // Example 5 – Disabled combobox
  test('Example #5: Disabled combobox — nu se deschide și rămâne pe valoarea implicită', async ({
    page,
  }) => {
    const section = findSectionByLabel(page, /Disabled combobox with default selection/i);
    const input = getInputInSection(section);
    const toggle = getToggleInSection(section);

    await expect(input).toBeDisabled();
    await expect(input).toHaveValue('Germany');

    // aria-expanded trebuie să rămână false
    const comboboxRoot = section.locator('[role="combobox"]');
    await expect(comboboxRoot).toHaveAttribute('aria-expanded', 'false');

    // Încearcă să “deschizi” — containerul are pointer-events-none, deci click-ul nu are efect
    if (await toggle.count()) {
      await toggle.click({ force: true });
    }
    // Confirmă că aria-expanded nu s-a schimbat
    await expect(comboboxRoot).toHaveAttribute('aria-expanded', 'false');

    // Meniul poate exista în DOM, dar trebuie să fie închis/nevizibil și fără opțiuni
    const menu = page.locator('#combobox-disabled-menu');
    await expect(menu).toBeHidden(); // important: vizibilitate, nu count
    await expect(menu.locator('[role="option"], li')).toHaveCount(0);

    // Valoarea trebuie să rămână neschimbată
    await expect(input).toHaveValue('Germany');
  });
});
