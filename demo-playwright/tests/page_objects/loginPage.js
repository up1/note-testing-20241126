export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async waitForUsernameField() {
    await this.page.waitForSelector("#username");
  }

  async login(username, password) {
    await this.page.fill("#username", username);
    await this.page.fill("#passwordField", password);
    await this.page.click('button:has-text("เข้าสู่ระบบ")');
  }

  async getAlertText() {
    await this.page.waitForSelector("xpath=//ng-snotify-toast/div/div/div[2]");
    return await this.page.$eval(
      "xpath=//ng-snotify-toast/div/div/div[2]",
      (el) => el.textContent
    );
  }

  async close() {
    await this.page.close();
  }
}
