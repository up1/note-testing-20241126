export class DetailPage {
  constructor(page) {
    this.page = page;
  }

  async waitForHeader() {
    await this.page.waitForSelector("xpath=//div[6]/div[3]/div/h5");
  }

  async getHeaderText() {
    return await this.page.$eval(
      "xpath=//div[6]/div[3]/div/h5",
      (el) => el.textContent
    );
  }

  async close() {
    await this.page.close();
  }
}
