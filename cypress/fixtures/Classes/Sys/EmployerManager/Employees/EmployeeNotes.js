///<reference types="cypress" />
class EmployeeNotes {
   AddNotes() {
      cy.wait(5000)
      cy.get(':nth-child(17) > a > .Text').click()
      cy.get('#Body_Body_btnAddNotes').click()
      cy.get('#Body_Body_modalManageNotes_lbl').click()
      cy.get('#Body_Body_tbTitle').type('QA Meeting')
      cy.get('#select2-Body_Body_ddlNotesCategories-container').type('Meeting{enter}')
      cy.get('#tbNotes').type('This is test Notes (Added by Cypress)')
      cy.get('#Body_Body_divManager > .col-md-8 > .AspireCheckBox > label').click()
      cy.get(':nth-child(6) > .col-md-8 > .AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSaveNotes').click()
   }
   UpdateNote() {
      cy.wait(5000)
      cy.get(':nth-child(2) > .text-nowrap > [title="Edit"] > .glyphicon').click()
      cy.get('#Body_Body_modalManageNotes_lbl').click()
      cy.get('#Body_Body_tbTitle').clear()
      cy.get('#Body_Body_tbTitle').type('TA Meeting')
      cy.get('#tbNotes').clear()
      cy.get('#tbNotes').type('This is test Notes (Added by Cypress)-Updated')
      cy.get('#Body_Body_divManager > .col-md-8 > .AspireCheckBox > label').click()
      cy.get(':nth-child(6) > .col-md-8 > .AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSaveNotes').click()
   }
   DeleteNotes() {
      cy.wait(5000)
      cy.get(':nth-child(2) > .text-nowrap > [title="Delete"] > .glyphicon').click()
      cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


   }
}

export default EmployeeNotes