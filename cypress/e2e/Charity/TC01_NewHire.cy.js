
import login from "../../fixtures/Classes/Login_CL";
import NewHire from "../../fixtures/Classes/AddNewHire";



describe('New Hire ', () => {
    it('New Hire ', () => {
     
      var eRLogin=new login()
      eRLogin.erLogin()
      
    
      var NH = new NewHire()
      cy.visit("https://mypaperlessoffice.com/app/Sys/EmployerManager/Employees/NewHire.aspx")
        NH.demographics()
        NH.ContactInfo()
        NH.StatusInfo()
        NH.PayRateInfo()
        NH.FedralTaxInfo()
        NH.StateTaxInfo()
        
    

    })
  })

  // Test Commnet