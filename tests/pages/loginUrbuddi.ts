import { Page } from "@playwright/test";
import LocatorsPage from "./locatorsPage";

export default class LoginPage {
    locatorsPage: LocatorsPage;

    constructor(public page: Page) {
        this.locatorsPage = new LocatorsPage(page);
        //this.testData = new testData(page);
    }
    async enterEmail(hrEmail: string) {
        await this.locatorsPage.enterEmail();
    }

    async enterPassword(password: string) {
        await this.locatorsPage.enterPassword();
    }

    async clickLoginButton() {
        await this.locatorsPage.clickLoginButton();
       // await this.page.click("button:has-text('Login')") // This is one way to write locator in CSS for text and remaianing below 2 ways
        //("[text='Login']")
        //this.page.getByRole('button', {name: 'Login'}).click();

    }



}