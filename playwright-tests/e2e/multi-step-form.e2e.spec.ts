import { test, expect, Page } from '@playwright/test';

/* ---------- Shared selectors & helpers ---------- */

const stepBars = (page: Page) =>
  page.locator('.grid.grid-cols-3 .text-default.h-2.w-full.rounded-full');

const statePre = (page: Page) => page.locator('pre.bg-red-200.font-mono.text-sm').first();

type FormState = {
  values: {
    fullname: string;
    email: string;
    filter: string;
    county: string;
    terms: boolean;
    country?: string;
    state?: string;
    dateOfBirth?: string;
    age?: number;
    bio?: string;
  };
  [k: string]: any;
};

const readState = async (page: Page): Promise<FormState> => {
  const raw = (await statePre(page).textContent()) ?? '{}';
  return JSON.parse(raw.replace(/\u00a0/g, ' '));
};

const setFilterIfPossible = async (page: Page, wanted: RegExp): Promise<void> => {
  const toggle = page.locator('#filter-toggle-button');
  if (!(await toggle.count())) return;

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  const listbox = page.locator('#filter-menu');
  await expect(listbox).toBeVisible();

  const opt = listbox.getByRole('option', { name: wanted }).first();
  if (await opt.count()) {
    await opt.click();
    return;
  }
  const byText = listbox.locator('*', { hasText: wanted }).first();
  if (await byText.count()) {
    await byText.click();
    return;
  }
  // close best-effort if nothing matched
  await toggle.click().catch(() => {});
};

const expectedAgeFrom = async (page: Page, isoDate: string) => {
  return await page.evaluate((d: string) => {
    const [y, m, dd] = d.split('-').map(Number);
    const today = new Date();
    let age = today.getFullYear() - y;
    const hasBirthdayPassed =
      today.getMonth() + 1 > m || (today.getMonth() + 1 === m && today.getDate() >= dd);
    if (!hasBirthdayPassed) age -= 1;
    return age;
  }, isoDate);
};

/* ---------- Step helpers (DRY) ---------- */

const completeStep1 = async (page: Page, data?: { fullname?: string; email?: string }) => {
  const fullName = page.locator('#fullname');
  await fullName.fill(data?.fullname ?? 'Ion Popescu');
  await fullName.blur();

  const email = page.locator('#email');
  await email.fill(data?.email ?? 'ion@example.com');
  await email.blur();

  await setFilterIfPossible(page, /completed/i); // best effort

  // County combobox: type → pick first
  const county = page.locator('#county');
  await county.fill('Bucur');
  const menu = page.locator('#county-menu');
  await expect(menu).toBeVisible();
  await menu.locator('li, [role="option"]').first().click();

  const terms = page.locator('#terms');
  await terms.check();

  // Continue -> Step 2
  await page.getByRole('button', { name: /^Continue$/i }).click();
  await expect(stepBars(page).nth(0)).toHaveClass(/bg-green-500/);
  await expect(stepBars(page).nth(1)).toHaveClass(/bg-green-500/);

  // State sanity
  await expect
    .poll(async () => (await readState(page)).values.email, { timeout: 8000 })
    .toBe(data?.email ?? 'ion@example.com');
};

