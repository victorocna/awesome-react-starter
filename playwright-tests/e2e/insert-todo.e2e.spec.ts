import { test, expect } from '@playwright/test';

function todoRow(page, text: string) {
  return page.locator('.todo', { hasText: text });
}

async function addTodo(page, text: string) {
  await page.getByRole('textbox', { name: /write something here/i }).fill(text);
  await page.getByRole('button', { name: /add/i }).click();
  await expect(todoRow(page, text)).toBeVisible();
}

async function toggleCompleted(page, text: string, checked = true) {
  const row = todoRow(page, text);
  const box = row.locator('input.checkbox');
  const label = row.locator('label.inline-flex');
  const isChecked = await box.isChecked();
  if (isChecked !== checked) {
    await label.click();
    const textEl = row.locator('span.flex-1');
    await expect(textEl)[checked ? 'toHaveClass' : 'not.toHaveClass'](/line-through/);
  }
}

async function setCompletionFilter(page, label: 'View all' | 'Only pending' | 'Only completed') {
  const dropdown = page.locator('.my-4 .dropdown');
  await dropdown.click();
  await page
    .locator('[role="listbox"] >> text=' + label)
    .first()
    .click();
  await expect(dropdown.locator('input[readonly]')).toHaveValue(new RegExp(label, 'i'));
}

test.describe('To-do List page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/admin');
    await page.getByRole('link', { name: /to ?do list/i }).click();
    await expect(page).toHaveURL(/\/examples\/todo-list/);
  });

  test('Insert entry', async ({ page }) => {
    await addTodo(page, 'Test To-do Entry ' + Date.now());
  });

  test('Filter dropdown works', async ({ page }) => {
    const text = 'Test To-do Entry ' + Date.now();
    await addTodo(page, text);
    await toggleCompleted(page, text, true);

    await setCompletionFilter(page, 'Only completed');
    await expect(todoRow(page, text)).toBeVisible();

    await setCompletionFilter(page, 'Only pending');
    await expect(todoRow(page, text)).toBeHidden();

    await setCompletionFilter(page, 'View all');
    await expect(todoRow(page, text)).toBeVisible();
  });

  test('Delete removes todo', async ({ page }) => {
    const text = 'Test To-do Entry ' + Date.now();
    await addTodo(page, text);
    await todoRow(page, text).locator('button:has(i.fa-times)').click();
    await expect(todoRow(page, text)).toHaveCount(0);
  });
});
