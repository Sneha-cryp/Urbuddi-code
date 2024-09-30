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

    async selectEmployeeRole(){
        await this.locatorsPage.selectEmployeeRole('Employee')
        
    }
    
    async enterEmployeePassword(){
        await this.locatorsPage.enterEmployeePassword();

    }

    async enterEmployeeDOB(){
        await this.locatorsPage.enterEmployeeDOB();

     
    }  
    
    async enterEmployeeJoinDate(){
        await this.locatorsPage.enterEmployeeJoinDate();
    }

    async selectEmployeeQualification(){
        await this.locatorsPage.selectEmployeeQualification('Degree');
    }
    
    async enterEmpDepartment(){
        await this.locatorsPage.enterEmployeeDepartment();
    }

    async selectEmployeeGender(){
        await this.locatorsPage.selectEmpGender('Female')
    }
    async enterEmpMobileNumber(){
        await this.locatorsPage.enterEmployeeMobileNumber();
    }
    async selectEmployeeBloodGroup(){
        await this.locatorsPage.selectEmployeeBloodGroup('A+');
    
    }
    async enterEmployeeDesignation(){
        await this.locatorsPage.enterEmployeeDesignation();
    }
    async enterLocation(){
        await this.locatorsPage.enterEmployeeLocation();
    }

    async selectEmployeeReportingTo(){
        await this.locatorsPage.selectEmpRepotingTo();
    }
    async selectEmployeeCertificates(){
        await this.locatorsPage.selectCerticates();
    }
    async clickOnAddButton(){
        await this.locatorsPage.clickAdd();
    }
}

