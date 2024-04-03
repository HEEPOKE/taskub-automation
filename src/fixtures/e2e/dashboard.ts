import { Page } from "@playwright/test";
import { test as base } from "playwright-bdd";

class DashBoardPage {
  constructor(public page: Page) {}

  async findTopic() {
    await this.page.getByRole("button", { name: "/ DashBoard /" }).click();
    await this.page.getByRole("heading", { name: "สรุปข้อมูล" }).click();
  }
}

export const test = base.extend<{ DashBoardPage: DashBoardPage }>({
  DashBoardPage: async ({ page }, use) => {
    await use(new DashBoardPage(page));
  },
});
