import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import configs from "../../configs/configs";
import { test } from "../../fixtures/e2e/auth";

const { Given, When, Then } = createBdd(test);

Given("the user has navigated to the home page", async ({ page }) => {
  await page.goto("/login");
});

When(
  "the user attempts to log in with valid credentials",
  async ({ myPage }) => {
    await myPage.login(`${configs.USERNAME}`, `${configs.PASSWORD}`);
  }
);

Then("the user is redirected to the dashboard", async ({ page }) => {
  await page.waitForURL(`${configs.BASE_URL}/`);
});

Then("choose project", async ({ myPage }) => {
  await myPage.chooseProject();
});

Then("the user sees the management dashboard", async ({ page }) => {
  await expect(page.getByRole("heading", { name: "จัดการระบบ" })).toBeVisible();
});

Given(
  "the user is logged in and on the dashboard",
  async ({ myPage, page }) => {
    await myPage.login(`${configs.USERNAME}`, `${configs.PASSWORD}`);
    await page.waitForURL(`${configs.BASE_URL}/`);
  }
);

When("the user logs out", async ({ myPage }) => {
  await myPage.logout();
});

Then("the user is redirected to the home page", async ({ page }) => {
  await page.waitForURL(`${configs.BASE_URL}/login`);
});
