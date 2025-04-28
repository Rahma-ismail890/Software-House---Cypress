import ContactUs from "../Pages/ContactUsPage.js"
import { CountryData } from "../support/Enums/Countries.js";
describe('ContactUs Page Tests',()=>{
    const contactUs = new ContactUs();
    let testvalidData = [];
    let testemptyData = [];
    let testInvalidData = [];
    before(() => {
        // Load the test data once before all tests
        cy.fixture('contactUsWithValidData').then((data) => {
            testvalidData = data;
        });
        cy.fixture('contactUsWithEmptyData').then((data) => {
            testemptyData = data;
        });
        cy.fixture('contactUsWithInvalidData').then((data) => {
            testInvalidData = data;
        });
    });
    beforeEach(()=>{
        contactUs.visit();
    });
   
    it.only('Submits Contact Us form with valid data', () => {testvalidData.forEach((data) => {
        cy.log(`Running test for: ${data.name}`);
        contactUs.fillFullName(data.name);
        contactUs.fillEmail(data.email);
        contactUs.fillMessage(data.message);
        contactUs.selectCountryCode(data.country);
    contactUs.fillphone(data.phone);
        contactUs.clickSubmitBTN();
        contactUs.succesMssage().should("be.visible");
        contactUs.clickOnDoneBtn("done");
      
    });
    
});
it('Submits Contact Us form with empty data', () => {testemptyData.forEach((data) => {
    cy.log(`Running test for: ${data.test}`);
    contactUs.fillFullName(data.name);
    contactUs.fillEmail(data.email);
    contactUs.fillMessage(data.message);
    contactUs.selectCountryCode(data.country);
    contactUs.fillphone(data.phone);
    contactUs.clickSubmitBTN();
    contactUs.fieldIsRequiredMessage(data.validationMessage).should("be.visible");
  
});

});
it('Submits Contact Us form with empty data', () => {testInvalidData.forEach((data) => {
    cy.log(`Running test for: ${data.test}`);
    contactUs.fillFullName(data.name);
    contactUs.fillEmail(data.email);
    contactUs.selectCountryCode(data.country);
    contactUs.fillphone(data.phone);
    contactUs.fillMessage(data.message);
    contactUs.clickSubmitBTN();
    contactUs.errorPopup(data.errorMessage).should("be.visible");
    contactUs.clickOnDoneBtn("OK");
  
});

});
   
});


    