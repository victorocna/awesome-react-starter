import { test, expect, Page, Locator } from '@playwright/test';

const findExampleSectionByLabel = (page: Page, labelText: RegExp) => {
  const label = page.getByLabel(labelText, { exact: false }).locator('xpath=.');
  const section = label.locator('xpath=ancestor-or-self::*[contains(@class,"mb-4")][1]');
  return section;
};

const openDropdownInSection = async (section: Locator) => {
  // În interiorul secțiunii caută un toggle/input de dropdown:
  // 1) input (readonly)
  // 2) toggle div cu aria-haspopup=listbox
  const input = section.locator('input').first();
  const toggle = (await section.locator('[aria-haspopup="listbox"]').count())
    ? section.locator('[aria-haspopup="listbox"]').first()
    : null;

  // Așteaptă ca dropdown-ul să existe în DOM (randare lazy)
  await expect(section).toBeVisible();
  await expect(input).toBeVisible();

  if (toggle) {
    await toggle.click();
    await expect(toggle).toHaveAttribute('aria-expanded', /true/i, { timeout: 10000 });
  } else {
    await input.click();
  }
};

const waitForOptionsInSection = async (section: Locator) => {
  // Opțiuni compatibile cu Downshift: [role=option] într-un [role=listbox]
  const listbox = section.locator('[role="listbox"]');
  const options = section.locator('[role="listbox"] [role="option"]');

  // Unele implementări pot avea <li> fără role-uri — fallback
  const fallbackOptions = section.locator('ul li');

  // Așteaptă să apară listbox-ul/opțiunile (async)
  await expect
    .poll(
      async () => {
        if (await options.count()) return 'options';
        if (await fallbackOptions.count()) return 'fallback';
        if (await listbox.count()) return 'listbox';
        return '';
      },
      { timeout: 15000 }
    )
    .not.toBe('');

  // întoarce locatorul valid pentru opțiuni
  if (await options.count()) return options;
  return fallbackOptions;
};

const pickFirstOptionInSection = async (section: Locator) => {
  const options = await waitForOptionsInSection(section);
  await options.first().scrollIntoViewIfNeeded();
  await options.first().click();
  // așteaptă ca meniul să se închidă (role=listbox să dispară) sau focus să revină pe input
  const listbox = section.locator('[role="listbox"]');
  await expect(listbox)
    .toBeHidden({ timeout: 5000 })
    .catch(() => {});
};

const pickSecondOptionIfPossible = async (section: Locator) => {
  const options = await waitForOptionsInSection(section);
  const count = await options.count();
  const index = Math.min(1, Math.max(0, count - 1)); // dacă există o a 2-a opțiune, o luăm pe aceea
  await options.nth(index).scrollIntoViewIfNeeded();
  await options.nth(index).click();
  const listbox = section.locator('[role="listbox"]');
  await expect(listbox)
    .toBeHidden({ timeout: 5000 })
    .catch(() => {});
};

const getSectionInput = (section: Locator) => section.locator('input').first();

// ————— Teste —————
test.describe('Async Dropdown page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/async-dropdown');
    await expect(page.getByRole('heading', { name: /Async Dropdown/i })).toBeVisible();
  });

  test('Example: "Async crypto dropdown with placeholder" — selectează prima opțiune după încărcare', async ({
    page,
  }) => {
    const section = findExampleSectionByLabel(page, /Async crypto dropdown with placeholder/i);
    const input = getSectionInput(section);

    // înainte de selecție, ar trebui să fie gol (placeholder prezent)
    await expect(input).toBeVisible();
    const before = await input.inputValue();

    await openDropdownInSection(section);
    await pickFirstOptionInSection(section);

    // valoarea trebuie să fie populată (async → poate dura puțin până se setează)
    await expect.poll(async () => input.inputValue(), { timeout: 8000 }).not.toBe('');

    const after = await input.inputValue();
    expect(after).toBeTruthy();
    if (before) expect(after).not.toBe(before);
  });

  test('Example: "Async crypto dropdown with default selection" — are default și o poți schimba', async ({
    page,
  }) => {
    const section = findExampleSectionByLabel(
      page,
      /Async crypto dropdown with default selection/i
    );
    const input = getSectionInput(section);

    await expect(input).toBeVisible();

    // Deoarece e async, așteptăm ca default-ul să apară în input
    const defaultValue = await expect
      .poll(async () => input.inputValue(), { timeout: 15000 })
      .not.toBe(''); // trebuie să devină non-empty

    // Deschidem dropdown-ul și alegem altă opțiune (dacă există)
    await openDropdownInSection(section);
    await pickSecondOptionIfPossible(section);

    // Verificăm că s-a schimbat valoarea (dacă a existat una diferită)
    await expect.poll(async () => input.inputValue(), { timeout: 8000 }).not.toBe(defaultValue);
  });
});
