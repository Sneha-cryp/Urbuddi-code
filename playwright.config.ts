//import { PlaywrightTestConfig, defineConfig, devices } from '@playwright/test';
import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/urbuddi.test.ts"], // To execute single or multiple files

  use: {
    baseURL: process.env.urBuddiURL as string, // Using environment variable
    headless: false,
    browserName: 'chromium',
    screenshot: "only-on-failure", // To see the screenshot only on failure
    video: "retain-on-failure" // To retain video only on failure
  },

  // To see the report
  retries: 0,
  reporter: [
    ["dot"], 
    ["json", {
      outputFile: "jsonReports/jsonReport.json"
    }], 
    ["html", {
      open: "always"
    }]
  ]
};

export default config;





 //import { PlaywrightTestConfig, devices } from '@playwright/test';

//const config: PlaywrightTestConfig = {
  //globalSetup: require.resolve('./test/global-setup'),
  //testDir: 'test/spec',
  //workers: 5,
  //retries: 1,
  //use: {
    //screenshot: 'only-on-failure',
    //video: 'retain-on-failure',
    //trace: 'retain-on-failure',
    // baseURL: process.env.BASE_URL || 'http://localhost:8080',
    // storageState: 'test/storage-state.json'
  //},
  //projects: [
    //{
      //name: 'chromium',
      //use: { browserName: 'chromium' }
    //},
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' }
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' }
    // },
    // {
    //   name: 'mobile-chromium',
    //   use: devices['Pixel 5']
    // },
    // {
    //   name: 'mobile-webkit',
    //   use: devices['iPhone 13']
    // }
  //]
//};

//export default config;

