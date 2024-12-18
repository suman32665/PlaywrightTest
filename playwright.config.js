// @playwright/test configuration
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    workers: 1,
    reporter: [['html', { open: 'always' }]], // Change 'never' to 'on-failure' or 'always' as needed
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    use: {
        screenshot: 'only-on-failure',
        headless: false,
        viewport: { width: 1280, height: 720 },
        actionTimeout: 10000,
        baseURL: 'https://recruit.release.jobins.net/',
    },
    projects: [
        // {
        //   name: 'chromium',
        //   use: { ...devices['Desktop Chrome'] },
        // },
    
        // {
        //   name: 'firefox',
        //   use: { ...devices['Desktop Firefox'] },
        // },
    
        // {
        //   name: 'webkit',
        //   use: { ...devices['Desktop Safari'] },
        // },
    
        // /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
    
        /* Test against branded browsers. */
        {
          name: 'Microsoft Edge',
          use: {
            ...devices['Desktop Edge'],
            channel: 'msedge'
          },
        },
        {
          name: 'Google Chrome',
          use: {
            ...devices['Desktop Chrome'],
            channel: 'chrome'
          },
        },
      ],
});
