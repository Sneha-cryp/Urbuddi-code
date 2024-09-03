import { expect, Locator, Page } from "@playwright/test";

export default class LocatorsPage {
  readonly image: Locator
   
  constructor(public page: Page) { }

    readonly userName = this.page.locator('#userEmail');
    readonly userPassword = this.page.locator('#userPassword')
    readonly clickonLoginButton = this.page.locator("button:has-text('Login')")
    readonly clickOnAddEmployeeBtn = this.page.locator("//button[normalize-space()='Add Employee']")
    readonly verifyOptimLogo = this.page.locator("//img[@class='company-logo-header']")
    readonly clickEmployess = this.page.locator("//p[normalize-space()='Employees']")
    readonly entertheFirstName = this.page.locator("//input[@name='firstName']")
    readonly entertheLastName = this.page.locator("//input[@name='lastName']")
    readonly entertheEmployeeID = this.page.locator("//input[@id='employeeID']")
    readonly enterempEmail = this.page.locator("//input[@name='email']")
    readonly selecttheRole = this.page.locator("//select[@id='role']")
 
    // readonly userName = '#userEmail';
  readonly email = 'bhanu@yopmail.com'
  readonly password = 'Orbita@11'
  readonly firstname = 'Krishna'
  readonly lastname = 'Teja'
  readonly employeeId = 'Q001'
  readonly employeeEmail = "krishna@yopmail.com"
    
  async enterEmail() {
        //await this.userName.waitFor({state: "visible"}); other type of verification
        expect(this.userName).toBeVisible();
        await this.userName.fill(this.email);
    }
        async enterPassword() {
        expect(this.userPassword).toBeVisible();
        await this.userPassword.fill(this.password);
       }

       async clickLoginButton() {
        expect(this.clickonLoginButton).toBeVisible();
        await this.clickonLoginButton.click()
       }

       async verifyImageVisible() {
        expect(this.verifyOptimLogo).toBeVisible();
    
       }

       async clickAddEmployeeBtn(){
        await this.clickOnAddEmployeeBtn.isVisible();
        await this.clickOnAddEmployeeBtn.click();
       }

       async clickEmployeesText(){
        await this.clickEmployess.click();
       }

       async enterFirstName() {
        await this.entertheFirstName.fill(this.firstname);
      
       }
       async enterLastName(){
        await this.entertheLastName.fill(this.lastname);
       }
       async enterEmployeeID(){
        await this.entertheEmployeeID.fill(this.employeeId);
       }

       async enterEmployeeEmail(){
        await this.enterempEmail.fill(this.employeeEmail);
       }

       async selectRole(employee:string){
        await this.selecttheRole.selectOption(employee);
       }
    }    