const completeStep2 = async (page: Page, dob = { y: '1989', m: '6', d: '10' }) => {
  // Country (prefer USA)
  const countryToggle = page.locator('#country-toggle-button');
  await countryToggle.click();
  await expect(countryToggle).toHaveAttribute('aria-expanded', 'true');

  const countryMenu = page.locator('#country-menu');
  await expect(countryMenu).toBeVisible();

  const usa = countryMenu.getByRole('option', { name: /United\s*States|USA/i }).first();
  let pickedCountry = '';
  if (await usa.count()) {
    pickedCountry = (await usa.textContent())?.trim() ?? 'United States';
    await usa.click();
  } else {
    const first = countryMenu
      .getByRole('option')
      .first()
      .or(countryMenu.locator('*').filter({ hasText: /\S/ }).first());
    await expect(first).toBeVisible();
    pickedCountry = (await first.textContent())?.trim() ?? 'Unknown';
    await first.click();
  }

  // State only if USA
  const stateSelect = page.locator('#state');
  if (/United\s*States|USA/i.test(pickedCountry)) {
    await expect(stateSelect).toBeEnabled();
    const preferred = 'California';
    const hasPreferred = await stateSelect
      .locator(`option[value="${preferred}"], option:has-text("${preferred}")`)
      .count();
    if (hasPreferred) {
      await stateSelect.selectOption({ label: preferred }).catch(async () => {
        await stateSelect.selectOption(preferred);
      });
    } else {
      const firstReal = await stateSelect.evaluate((sel: HTMLSelectElement) => {
        const idx = Array.from(sel.options).findIndex((o) => o.value && !o.hidden);
        return idx > -1 ? sel.options[idx].value : '';
      });
      if (firstReal) await stateSelect.selectOption(firstReal);
    }
    await expect(stateSelect).not.toHaveValue('');
  } else {
    await expect(stateSelect).toBeDisabled();
  }

  // DOB → verify age correctness
  await page.locator('#year').selectOption(dob.y);
  await page.locator('#month').selectOption(dob.m); // 1-12
  await page.locator('#day').selectOption(dob.d);

  await expect
    .poll(async () => (await readState(page)).values.dateOfBirth ?? '', { timeout: 8000 })
    .toMatch(/^\d{4}-\d{2}-\d{2}$/);

  const st = await readState(page);
  const dobISO = st.values.dateOfBirth!;
  const expectedAge = await expectedAgeFrom(page, dobISO);

  const ageInput = page.locator('#age');
  await expect(ageInput).toHaveAttribute('readonly', '');
  await expect
    .poll(async () => Number(await ageInput.inputValue()), { timeout: 8000 })
    .toBe(expectedAge);
  await expect
    .poll(async () => (await readState(page)).values.age ?? -1, { timeout: 8000 })
    .toBe(expectedAge);

  // Continue -> Step 3
  await page.getByRole('button', { name: /^Continue$/i }).click();
  await expect(stepBars(page).nth(2)).toHaveClass(/bg-green-500/);
};

const ensureOnStep2 = async (page: Page) => {
  const isStep2 = await stepBars(page)
    .nth(1)
    .evaluate((el) => el.className.includes('bg-green-500'));
  if (!isStep2) await completeStep1(page);
};

const ensureOnStep3 = async (page: Page) => {
  const isStep3 = await stepBars(page)
    .nth(2)
    .evaluate((el) => el.className.includes('bg-green-500'));
  if (!isStep3) {
    await ensureOnStep2(page);
    await completeStep2(page);
  }
};

/* ---------- Tests (separate per step, minimal duplication) ---------- */

