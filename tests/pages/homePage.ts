import { Page, Locator, expect } from "@playwright/test";
import LocatorsPage from "./locatorsPage";

export default class HomePage {
  locatorsPage: LocatorsPage;
  
  constructor(public page: Page) {
    this.locatorsPage = new LocatorsPage(page);

  //constructor(page: Page) {
    //this.page = page;
    //this.image = this.page.locator("//img[@class='company-logo-header']");
    //this.ClickOnAddEmployeeBtn = this.page.locator("//button[normalize-space()='Add Employee']")
  }

  async verifyImageVisible() {
  await this.locatorsPage.verifyImageVisible();
}
async clickEmployeesText(){
  await this.locatorsPage.clickEmployeesText();
}
   async ClickAddEmployeeBtn(){
    await this.locatorsPage.clickAddEmployeeBtn();
}

   
}
