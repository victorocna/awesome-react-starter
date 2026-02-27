// playwright-tests/e2e/async-multiselect.e2e.spec.ts
import { test, expect, Page, Locator } from '@playwright/test';

/* ===== Helpers ===== */

const findExampleSectionByLabel = (page: Page, labelRx: RegExp) => {
  const label = page.getByLabel(labelRx, { exact: false }).locator('xpath=.');
  return label.locator('xpath=ancestor-or-self::*[contains(@class,"mb-4")][1]');
};

// Meniul activ (overlay)
const getMenu = (page: Page) => page.locator('div.absolute.z-50').last();

// Deschide multiselect (click pe primul input sau pe un trigger din secțiune)
const openMultiSelect = async (page: Page, section: Locator) => {
  await expect(section).toBeVisible();
  // încearcă întâi un input
  const input = section.locator('input').first();
  if (await input.count()) {
    await input.click();
  } else {
    // fallback: clic pe containerul secțiunii (dacă triggerul e custom)
    await section.click();
  }
  const menu = getMenu(page);
  await expect(menu).toBeVisible({ timeout: 15000 });
  await expect(menu.getByPlaceholder('Search...')).toBeVisible({ timeout: 15000 });
  // așteaptă ca lista să se populeze asincron
  await expect
    .poll(async () => await menu.locator('label:has(input[type="checkbox"])').count(), {
      timeout: 15000,
    })
    .toBeGreaterThan(0);
  return menu;
};

// Opțiuni (label + checkbox)
const optionLabels = (menu: Locator) => menu.locator('label:has(input[type="checkbox"])');

// Bifează primele N opțiuni
const checkFirstN = async (menu: Locator, n: number) => {
  const opts = optionLabels(menu);
  const total = await opts.count();
  const take = Math.min(n, total);
  for (let i = 0; i < take; i++) {
    await opts.nth(i).scrollIntoViewIfNeeded();
    await opts.nth(i).click();
  }
};

// Numără checkbox-urile bifate
const countChecked = async (menu: Locator) =>
  menu.locator('input[type="checkbox"]:checked').count();

// Search în meniu
const searchInMenu = async (menu: Locator, text: string) => {
  const search = menu.getByPlaceholder('Search...');
  await search.fill(text);
  // așteaptă stabilizare (DOM actualizat după filtrare)
  await expect
    .poll(async () => await optionLabels(menu).count(), { timeout: 10000 })
    .toBeGreaterThan(0);
};

// Închide meniul (best-effort)
const closeMenu = async (page: Page) => {
  await page.keyboard.press('Escape').catch(() => {});
  await page
    .locator('body')
    .click({ position: { x: 1, y: 1 } })
    .catch(() => {});
  // nu forțăm hidden, unele componente rămân montate până la blur
};

/* ===== Suite ===== */

test.describe('Async MultiSelect page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/async-multiselect');
    await expect(page.getByRole('heading', { name: /Async MultiSelect/i })).toBeVisible();
  });

  // ---------- Example 1: Async crypto multiselect ----------
  test('Example 1 (search): filtrează cu "eth"', async ({ page }) => {
    const section = findExampleSectionByLabel(page, /Async crypto multiselect$/i);
    const menu = await openMultiSelect(page, section);

    await searchInMenu(menu, 'eth');

    // a) trebuie să existe cel puțin o opțiune vizibilă (ex: Ethereum)
    await expect(optionLabels(menu).first()).toBeVisible();

    // b) pozitiv: un item cu "Ethereum" este vizibil
    await expect(menu.getByText(/Ethereum/i)).toBeVisible();

    // c) negativ: un item clar diferit (ex: Bitcoin) nu mai apare
    await expect(menu.getByText(/Bitcoin/i)).toHaveCount(0);

    await closeMenu(page);
  });

  test('Example 1 (select): bifează primele două opțiuni', async ({ page }) => {
    const section = findExampleSectionByLabel(page, /Async crypto multiselect$/i);
    const menu = await openMultiSelect(page, section);

    await checkFirstN(menu, 2);
    expect(await countChecked(menu)).toBeGreaterThanOrEqual(2);

    // (opțional) Select All dacă există
    const selectAll = menu.getByRole('button', { name: /select all/i });
    if (await selectAll.isVisible()) {
      await selectAll.click();
      expect(await countChecked(menu)).toBeGreaterThanOrEqual(3);
    }

    await closeMenu(page);
  });

  // ---------- Example 2: Async crypto multiselect with initial values ----------
  test('Example 2 (search): filtrează cu "bnb"', async ({ page }) => {
    const section = findExampleSectionByLabel(
      page,
      /Async crypto multiselect with initial values/i
    );
    const menu = await openMultiSelect(page, section);

    await searchInMenu(menu, 'bnb');

    // "BNB" ar trebui să fie vizibil
    await expect(menu.getByText(/^BNB$/i)).toBeVisible();

    // (opțional) ceva irelevant, ex "Ethereum", să nu apară
    await expect(menu.getByText(/Ethereum/i)).toHaveCount(0);

    await closeMenu(page);
  });

  test('Example 2 (select): are inițiale și poți adăuga încă una', async ({ page }) => {
    const section = findExampleSectionByLabel(
      page,
      /Async crypto multiselect with initial values/i
    );
    const menu = await openMultiSelect(page, section);

    // Așteaptă ca măcar o opțiune să fie deja bifată (inițial values)
    await expect.poll(() => countChecked(menu), { timeout: 15000 }).toBeGreaterThan(0);
    const before = await countChecked(menu);
    // Adaugă încă o opțiune: găsește primul label al cărui checkbox NU e checked
    const opts = optionLabels(menu);
    const total = await opts.count();
    let added = false;
    for (let i = 0; i < total; i++) {
      const lb = opts.nth(i);
      const cb = lb.locator('input[type="checkbox"]');
      const isChecked = await cb.isChecked().catch(() => false);
      if (!isChecked) {
        await lb.scrollIntoViewIfNeeded();
        await lb.click();
        added = true;
        break;
      }
    }
    expect(added).toBeTruthy();

    const after = await countChecked(menu);
    expect(after).toBeGreaterThan(before);

    await closeMenu(page);
  });
});
