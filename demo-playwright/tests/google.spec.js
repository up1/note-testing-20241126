import { test, expect } from '@playwright/test';

test('Hello Google', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'robot');
  await page.press('textarea[name="q"]', 'Enter');
  await page.waitForSelector('text=หุ่นยนต์');
  const robotResults = await page.textContent('#rso');
  console.log('Search results for "robot":', robotResults);
});

test('Hello Google 2', {
  tag: '@testing',
}, async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('textarea[name="q"]', 'playwright');
  await page.press('textarea[name="q"]', 'Enter');
  await page.waitForSelector('text=หุ่นยนต์');
  const robotResults = await page.textContent('#rso');
  console.log('Search results for "robot":', robotResults);
});