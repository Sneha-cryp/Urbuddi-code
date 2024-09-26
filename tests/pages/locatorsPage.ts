import { ElementHandle, expect, Locator, Page } from "@playwright/test";

export default class LocatorsPage {
  readonly image: Locator
   
  constructor(public page: Page) { }

    readonly userName = this.page.locator('#userEmail')
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
    readonly enterEmpPassword = this.page.locator('//*[@name="password"]')
    readonly enterEmpDOB = this.page.locator('//*[@name="dob"]')
    readonly enterEmpJoiningDate = this.page.locator('//*[@name="joiningDate"]')
    readonly selectEmpQualification = this.page.locator('//Select[@id="qualifications"]')
    readonly enterDepartment = this.page.locator('//input[@name="department"]')
    readonly selectgender = this.page.locator('//select[@id="gender"]')
    readonly enterMobileNumber = this.page.locator('//input[@name="mobileNumber"]')
    readonly selectBloodGroup = this.page.locator('//Select[@id="bloodGroup"]')
    readonly enterEmpDesignation = this.page.locator('//input[@name="designation"]')
    readonly enterEmpLocation = this.page.locator('//input[@name="location"]') 



    // readonly userName = '#userEmail';
  readonly email = 'bhanu@yopmail.com';
  readonly password = 'Orbita@11';
  readonly firstname = 'Krishna';
  readonly lastname = 'Teja';
  readonly employeeId = 'Q001';
  readonly employeeEmail = "krishna@yopmail.com";
  readonly employeePassword = "Krishna@2024";
  readonly empployeeDOB = "12-09-1997";
  readonly employeeJoiningDate = "12-10-2021";
  readonly employeeDepartment = "Software Testing";
  readonly employeeMobileNumber = "9182345676"
  readonly employeeDesignation = "Quality Analyst"
  readonly employeeLocation = "Hyderabad"

  
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

       async selectEmployeeRole(employee:string){
        await this.selecttheRole.selectOption(employee);
       }

       async enterEmployeePassword(){
        await this.enterEmpPassword.fill(this.employeePassword);
       }

       async enterEmployeeDOB(){
        const originalDOB = this.empployeeDOB; // dd-mm-yyyy format
        const [day, month, year] = originalDOB.split('-'); // Split the date into day, month, and year
        const formattedDOB = `${year}-${month}-${day}`; // Convert to yyyy-mm-dd format
        await this.enterEmpDOB.fill(formattedDOB); // Fill the date field with the reformatted date
       }

       async enterEmployeeJoinDate(){
        const originalJoinDate = this.employeeJoiningDate; // dd-mm-yyyy format
        const [day, month, year] = originalJoinDate.split('-'); // Split the date into day, month, and year
        const formattedDOB = `${year}-${month}-${day}`; // Convert to yyyy-mm-dd format
        await this.enterEmpJoiningDate.fill(formattedDOB); // Fill the date field with the reformatted date
         
       }
       
       async selectEmployeeQualification(Degree:string){
        await this.selectEmpQualification.selectOption(Degree);
       }

       async enterEmployeeDepartment(){
        await this.enterDepartment.fill(this.employeeDepartment);
       }

       async selectEmpGender(Female:string){
        await this.selectgender.selectOption(Female);
       }
      
       async enterEmployeeMobileNumber(){
        await this.enterMobileNumber.fill(this.employeeMobileNumber);
       }

       async selectEmployeeBloodGroup(p0: string){
        await this.selectBloodGroup.selectOption('A+')
       }

      async enterEmployeeDesignation(){
        await this.enterEmpDesignation.fill(this.employeeDesignation);
      }
      async enterEmployeeLocation(){
        await this.enterEmpLocation.fill(this.employeeLocation);
      }

    

      }
  



