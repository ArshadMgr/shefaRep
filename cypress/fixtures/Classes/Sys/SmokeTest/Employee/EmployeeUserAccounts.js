///<reference types="cypress" />


class EmployeeUserAccounts {

   AddUserAccounts() {
      cy.get('#Body_btnAddUserAccount').click()
      cy.get('#Body_modalAddEditUserAccount_lbl').click()
      cy.get('#select2-Body_ddlAccountType-container').type('Amazon{enter}')
      cy.get('#Body_txtUsername').type('AZ089')
      cy.get('#Body_txtUrl').type('https://www.amazon.com')
      cy.get('#select2-Body_ddlAccountStatus-container').type('Active{enter}')
      cy.get('.input-group-addon > .glyphicon').click()
      cy.get(':nth-child(5) > .col-md-5').type('1/1/2020')
      cy.get('#Body_txtNotes').type('This is test comment(Added by Cypress)')
      cy.get('#Body_btnSave').click()
   }
   UpdateUserAccount() {
      cy.wait(5000)
      cy.get('#Body_gvUserAccount_btnEdit_0 > .glyphicon').click()
      cy.wait(2000)
      cy.get('#Body_modalAddEditUserAccount_lbl').click()
      cy.get('#select2-Body_ddlAccountType-container').type('Google{enter}')
      cy.get('#Body_txtUsername').clear()
      cy.get('#Body_txtUsername').type('GO089')
      cy.get('#Body_txtUrl').clear()
      cy.get('#Body_txtUrl').type('https://www.Google.com')
      cy.get('#select2-Body_ddlAccountStatus-container').type('Inactive{enter}')
      cy.get('.input-group-addon > .glyphicon').click()
      cy.get(':nth-child(5) > .col-md-5').clear()
      cy.get(':nth-child(5) > .col-md-5').type('1/7/2020')
      cy.get('#Body_txtNotes').clear()
      cy.get('#Body_txtNotes').type('This is test comment(Added by Cypress)_Updated')
      cy.get('#Body_btnSave').click()

   }
   DeleteUserAccounts() {
      cy.wait(5000)
      cy.get('#Body_gvUserAccount_btnDelete_0 > .glyphicon').click()
      cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

   }
}
export default EmployeeUserAccounts