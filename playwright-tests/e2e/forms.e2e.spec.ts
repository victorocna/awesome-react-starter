import { test, expect, Page, Locator } from '@playwright/test';

test.describe('Forms page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/examples/forms');
    await expect(page.getByRole('heading', { name: /^Forms$/i })).toBeVisible();
  });

  test('walk through all form examples', async ({ page }) => {
    /* Basic input */
    const basicInput = page.locator('#easy');
    await expect(basicInput).toBeVisible();
    await basicInput.fill('Hello world');
    await expect(basicInput).toHaveValue('Hello world');

    /* Basic textarea */
    const basicTextarea = page.locator('#bio');
    await expect(basicTextarea).toBeVisible();
    await basicTextarea.fill('Short bio here.');
    await expect(basicTextarea).toHaveValue('Short bio here.');

    /* Fieldsets: email / phone / age */
    const email = page
      .locator('fieldset')
      .filter({ hasText: /Your email/i })
      .locator('input[type="email"]');
    const phone = page
      .locator('fieldset')
      .filter({ hasText: /Your phone number/i })
      .locator('input[type="tel"]');
    const age = page
      .locator('fieldset')
      .filter({ hasText: /Your age/i })
      .locator('input[type="number"]');
    await email.fill('john.doe@example.com');
    await phone.fill('+40123456789');
    await age.fill('27');
    await expect(email).toHaveValue('john.doe@example.com');
    await expect(phone).toHaveValue('+40123456789');
    await expect(age).toHaveValue('27');

    /* Native select */
    const basicSelect = page
      .locator('label:has-text("Basic select")')
      .locator('xpath=following-sibling::select[1]');
    await expect(basicSelect).toBeVisible();
    await basicSelect.selectOption({ label: 'Europe' });
    await expect(basicSelect).toHaveValue('1');

    /* Custom dropdown (Downshift) — only assert expanded toggles (no options in markup) */
    const dropdownToggle = page
      .locator('label:has-text("Or maybe you prefer a dropdown")')
      .locator('xpath=following-sibling::div[1]//div[contains(@class,"dropdown")]')
      .first();
    await expect(dropdownToggle).toBeVisible();
    // aria-expanded should flip true after click
    await dropdownToggle.click();
    await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'true');
    // close it back (best-effort)
    await dropdownToggle.click();
    await expect(dropdownToggle).toHaveAttribute('aria-expanded', 'false');

    /* Combobox — assert expanded toggles */
    const combo = page
      .locator('label:has-text("Or even a searchable combobox")')
      .locator('xpath=following-sibling::div[1]//div[@role="combobox"]')
      .first();
    await expect(combo).toBeVisible();
    // open
    const comboBtn = combo.locator('button[id*="toggle-button"]').first();
    if (await comboBtn.count()) {
      await comboBtn.click();
      await expect(combo).toHaveAttribute('aria-expanded', 'true');
      // close
      await comboBtn.click();
      await expect(combo).toHaveAttribute('aria-expanded', 'false');
    }

    /* Date picker input — type a date manually */
    const dateInput = page.locator('input.input[placeholder="yyyy-MM-dd"][name="date-picker"]');
    await expect(dateInput).toBeVisible();
    await dateInput.fill('2025-12-31');
    await dateInput.blur();
    await expect(dateInput).toHaveValue('2025-12-31');

    /* Password visibility toggle */
    const pwdWrapper = page
      .locator('h3:has-text("Passwords")')
      .locator('xpath=following-sibling::div[1]//div[contains(@class,"relative")]')
      .first();
    const pwdInput = pwdWrapper.locator('input[type="password"], input[type="text"]').first();
    const eyeBtn = pwdWrapper.getByRole('button').first();
    await expect(pwdInput).toBeVisible();
    // ensure starts as password
    await expect.poll(() => pwdInput.getAttribute('type')).toBe('password');
    // click to reveal
    await eyeBtn.click();
    await expect.poll(() => pwdInput.getAttribute('type')).toBe('text');
    // click to hide back (if toggle)
    await eyeBtn.click();
    await expect.poll(() => pwdInput.getAttribute('type')).toBe('password');

    /* Checkboxes group */
    const colorsGroup = page
      .locator('h3:has-text("Choose your favourite color (multiple options)")')
      .locator('xpath=following-sibling::div[1]');
    const greenCb = colorsGroup.getByLabel('Green', { exact: true });
    const redCb = colorsGroup.getByLabel('Red', { exact: true });
    const yellowCb = colorsGroup.getByLabel(/Yellow \(disabled\)/i);
    const purpleCb = colorsGroup.getByLabel('Purple', { exact: true });

    await expect(redCb).toBeChecked();
    await expect(yellowCb).toBeDisabled();

    await greenCb.check();
    await purpleCb.check();
    await expect(greenCb).toBeChecked();
    await expect(purpleCb).toBeChecked();

    // uncheck red
    await redCb.uncheck();
    await expect(redCb).not.toBeChecked();

    /* Radio group */
    const radioGroup = page
      .locator('h3:has-text("Choose your favourite color (one option)")')
      .locator('xpath=following-sibling::div[1]');
    const greenRadio = radioGroup.getByLabel('Green', { exact: true });
    const redRadio = radioGroup.getByLabel('Red', { exact: true });
    const yellowRadio = radioGroup.getByLabel(/Yellow \(disabled\)/i);
    const purpleRadio = radioGroup.getByLabel('Purple', { exact: true });

    await expect(redRadio).toBeChecked();
    await expect(yellowRadio).toBeDisabled();

    await greenRadio.check();
    await expect(greenRadio).toBeChecked();
    await expect(redRadio).not.toBeChecked();

    await purpleRadio.check();
    await expect(purpleRadio).toBeChecked();
    await expect(greenRadio).not.toBeChecked();

    /* Plus-minus */
    const plusMinus = page.locator('div.plusminus').first();
    await expect(plusMinus).toBeVisible();

    const qty = plusMinus.locator('input[type="number"]').first();
    const minusBtn = plusMinus.locator('button:has(i.fa-minus)').first();
    const plusBtn = plusMinus.locator('button:has(i.fa-plus)').first();

    // starts at 1
    await expect(qty).toHaveValue('1');

    // + → 2
    await plusBtn.click();
    await expect(qty).toHaveValue('2');

    // - → 1
    await minusBtn.click();
    await expect(qty).toHaveValue('1');

    /* Submit demo button (shows loading instead of submitting) */
    const submitSection = page
      .locator('h3:has-text("The submit button")')
      .locator('xpath=following-sibling::div[1]');

    const submitBtn = submitSection.getByRole('button', { name: /^Show me$/i });
    await expect(submitBtn).toBeVisible();

    await submitBtn.click();

    // The loader image appears alongside the button after click
    const loader = submitSection.locator('img[alt="loading"]');
    await expect(loader).toBeVisible({ timeout: 5000 });

    // (optional) ensure only one loader is shown
    await expect(loader).toHaveCount(1);
  });
});
