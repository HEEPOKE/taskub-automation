import { defineConfig, devices } from '@playwright/test'
import { cucumberReporter, defineBddConfig } from 'playwright-bdd'
import configs from './src/configs/configs'

const testDir = defineBddConfig({
<<<<<<< HEAD
  paths: ["./src/e2e/features/*.feature"],
  require: ["./src/e2e/steps/*.spec.ts"],
  importTestFrom: "./src/fixtures/e2e/auth.ts",
});
=======
  paths: ['./src/e2e/features/*.feature'],
  require: ['./src/e2e/steps/*.spec.ts'],
  importTestFrom: './src/fixtures/e2e.ts',
})
>>>>>>> parent of 5556859 (feat: update test && setup :money_with_wings:)

export default defineConfig({
  testDir: testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'results/report-cucumber.html',
    }),
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry',
    headless: false,
    locale: 'th-TH',
    baseURL: `${configs.BASE_URL}`
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
