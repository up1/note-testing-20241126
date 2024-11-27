import { test, expect } from '@playwright/test';

test('Hello Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveScreenshot();
});