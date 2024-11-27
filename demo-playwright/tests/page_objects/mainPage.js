// @ts-check
import { test, expect } from "@playwright/test";

export class MainPage {
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("https://efiling.rd.go.th/rd-cms/");
  }

  async waitForAnnounceModal() {
    await this.page.waitForSelector("#announceModal");
    await this.page.waitForSelector(
      '#exampleModalLabel:has-text("แจ้งข่าวสาร")'
    );
  }

  async clickDetail() {
    await this.page.click("text=รายละเอียด");
    const [detailPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.page.click("text=รายละเอียด"),
    ]);
    return detailPage;
  }

  async closeAnnounceModal() {
    await this.page.click(
      'xpath=//*[@id="announceModal"]/div/div/div[1]/button'
    );
  }

  async clickLoginButton() {
    const [loginPage] = await Promise.all([
      this.page.context().waitForEvent("page"),
      this.page.click('xpath=//*[@id="top"]/div/div[2]/button[1]'),
    ]);
    return loginPage;
  }
}
