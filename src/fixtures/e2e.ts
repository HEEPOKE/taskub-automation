import { Page } from "@playwright/test";
import { test as base } from "playwright-bdd";

class MyPage {
  constructor(public page: Page) {}

  async login(username: string, pass: string) {
    await this.page.getByRole("heading", { name: "Sign In" }).click();
    await this.page.getByPlaceholder("Email / Username").click();
    await this.page.getByPlaceholder("Email / Username").fill(`${username}`);
    await this.page.getByPlaceholder("Password").click();
    await this.page.getByPlaceholder("Password").fill(`${pass}`);
    await this.page.locator("#kt_sign_in_form i").click();
    await this.page.locator("#kt_sign_in_form i").click();
    await this.page.getByRole("button", { name: "Sign In" }).click();
    await this.page.getByRole("heading", { name: "เข้าสู่ระบบสำเร็จ" }).click();
    await this.page.getByRole("button", { name: "เข้าสู่ระบบ" }).click();
  }

  async chooseProject() {
    await this.page.getByText('เลือกโครงการ').click();
    await this.page.getByRole('button', { name: 'default EXP : 22 ธันวาคม 2567' }).click();
  }

  async logout() {
    await this.page.locator("a").filter({ hasText: "Sign Out" }).click();
  }
}

export const test = base.extend<{ myPage: MyPage }>({
  myPage: async ({ page }, use) => {
    await use(new MyPage(page));
  },
});
