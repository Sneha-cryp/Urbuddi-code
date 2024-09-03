import { Page } from "@playwright/test";
import LocatorsPage from "./locatorsPage";

export default class AddEmployee {
    locatorsPage: LocatorsPage;

    constructor(public page: Page) {
        this.locatorsPage = new LocatorsPage(page);
    }

    async enterFirstName(){
        await this.locatorsPage.enterFirstName();
    }
    async enterLastName(){
        await this.locatorsPage.enterLastName();
    }

    async enterEmployeeID(){
        await this.locatorsPage.enterEmployeeID();
    }

    async enterEmployeeEmail(){
        await this.locatorsPage.enterEmployeeEmail();
    }

    async selectRole(){
        await this.locatorsPage.selectRole('Employee')
        
    }

}