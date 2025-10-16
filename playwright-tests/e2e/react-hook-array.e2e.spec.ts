import { test, expect, Page, Locator } from '@playwright/test';

/* ---------- Helpers ---------- */

// RHF <pre> state block under the form
const statePre = (page: Page) => page.locator('pre.bg-red-200.font-mono.text-sm').first();

type RHFArrayState = {
  values: {
    reasons: Array<{ reason: string }>;
  };
  [k: string]: any;
};

const readState = async (page: Page): Promise<RHFArrayState> => {
  const raw = (await statePre(page).textContent()) ?? '{}';
  return JSON.parse(raw.replace(/\u00a0/g, ' '));
};

// Input by index: reasons.N.reason
const reasonInput = (page: Page, index: number) => page.locator(`#reasons\\.${index}\\.reason`);

// Click the “Remove” button for a given section number (1-based in UI)
const clickRemoveForSection = async (page: Page, sectionNumber: number) => {
  const headerRow = page
    .locator('.sections')
    .locator('div.flex.flex-wrap.items-center', {
      hasText: new RegExp(`Section\\s*${sectionNumber}:`, 'i'),
    })
    .first();

  const removeBtn = headerRow.getByRole('button', { name: /^Remove$/i });
  await expect(removeBtn).toBeVisible();
  await removeBtn.click();
};

test.describe('React hook array page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/react-hook-array');
    await expect(page.getByRole('heading', { name: /React hook array/i })).toBeVisible();
  });

  test('add, remove, and submit reasons array (RHF state reflects changes)', async ({ page }) => {
    // Initial state: one empty reason
    await expect
      .poll(async () => (await readState(page)).values.reasons.length, { timeout: 5000 })
      .toBe(1);
    expect((await readState(page)).values.reasons[0].reason).toBe('');

    // Fill first reason
    const r0 = reasonInput(page, 0);
    await expect(r0).toBeVisible();
    await r0.fill("Because it's fun");

    // Add a second reason (use the last "Add reason" button we find)
    const addButtons = page.getByRole('button', { name: /^Add reason$/i });
    await expect(addButtons.last()).toBeVisible();
    await addButtons.last().click();

    // Wait for #reasons.1.reason and fill it
    const r1 = reasonInput(page, 1);
    await expect(r1).toBeVisible({ timeout: 5000 });
    await r1.fill('It pays the bills');

    // Add a third reason
    await addButtons.last().click();

    const r2 = reasonInput(page, 2);
    await expect(r2).toBeVisible({ timeout: 5000 });
    await r2.fill('I like puzzles');

    // Sanity check in state (length 3)
    await expect
      .poll(async () => (await readState(page)).values.reasons.length, { timeout: 5000 })
      .toBe(3);

    // Remove Section 2 (middle one)
    await clickRemoveForSection(page, 2);

    // After removal, array length should be 2
    await expect
      .poll(async () => (await readState(page)).values.reasons.length, { timeout: 5000 })
      .toBe(2);

    // Submit
    await page.getByRole('button', { name: /^Submit$/i }).click();

    // Final state assertions from <pre>
    const st = await expect
      .poll(() => readState(page), { timeout: 8000 })
      .toBeTruthy()
      .then(() => readState(page));

    expect(st.values.reasons.length).toBe(2);
    // Remaining should be the first and third we entered, in that order:
    expect(st.values.reasons[0].reason).toBe("Because it's fun");
    expect(st.values.reasons[1].reason).toBe('I like puzzles');
  });
});
