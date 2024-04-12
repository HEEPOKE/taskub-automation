/** Generated from: src/e2e/features/auth.feature */
import { test } from "../../../../src/fixtures/e2e.ts";

test.describe("User Authentication", () => {

  test.beforeEach(async ({ Given, page }) => {
    await Given("the user has navigated to the home page", null, { page });
  });

  test("Successful login", async ({ When, myPage, Then, page, And }) => {
    await When("the user attempts to log in with valid credentials", null, { myPage });
    await Then("the user is redirected to the dashboard", null, { page });
    await Then("choose project", null, { myPage });
    await And("the user sees the management dashboard", null, { page });
  });

  test("Logout", async ({ Given, myPage, page, When, Then }) => {
    await Given("the user is logged in and on the dashboard", null, { myPage, page });
    await When("the user logs out", null, { myPage });
    await Then("the user is redirected to the home page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("src/e2e/features/auth.feature"),
});

const testMetaMap = {
  "Successful login": {"pickleLocation":"9:3"},
  "Logout": {"pickleLocation":"15:3"},
};