import test, { chromium } from "@playwright/test";
import LoginPage from "./pages/loginUrbuddi";
import HomePage from "./pages/homePage";
import { beforeEach } from "node:test";
import dotenv from 'dotenv'
dotenv.config();
import AddEmployee from "./pages/addEmployee";


test('logintest', async() => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPageDetails = new LoginPage(page);
    const homePageDetails = new HomePage(page);
    const employeeDetails = new AddEmployee(page);
    const baseURL = process.env.urBuddiURL as string;
    const hrEmail = process.env.hrEmail as string;
    const hrPassword = process.env.hrPassword as string;
    

 
    // // Login Page Execution 
    // await page.goto("https://dev.urbuddi.com/login");
    // await page.waitForTimeout(5000);
    //  await loginPageDetails.enterEmail('bhanu@yopmail.com');
    //  await loginPageDetails.enterPassword('Orbita@11');

    await page.goto(baseURL);
    await page.waitForTimeout(5000);//dont use hardwaits in the main spec
    await loginPageDetails.enterEmail(hrEmail);
    await loginPageDetails.enterPassword(hrPassword);
    await loginPageDetails.clickLoginButton();
    await page.waitForTimeout(5000);

    //  await loginPageDetails.clickLoginButton();
    //  await page.waitForTimeout(5000);

     //Home Page Execution
     await homePageDetails.verifyImageVisible();
     await page.waitForTimeout(2000);
     await homePageDetails.clickEmployeesText();
     await page.waitForTimeout(3000);
     await homePageDetails.ClickAddEmployeeBtn();
     await page.waitForTimeout(2000);

     //Add employee execution
     await employeeDetails.enterFirstName();
     await employeeDetails.enterLastName();
     await employeeDetails.enterEmployeeID();
     await employeeDetails.enterEmployeeEmail();
     await employeeDetails.selectRole();



})