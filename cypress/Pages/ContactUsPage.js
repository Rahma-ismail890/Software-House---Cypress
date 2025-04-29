class ContactUs{

    Name ='[placeholder="enter your full name"]'; 
    Email = '[placeholder="enter your email"]';
    Message = '[placeholder="Leave your Message"]';
    Button = "button";
    CountryCode = ".PhoneInputCountrySelect";
    Phone = '[name="phoneNumber"]';
    Popup = 'h2';
    ErrorMessage ='div';
    visit(){
        cy.visit("/")
        cy.get('a').contains('Contact Us').click();
    }

    getFullNameField(){
        return cy.get(this.Name);
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
        return cy.get(this.Email)
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
        return cy.get(this.Message);
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
        cy.get(this.Button).contains("submit").click();
    }
    selectCountryCode(country)
    {
        cy.get(this.CountryCode).select(country);
    }
    getPhoneField()
    {
        return cy.get(this.Phone);
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
      return  cy.get(this.Popup).contains("Successful Process")
    }
    clickOnDoneBtn(BtnName)
   {
     cy.get(this.Button).contains(BtnName).click();
   }
  
   fieldIsRequiredMessage(validationMessage)
   {
       return cy.get(this.ErrorMessage).contains(validationMessage)
   }
   errorPopup(errorMessage)
   {
    return cy.get(this.ErrorMessage).contains(errorMessage)
   }

}

export default  ContactUs;