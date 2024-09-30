import { Page } from "@playwright/test";
export default class RegisterPage{           //export is used for to creating object
    constructor(public page: Page){ }
   
    async enterFirstName(firstname: string){
       await this.page.locator("#input-firstname")
       .type(firstname);
    }
    async enterLastName(lastname: string){
        await this.page.locator("input[name='lastname']")
        .type(lastname);
     }
     async enterEmail(email: string){
        await this.page.locator("input[name='email']")
        .type(email);
     }

     async enterTelephone(phone: string){
        await this.page.locator("input[name='telephone']")
        .type(phone);
     }
     
     async enterPassword(password: string){
        await this.page.locator("input[name='password']")
        .type(password);
     }

     async enterConfirmPassword(password: string){
        await this.page.locator("input[name='confirm']")
        .type(password);
     }
     
     async isSubscribeChecked(){
        return await this.page.locator("#input-newsLetter-no").isChecked();
     }

     async clickTermandCondition() {
        await this.page.click("input[name='agree']")

     }

     async clickContinueToRegister(){
        await this.page.click("input[value='Continue']")
     }

     
}