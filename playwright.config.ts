import { defineConfig, devices } from "@playwright/test";
import { cucumberReporter, defineBddConfig } from "playwright-bdd";
import configs from "./src/configs/configs";

const testDir = defineBddConfig({
  paths: ["./src/e2e/features/*.feature"],
  require: ["./src/e2e/steps/*.spec.ts"],
  importTestFrom: "./src/fixtures/e2e/auth.ts",
});

export default defineConfig({
  testDir: testDir,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    cucumberReporter("html", {
      outputFile: "results/report-cucumber.html",
    }),
  ],
  use: {
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    video: "on-first-retry",
    headless: false,
    locale: "th-TH",
    baseURL: `${configs.BASE_URL}`,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
