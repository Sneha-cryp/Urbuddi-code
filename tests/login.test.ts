import { chromium, test } from "@playwright/test";

test("Login test Demo", async () => {
 
    // Launch browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Launch application
  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("'Login'");  // Alternatively, you can use the text selector: text=Login

  // Login to application
  await page.fill("input[name='email']", "sneha@yopmail.com");
  await page.fill("input[name='password']", "Orbita@11");
  await page.click("input[value='Login']");
  await page.waitForTimeout(5000);

  // Open a new tab
  const page1 = await context.newPage();
  await page1.goto("https://ecommerce-playground.lambdatest.io/");
  await page1.waitForTimeout(5000);

  // Open a new browser context
  const newContext = await browser.newContext();

  // From the new browser context, create a new page
  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await newPage.waitForTimeout(5000);

  // Close the browser
  await browser.close();
})