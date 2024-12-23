import { test, expect } from "@playwright/test";

test("First case", async ({ page }) => {
  await test.step("Go to the main page", async () => {
    await page.goto("https://efiling.rd.go.th/rd-cms/");
    await page.waitForSelector("#announceModal");
    await page.waitForSelector('#exampleModalLabel:has-text("แจ้งข่าวสาร")');
  });

  let detailPage;
  await test.step("Click on the detail button", async () => {
    await page.click("text=รายละเอียด");
    [detailPage] = await Promise.all([
      page.context().waitForEvent("page"),
      page.click("text=รายละเอียด"),
    ]);
  });

  await test.step("Check the header text", async () => {
    await detailPage.waitForSelector("xpath=//div[6]/div[3]/div/h5");
    const textContent = await detailPage.$eval(
      "xpath=//div[6]/div[3]/div/h5",
      (el) => el.textContent
    );
    expect(textContent).toContain("ATM on Internet");
    await detailPage.close();
  });

  await test.step("Close the announce modal", async () => {
    await page.click('xpath=//*[@id="announceModal"]/div/div/div[1]/button');
  });

  let loginPage;
  await test.step("Click on the login button", async () => {
    await page.click('xpath=//*[@id="top"]/div/div[2]/button[1]');
    [loginPage] = await Promise.all([
      page.context().waitForEvent("page"),
      page.click('xpath=//*[@id="top"]/div/div[2]/button[1]'),
    ]);
  });

  // Sleep 1 second
  await test.step("Login with invalid credentials", async () => {
    await page.waitForTimeout(1000);
    await loginPage.waitForSelector("#username");
    await loginPage.fill("#username", "demo-user");
    await loginPage.fill("#passwordField", "demo-password");
    await loginPage.click('button:has-text("เข้าสู่ระบบ")');
  });

  // Check alert with xpath
  await test.step("Check the alert text", async () => {
    await loginPage.waitForSelector("xpath=//ng-snotify-toast/div/div/div[2]");
    const result = await loginPage.$eval(
      "xpath=//ng-snotify-toast/div/div/div[2]",
      (el) => el.textContent
    );
    expect(result).toContain("ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง");
    await loginPage.close();
  });
});
