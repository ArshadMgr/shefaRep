///<reference types="cypress" />
class EmployeeNotes {

   AddNotes() {
      
      cy.get('#Body_btnAddNotes').click()
      cy.get('#Body_modalManageNotes_lbl').click()
      cy.get('#Body_tbTitle').type('QA Meeting')
      cy.get('#select2-Body_ddlNotesCategories-container').type('Meeting{enter}')
      cy.get('#Body_tbNotes').type('This is test Notes (Added by Cypress)')
      cy.get('#Body_btnSaveNotes').click()
   }

   UpdateNote() {
      cy.wait(3000)
      cy.get(':nth-child(2) > .text-nowrap > [title="Edit"] > .glyphicon').click()
      cy.get('#Body_modalManageNotes_lbl').click()
      cy.get('#Body_tbTitle').clear()
      cy.get('#Body_tbTitle').type('TA Meeting')
      cy.get('#Body_tbNotes').clear()
      cy.get('#Body_tbNotes').type('This is test Notes (Added by Cypress)-Updated')
      cy.get('#Body_btnSaveNotes').click()
   }
   DeleteNotes() {
      cy.wait(3000)
      cy.get(':nth-child(2) > .text-nowrap > [title="Delete"] > .glyphicon').click()
      cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


   }
}

export default EmployeeNotes