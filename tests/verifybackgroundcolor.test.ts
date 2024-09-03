import { chromium, test, expect } from '@playwright/test';

test('verify BGC', async () => {
  // Launch a browser instance
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the page you want to test
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // replace with your target URL
  await page.waitForTimeout(5000);

  // Select the element you want to verify the background color of
  const element = await page.$('Login'); // replace with your target element's selector

  if (element) {
    // Get the background color of the element
    const backgroundColor = await element.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    // Define the expected background color (orange)
    const expectedColor = 'rgb(255, 165, 0)'; // replace with the expected color

    // Verify the background color
    expect(backgroundColor).toBe(expectedColor);

    console.log('Background color verification passed.');
  } else {

    console.log('Element not found.');
  }

  // Close the browser
  await browser.close();
});

