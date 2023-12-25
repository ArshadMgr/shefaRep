///<reference types="cypress" />
class EmploymentHistory {
   AddEEHistory() {
      cy.wait(5000)
      cy.get(':nth-child(11) > a > .Text').click()
      cy.get('#Body_Body_btnAddEmploymentHistory').click()
      cy.get('#Body_Body_modalAddEmploymentHistory_lbl').click()
      cy.get('#Body_Body_tbBusinessType').type('Services')
      cy.get('#Body_Body_tbEmployer').type('EmCentrix')
      cy.get(':nth-child(3) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
      cy.get(':nth-child(3) > .col-md-5').type('1/1/2011')
      cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
      cy.get(':nth-child(4) > .col-md-5').type('1/1/2021{enter}')
      cy.get(':nth-child(4) > .col-md-4 > .form-control-static').click()
      cy.get('#tbSalary').type('70000')
      cy.get('.col-md-5 > .select2 > .selection > .select2-selection').type('Piece{enter}')
      cy.get('#Body_Body_tbJobTitle').type('SQA Engineer')
      cy.get('#Body_Body_tbTermReason').type('Unknown')
      cy.get('#Body_Body_tbPhone').type('55656565')
      cy.get('#Body_Body_tbSupervisor').type('John')
      cy.get('#Body_Body_tbDuties').type('Perform Testing/n , Automation')
      cy.get('#Body_Body_tbNotes').type('This is test note(Added by Cypress)')
      cy.get(':nth-child(13) > .col-md-5 > .AspireCheckBox > label').click()
      cy.get(':nth-child(14) > .col-md-5 > .AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSave').click()
   }
   UpdateEEHistory() {
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(15) > [title="Edit"] > .glyphicon').click()
      cy.wait(2000)
      cy.get('#Body_Body_modalAddEmploymentHistory_lbl').click()
      cy.get('#Body_Body_tbBusinessType').clear()
      cy.get('#Body_Body_tbBusinessType').type('Development')
      cy.get('#Body_Body_tbEmployer').clear()
      cy.get('#Body_Body_tbEmployer').type('Microsoft')

      cy.get(':nth-child(3) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
      cy.get(':nth-child(3) > .col-md-5').clear()
      cy.get(':nth-child(3) > .col-md-5').type('1/7/2011')
      cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
      cy.get(':nth-child(4) > .col-md-5').clear()
      cy.get(':nth-child(4) > .col-md-5').type('1/8/2021{enter}')
      cy.get(':nth-child(4) > .col-md-4 > .form-control-static').click()
      cy.get('#tbSalary').clear()
      cy.get('#tbSalary').type('80000')
      cy.get('.col-md-5 > .select2 > .selection > .select2-selection').type('Day{enter}')
      cy.get('#Body_Body_tbJobTitle').clear()
      cy.get('#Body_Body_tbJobTitle').type('Scrum Master')
      cy.get('#Body_Body_tbTermReason').clear()
      cy.get('#Body_Body_tbTermReason').type('Layoff')
      cy.get('#Body_Body_tbPhone').clear()
      cy.get('#Body_Body_tbPhone').type('33356565')
      cy.get('#Body_Body_tbSupervisor').clear()
      cy.get('#Body_Body_tbSupervisor').type('David')
      cy.get('#Body_Body_tbDuties').clear()
      cy.get('#Body_Body_tbDuties').type('Perform Testing/n , Automation_Updated')
      cy.get('#Body_Body_tbNotes').clear()
      cy.get('#Body_Body_tbNotes').type('This is test note(Added by Cypress)_Updated')

      cy.get(':nth-child(13) > .col-md-5 > .AspireCheckBox > label').click()
      cy.get(':nth-child(14) > .col-md-5 > .AspireCheckBox > label').click()
      cy.get('#Body_Body_btnSave').click()

   }
   DeleteEEHistory() {
      cy.wait(5000)
      cy.get(':nth-child(1) > :nth-child(15) > [title="Delete"] > .glyphicon').click()
      cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


   }
}

export default EmploymentHistory