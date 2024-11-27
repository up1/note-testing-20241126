import { test, expect } from '@playwright/test';

test('First case', async ({ page }) => {
  await page.goto('https://efiling.rd.go.th/rd-cms/');
  await page.waitForSelector('#announceModal');
  await page.waitForSelector('#exampleModalLabel:has-text("แจ้งข่าวสาร")');
  
  await page.click('text=รายละเอียด');
  const [detailPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('text=รายละเอียด')
  ]);
  await detailPage.waitForSelector('xpath=//div[6]/div[3]/div/h5');
  const textContent = await detailPage.$eval('xpath=//div[6]/div[3]/div/h5', el => el.textContent);
  expect(textContent).toContain('ATM on Internet');
  await detailPage.close();

  await page.click('xpath=//*[@id="announceModal"]/div/div/div[1]/button');
  
  await page.click('xpath=//*[@id="top"]/div/div[2]/button[1]');
  const [loginPage] = await Promise.all([
    page.context().waitForEvent('page'),
    page.click('xpath=//*[@id="top"]/div/div[2]/button[1]')
  ]);

  // Sleep 1 second
  await page.waitForTimeout(1000);
  await loginPage.waitForSelector('#username');
  await loginPage.fill('#username', 'demo-user');
  await loginPage.fill('#passwordField', 'demo-password');
  await loginPage.click('text=เข้าสู่ระบบ');
  loginPage.close();
});
