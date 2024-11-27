import { test, expect } from '@playwright/test';
import { MainPage } from './page_objects/mainPage';
import { DetailPage } from './page_objects/detailPage';
import { LoginPage } from './page_objects/loginPage';

test('First case with Page object model', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.goto();
  await mainPage.waitForAnnounceModal();

  const detailPageHandle = await mainPage.clickDetail();
  const detailPage = new DetailPage(detailPageHandle);
  await detailPage.waitForHeader();
  const textContent = await detailPage.getHeaderText();
  expect(textContent).toContain('ATM on Internet');
  await detailPage.close();

  await mainPage.closeAnnounceModal();

  const loginPageHandle = await mainPage.clickLoginButton();
  const loginPage = new LoginPage(loginPageHandle);

  // Sleep 1 second
  await page.waitForTimeout(1000);
  await loginPage.waitForUsernameField();
  await loginPage.login('demo-user', 'demo-password');

  const result = await loginPage.getAlertText();
  expect(result).toContain("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");

  await loginPage.close();
});
