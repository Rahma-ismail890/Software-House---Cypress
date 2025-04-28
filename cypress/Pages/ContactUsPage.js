class ContactUs{
    visit(){
        cy.visit("/")
        cy.get('a').contains('Contact Us').click();
    }

    getFullNameField(){
        return cy.get('[placeholder="enter your full name"]')
    }

    fillFullName(name)
    {
        this.getFullNameField().clear();
        if(name)
        {
            this.getFullNameField().type(name);
        }
       
    }

    getEmailField(){
        return cy.get('[placeholder="enter your email"]')
    }
    fillEmail(email)
    {
        this.getEmailField().clear();
        if(email)
        {
            this.getEmailField().type(email);
        }
       
    }
    
    getMessageField()
    {
        return cy.get('[placeholder="Leave your Message"]')
    }
    fillMessage(message)
    {
         this.getMessageField().clear();
        if(message)
        {
            this.getMessageField().type(message);
        }
       
    }
    clickSubmitBTN()
    {
        cy.get("button").contains("submit").click();
    }
    selectCountryCode(country)
    {
        cy.get(".PhoneInputCountrySelect").select(country);
    }
    getPhoneField()
    {
        return cy.get('[name="phoneNumber"]')
    }
    fillphone(phone)
    {
        
        if(phone)
        {
            this.getPhoneField().type(phone)

        }
        else{
            this.getPhoneField().clear();
        }
       
    }
   
    succesMssage()
    {
      return  cy.get('h2').contains("Successful Process")
    }
    clickOnDoneBtn(BtnName)
   {
     cy.get("button").contains(BtnName).click();
   }
  
   fieldIsRequiredMessage(validationMessage)
   {
       return cy.get('div').contains(validationMessage)
   }
   errorPopup(errorMessage)
   {
    return cy.get('div').contains(errorMessage)
   }

}

export default ContactUs;