test.describe('Complex multi step form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/multi-step-form');
    await expect(page.getByRole('heading', { name: /^Complex multi step form$/i })).toBeVisible();
  });

  test('Step 1 → Continue → state updated & Step 2 active', async ({ page }) => {
    await completeStep1(page);

    const st = await readState(page);
    expect(st.values.fullname).toBeTruthy();
    expect(st.values.email).toBeTruthy();
    expect(st.values.terms).toBe(true);
    expect(st.values.filter).toBeTruthy();
    expect(st.values.county).toBeTruthy();
  });

  test('Step 2 (Country + State + DOB) → age correct → Continue → Step 3 active', async ({
    page,
  }) => {
    await ensureOnStep2(page);
    await completeStep2(page); // includes age correctness check
  });

  test('Step 3: fill Bio → Finish → state reflects Bio (isValid usually true)', async ({
    page,
  }) => {
    // This guarantees we’ve properly completed Country/State/DOB before Step 3
    await ensureOnStep3(page);

    const bio = page.locator('#bio');
    const text = 'Loves TypeScript, testing, and clean UIs.';
    await bio.fill(text);

    await page.getByRole('button', { name: /^Finish$/i }).click();

    await expect
      .poll(async () => (await readState(page)).values.bio ?? '', { timeout: 8000 })
      .toBe(text);

    const st = await readState(page);
    if (typeof st.isValid === 'boolean') {
      expect(st.isValid).toBe(true);
    }
  });
  test('Back buttons: Step 3 → Step 2 → Step 1 preserve previously filled data', async ({
    page,
  }) => {
    // Step 1
    await completeStep1(page, { fullname: 'Back Tester', email: 'back@test.com' });

    // Step 2 (explicit DOB so we can assert it)
    const dob = { y: '2011', m: '3', d: '13' }; // 2011-03-13
    await completeStep2(page, dob);

    // We are on Step 3 now; capture state snapshot for Step 2 fields
    const s2 = await readState(page);
    const prevCountry = s2.values.country ?? '';
    const prevState = s2.values.state ?? '';
    const prevDOB = s2.values.dateOfBirth ?? '';
    const prevAge = s2.values.age ?? -1;

    // (Optional) type something in Bio to ensure it's not interfering with back behavior
    const bio = page.locator('#bio');
    await expect(bio).toBeVisible();
    await bio.fill('Temporary bio text…');

    // BACK → Step 2
    await page.getByRole('button', { name: /^Back to previous step$/i }).click();
    await expect(stepBars(page).nth(1)).toHaveClass(/bg-green-500/); // Step 2 active again

    // Country persisted (input#country holds the visible label, state holds the value)
    const countryInput = page.locator('#country');
    await expect(countryInput).toBeVisible();
    const countryText = await countryInput.inputValue();
    expect(typeof prevCountry).toBe('string');
    expect(prevCountry.length).toBeGreaterThan(0);
    // be flexible: USA vs United States label
    expect(
      new RegExp(prevCountry.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i').test(countryText) ||
        /united|usa/i.test(countryText)
    ).toBeTruthy();

    // State persisted when USA (else it's disabled)
    const stateSelect = page.locator('#state');
    if (/usa|united/i.test(countryText)) {
      await expect(stateSelect).toBeEnabled();
      const stateValue = await stateSelect.inputValue();
      expect(stateValue).toBeTruthy(); // not empty
    } else {
      await expect(stateSelect).toBeDisabled();
    }

    // DOB selects persisted
    await expect(page.locator('#year')).toHaveValue(dob.y);
    await expect(page.locator('#month')).toHaveValue(dob.m);
    await expect(page.locator('#day')).toHaveValue(dob.d);

    // AGE persisted & still correct
    const ageInput = page.locator('#age');
    const expectedAge = await expectedAgeFrom(
      page,
      prevDOB || `${dob.y}-${dob.m.padStart(2, '0')}-${dob.d.padStart(2, '0')}`
    );
    await expect(ageInput).toHaveAttribute('readonly', '');
    await expect
      .poll(async () => Number(await ageInput.inputValue()), { timeout: 8000 })
      .toBe(expectedAge);
    await expect
      .poll(async () => (await readState(page)).values.age ?? -1, { timeout: 8000 })
      .toBe(expectedAge);
    // Also matches the snapshot we took before going back
    expect(prevAge).toBe(expectedAge);

    await page.getByRole('button', { name: /^Back to previous step$/i }).click();
    await expect(stepBars(page).nth(0)).toHaveClass(/bg-green-500/); // Step 1 active

    // Step 1 data persisted (use live <pre> state for truth)
    const s1 = await readState(page);
    expect(s1.values.fullname).toBe('Back Tester');
    expect(s1.values.email).toBe('back@test.com');
    expect(s1.values.terms).toBe(true);
    expect(typeof s1.values.county).toBe('string');
    expect(s1.values.county.length).toBeGreaterThan(0);
    expect(typeof s1.values.filter).toBe('string');
    expect(s1.values.filter.length).toBeGreaterThan(0);
  });
});
