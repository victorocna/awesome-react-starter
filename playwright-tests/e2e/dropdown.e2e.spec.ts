import { test, expect, Page } from '@playwright/test';

const menuListSelector = (menuId: string) => `#${menuId}`;
const optionSelector = `[role="option"]:not([aria-disabled="true"]), li:not([aria-disabled="true"])`;

/** Deschide dropdown-ul pe baza ID-ului inputului (ex: 'dropdown-simple') */
const openDropdown = async (page: Page, baseId: string) => {
  const toggle = page.locator(`#${baseId}-toggle-button`);
  const menu = page.locator(menuListSelector(`${baseId}-menu`));

  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-haspopup', 'listbox');

  // aria-expanded devine true după click
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', /true/i);

  // așteaptă să se populeze opțiunile în UL
  const menuWithOptions = page.locator(`${menuListSelector(`${baseId}-menu`)} ${optionSelector}`);
  await expect(menu).toBeVisible();
  await expect(menuWithOptions.first()).toBeVisible();
};

/** Selectează prima opțiune din meniul unui dropdown */
const pickFirstOption = async (page: Page, baseId: string) => {
  const first = page.locator(`${menuListSelector(`${baseId}-menu`)} ${optionSelector}`).first();
  await first.scrollIntoViewIfNeeded();
  await first.click();
  // după click, meniul ar trebui să se închidă
  await expect(page.locator(menuListSelector(`${baseId}-menu`))).toBeHidden({ timeout: 5000 });
};

/** Selectează a N-a opțiune (0-index). Folositor pentru a schimba valoarea de la default. */
const pickNthOption = async (page: Page, baseId: string, index = 1) => {
  const list = page.locator(`${menuListSelector(`${baseId}-menu`)} ${optionSelector}`);
  const cnt = await list.count();
  if (cnt === 0) throw new Error(`No options for ${baseId}`);
  const nth = list.nth(Math.min(index, cnt - 1));
  await nth.scrollIntoViewIfNeeded();
  await nth.click();
  await expect(page.locator(menuListSelector(`${baseId}-menu`))).toBeHidden({ timeout: 5000 });
};

test.describe('Dropdown page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/dropdown');
    await expect(page.getByRole('heading', { name: /Dropdown/i })).toBeVisible();
  });

  test('Simple dropdown: selectează prima opțiune și setează valoarea', async ({ page }) => {
    const input = page.locator('#dropdown-simple');
    await expect(input).toBeVisible();
    await expect(input).toHaveAttribute('readonly', '');

    await openDropdown(page, 'dropdown-simple');
    await pickFirstOption(page, 'dropdown-simple');

    const value = await input.inputValue();
    expect(value).toBeTruthy(); // s-a setat o valoare
  });

  test('Dropdown cu țări: selectează prima opțiune', async ({ page }) => {
    const input = page.locator('#dropdown-countries');
    await expect(input).toBeVisible();

    await openDropdown(page, 'dropdown-countries');
    await pickFirstOption(page, 'dropdown-countries');

    const value = await input.inputValue();
    expect(value).toBeTruthy();
  });

  test('Dropdown cu placeholder: verifică placeholder și setează o țară', async ({ page }) => {
    const input = page.locator('#dropdown-placeholder');
    await expect(input).toHaveAttribute('placeholder', 'Select a country');
    await expect(input).toHaveValue(''); // inițial gol

    await openDropdown(page, 'dropdown-placeholder');
    await pickFirstOption(page, 'dropdown-placeholder');

    await expect(input).not.toHaveValue(''); // acum are o valoare
  });

  test('Dropdown cu selecție implicită: schimbă selecția cu o altă opțiune', async ({ page }) => {
    const baseId = 'dropdown-default';
    const input = page.locator(`#${baseId}`);
    await expect(input).toBeVisible();

    const before = await input.inputValue(); // ar trebui să fie non-empty când componenta setează default
    // Acceptăm și cazul în care default vine după primul open; deschidem oricum:
    await openDropdown(page, baseId);
    await pickNthOption(page, baseId, 1); // a 2-a opțiune ca să fie diferit de default în mod normal

    const after = await input.inputValue();
    expect(after).toBeTruthy();
    if (before) expect(after).not.toBe(before);
  });

  test('Dropdown cu placeholder + selecție implicită: verifică placeholder și schimbă selecția', async ({
    page,
  }) => {
    const baseId = 'dropdown-default-placeholder';
    const input = page.locator(`#${baseId}`);
    await expect(input).toHaveAttribute('placeholder', 'Select a country');

    // Unele implementări păstrează placeholder + default în value; verificăm apoi schimbarea
    const before = await input.inputValue();

    await openDropdown(page, baseId);
    await pickNthOption(page, baseId, 1);

    const after = await input.inputValue();
    expect(after).toBeTruthy();
    if (before) expect(after).not.toBe(before);
  });

  test('Dropdown dezactivat: nu se deschide și rămâne nemodificat', async ({ page }) => {
    const baseId = 'dropdown-disabled';
    const toggle = page.locator(`#${baseId}-toggle-button`);
    const input = page.locator(`#${baseId}`);
    const menu = page.locator(menuListSelector(`${baseId}-menu`));

    await expect(input).toBeDisabled();

    // Click-ul NU ar trebui să deschidă meniul (are pointer-events-none pe container)
    await toggle.click({ force: true });
    // aria-expanded trebuie să rămână false sau nedefinit (în funcție de implementare)
    const expanded = await toggle.getAttribute('aria-expanded');
    expect(expanded === 'false' || expanded === null).toBeTruthy();

    // Meniul nu devine vizibil
    await expect(menu).toBeHidden();
  });
});
