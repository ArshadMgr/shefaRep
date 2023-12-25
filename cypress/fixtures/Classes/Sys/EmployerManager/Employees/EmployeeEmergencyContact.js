///<reference types="cypress" />
class EmployeeEmergencyContact {
   AddEEContact() {
      cy.wait(5000)
      cy.get(':nth-child(10) > a > .Text').click()
      cy.get('#Body_Body_btnAddEmergencyContact').click()
      cy.get('#Body_Body_modalAddEmergencyContact_lbl').click()
      cy.get('#Body_Body_tbContactName').type('John Doe')
      cy.get('#select2-Body_Body_ddlRelationship-container').type('Brother{enter}')
      cy.get('#select2-Body_Body_ddlCountryID-container').type('United States{enter}')
      cy.wait(3000)
      cy.get('#Body_Body_tbAddress1').type('Address1')
      cy.get('#Body_Body_tbAddress2').type('Address2')
      cy.get('#Body_Body_tbHomePhone').type('1234567890')
      cy.get('#Body_Body_tbWorkPhone').type('9876543210')
      cy.get('#Body_Body_tbCellPhone').type('9872223210')
      cy.get('#Body_Body_tbEmail').type('John@test.com')
      cy.get('#Body_Body_tbCity').type('New York')
      cy.get('#select2-Body_Body_ddlStateID-container').type('New York{enter}')
      cy.get('#Body_Body_tbZip').type('12345')
      cy.get('.AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSaveCategoryCode').click()
   }
   UpdateEmgContact() {
      cy.wait(5000)
      cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
      cy.get('#Body_Body_modalAddEmergencyContact_lbl').click()
      cy.get('#Body_Body_tbContactName').clear()
      cy.get('#Body_Body_tbContactName').type('Britney Spears')
      cy.get('#select2-Body_Body_ddlRelationship-container').type('Aunt{enter}')
      cy.get('#select2-Body_Body_ddlCountryID-container').type('United States{enter}')
      cy.wait(3000)
      cy.get('#Body_Body_tbAddress1').clear()
      cy.get('#Body_Body_tbAddress1').type('Address1_Updated')
      cy.get('#Body_Body_tbAddress2').clear()
      cy.get('#Body_Body_tbAddress2').type('Address2_Updated')
      cy.get('#Body_Body_tbHomePhone').clear()
      cy.get('#Body_Body_tbHomePhone').type('3334567890')
      cy.get('#Body_Body_tbWorkPhone').clear()
      cy.get('#Body_Body_tbWorkPhone').type('4446543210')
      cy.get('#Body_Body_tbCellPhone').clear()
      cy.get('#Body_Body_tbCellPhone').type('5552223210')
      cy.get('#Body_Body_tbEmail').clear()
      cy.get('#Body_Body_tbEmail').type('Britney@test.com')
      cy.get('#Body_Body_tbCity').clear()
      cy.get('#Body_Body_tbCity').type('New Mexico')
      cy.get('#select2-Body_Body_ddlStateID-container').type('New Mexico{enter}')
      cy.get('#Body_Body_tbZip').clear()
      cy.get('#Body_Body_tbZip').type('54321')
      cy.get('.AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSaveCategoryCode').click()

   }
   DeleteEmgContacts() {
      cy.wait(5000)
      cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
      cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


   }
}
export default EmployeeEmergencyContact