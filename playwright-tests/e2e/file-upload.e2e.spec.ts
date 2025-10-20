import { test, expect, Page, Locator } from '@playwright/test';

/* ========== Helpers ========== */

// Build a virtual file object Playwright accepts
const vfile = (name: string, mimeType: string, content: string | Uint8Array) => ({
  name,
  mimeType,
  buffer: content instanceof Uint8Array ? Buffer.from(content) : Buffer.from(content),
});

// Find the example container following a <p> title
const exampleBoxByTitle = (page: Page, titleRx: RegExp) =>
  page.locator('p').filter({ hasText: titleRx }).first().locator('xpath=following-sibling::div[1]');

// Inside an example “box”, get the hidden file input and the filename <p> (if present)
const fileInputIn = (box: Locator) => box.locator('input[type="file"]').first();
const filenameTextIn = (box: Locator) => box.locator('p.m-0.truncate');

// Click the “Select” button in a box (first button)
const selectButtonIn = (box: Locator) => box.getByRole('button', { name: /^Select$/i }).first();

// Helpers to read FileList
const getFilesCount = (input: Locator) =>
  input.evaluate((el) => (el as HTMLInputElement).files?.length ?? 0);

const getFileNames = (input: Locator) =>
  input.evaluate((el) => {
    const files = (el as HTMLInputElement).files;
    return files ? Array.from(files).map((f) => f.name) : [];
  });

test.describe('File upload page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/file-upload');
    await expect(page.getByRole('heading', { name: /File upload/i })).toBeVisible();
  });

  test('Default file input (with drop enabled): set single file & see filename', async ({
    page,
  }) => {
    const box = exampleBoxByTitle(page, /Default file input example \(with drop enabled\)/i);
    const input = fileInputIn(box);
    const nameP = filenameTextIn(box);

    await input.setInputFiles(vfile('sample.txt', 'text/plain', 'hello world'));

    expect(await getFilesCount(input)).toBe(1);
    await expect(nameP).toContainText('sample.txt');
  });

  test('File drop (with drop enabled): set multiple files via input', async ({ page }) => {
    const box = exampleBoxByTitle(page, /File drop \(with drop enabled\)/i);
    const input = fileInputIn(box);

    await input.setInputFiles([
      vfile('a.txt', 'text/plain', 'aaa'),
      vfile('b.txt', 'text/plain', 'bbb'),
    ]);

    expect(await getFilesCount(input)).toBe(2);
    const names = await getFileNames(input);
    expect(names).toEqual(expect.arrayContaining(['a.txt', 'b.txt']));
  });

  test('Default file input (without drop): select via real file chooser', async ({ page }) => {
    const box = exampleBoxByTitle(page, /Default file input example \(without drop\)/i);
    const input = fileInputIn(box);
    const nameP = filenameTextIn(box);
    const btn = selectButtonIn(box);

    const [chooser] = await Promise.all([page.waitForEvent('filechooser'), btn.click()]);
    await chooser.setFiles(vfile('doc.pdf', 'application/pdf', '%PDF-1.4\n%...'));

    expect(await getFilesCount(input)).toBe(1);
    await expect(nameP).toContainText('doc.pdf');
  });

  test('File drop (without drop): multiple files via input', async ({ page }) => {
    const box = exampleBoxByTitle(page, /File drop \(without drop\)/i);
    const input = fileInputIn(box);

    await input.setInputFiles([
      vfile('one.txt', 'text/plain', '1'),
      vfile('two.txt', 'text/plain', '2'),
      vfile('three.txt', 'text/plain', '3'),
    ]);

    expect(await getFilesCount(input)).toBe(3);
  });

  test('PDF-only input: accepts .pdf and shows filename', async ({ page }) => {
    const box = exampleBoxByTitle(page, /File input upload \(accepts only PDF files\)/i);
    const input = fileInputIn(box);
    const nameP = filenameTextIn(box);

    await input.setInputFiles(vfile('only.pdf', 'application/pdf', '%PDF-1.4\n%...'));

    const names = await getFileNames(input);
    expect(names).toEqual(['only.pdf']);
    await expect(nameP).toContainText('only.pdf');
  });

  test('Disabled file drop: "Select" is disabled; input stays empty', async ({ page }) => {
    const box = exampleBoxByTitle(page, /Disabled file drop/i);
    const input = fileInputIn(box);
    const btn = selectButtonIn(box);

    await expect(btn).toBeDisabled();
    await btn.click({ force: true }).catch(() => {});
    expect(await getFilesCount(input)).toBe(0);
  });

  test('Multiple file input upload: set two files; count = 2; filename label updates (if present)', async ({
    page,
  }) => {
    const box = exampleBoxByTitle(page, /Multiple file input upload/i);
    const input = fileInputIn(box);
    const label = filenameTextIn(box);

    // minimal PNG magic header bytes
    const png = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
    await input.setInputFiles([
      vfile('img1.png', 'image/png', png),
      vfile('img2.png', 'image/png', png),
    ]);

    expect(await getFilesCount(input)).toBe(2);

    const labelText = (await label.textContent())?.trim() ?? '';
    if (labelText) {
      expect(labelText).toMatch(/img1\.png|img2\.png/);
    }
  });

  test('Disabled file input upload: "Select" disabled; input stays empty', async ({ page }) => {
    const box = exampleBoxByTitle(page, /Disabled file input upload/i);
    const input = fileInputIn(box);
    const btn = selectButtonIn(box);

    await expect(btn).toBeDisabled();
    await btn.click({ force: true }).catch(() => {});
    expect(await getFilesCount(input)).toBe(0);
  });

  test('Submit button remains disabled until business logic enables it (sanity)', async ({
    page,
  }) => {
    const submit = page.getByRole('button', { name: /^Submit$/i });
    await expect(submit).toBeVisible();
    await expect(submit).toBeDisabled();
  });
});
