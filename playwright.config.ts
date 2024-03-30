import { defineConfig, devices } from '@playwright/test'
import { cucumberReporter, defineBddConfig } from 'playwright-bdd'

const testDir = defineBddConfig({
  paths: ['./src/e2e/features/*.feature'],
  require: ['./src/e2e/steps/*.spec.ts'],
})

export default defineConfig({
  testDir: testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'results/report.html',
    }),
  ],
  use: {
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    video: 'on-first-retry',
    headless: false,
    locale: 'th-TH',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
