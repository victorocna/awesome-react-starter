import { test, expect } from '@playwright/test';

async function gotoTodoList(page) {
  await page.goto('/examples/todo-list');
  await expect(page).toHaveURL(/\/examples\/todo-list/);
}
async function gotoTodoTable(page) {
  await page.goto('/examples/todo-table');
  await expect(page).toHaveURL(/\/examples\/todo-table/);
}

async function addOnTodoList(page, text: string) {
  await gotoTodoList(page);
  await page.getByRole('textbox', { name: /write something here/i }).fill(text);
  await page.getByRole('button', { name: /add/i }).click();
  await expect(page.locator('.todo', { hasText: text })).toBeVisible();
}

async function markCompletedOnTodoList(page, text: string, done = true) {
  await gotoTodoList(page);
  const row = page.locator('.todo', { hasText: text });
  const box = row.locator('input.checkbox');
  const label = row.locator('label.inline-flex');
  const isChecked = await box.isChecked();
  if (isChecked !== done) {
    await label.click();
    const textEl = row.locator('span.flex-1');
    await expect(textEl)[done ? 'toHaveClass' : 'not.toHaveClass'](/line-through/);
  }
}

function tableRow(page, text: string) {
  return page
    .locator('tr', { hasText: text })
    .or(page.locator('[role="row"]', { hasText: text }))
    .or(page.locator('.table .row', { hasText: text }))
    .or(page.locator('.todo', { hasText: text }));
}

async function setSearch(page, query: string) {
  const search = page.locator('#search').or(page.getByPlaceholder(/search by name|#tag/i));
  await search.fill(query);
}

async function setCompletionFilterTable(page, label: 'All' | 'Pending' | 'Completed') {
  const dropdown = page.locator('#only-toggle-button');
  await dropdown.click();
  await page.locator('[role="listbox"] [role="option"]', { hasText: label }).first().click();
  await expect(dropdown.locator('input[readonly]')).toHaveValue(new RegExp(label, 'i'));
}

test.describe('To-do Table page', () => {
  test.beforeEach(async ({ page }) => {
    await gotoTodoTable(page);
  });

  test('Search filters rows by text', async ({ page }) => {
    const a = 'Test To-do Entry ' + Date.now();
    const b = 'Test To-do Entry ' + (Date.now() + 1);

    await addOnTodoList(page, a);
    await addOnTodoList(page, b);

    await gotoTodoTable(page);

    await setSearch(page, b);
    await expect(tableRow(page, b)).toBeVisible();
    await expect(tableRow(page, a)).toHaveCount(0);

    await setSearch(page, '');
    await expect(tableRow(page, a)).toBeVisible();
    await expect(tableRow(page, b)).toBeVisible();
  });

  test('Dropdown filter (All / Pending / Completed) works', async ({ page }) => {
    const pendingText = 'Pending Todo ' + Date.now();
    const completedText = 'Completed Todo ' + (Date.now() + 1);

    await addOnTodoList(page, pendingText);
    await addOnTodoList(page, completedText);
    await markCompletedOnTodoList(page, completedText, true);

    await gotoTodoTable(page);
    await setCompletionFilterTable(page, 'Completed');
    await expect(tableRow(page, completedText)).toBeVisible();
    await expect(tableRow(page, pendingText)).toHaveCount(0);

    await setCompletionFilterTable(page, 'Pending');
    await expect(tableRow(page, pendingText)).toBeVisible();
    await expect(tableRow(page, completedText)).toHaveCount(0);

    await setCompletionFilterTable(page, 'All');
    await expect(tableRow(page, pendingText)).toBeVisible();
    await expect(tableRow(page, completedText)).toBeVisible();
  });
});
