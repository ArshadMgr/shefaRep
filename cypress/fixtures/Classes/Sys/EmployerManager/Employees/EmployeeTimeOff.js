///<reference types="cypress" />
class EmployeeTimeOff {

      AddTimeOff() {
            cy.wait(5000)

            cy.get(':nth-child(22) > a > .Text').click()
            cy.get('#Body_Body_btnAddTimeOffCode').click()
            cy.get('#Body_Body_modalAddTimeOff_lbl').click()
            cy.get('.col-md-5 > .select2 > .selection > .select2-selection').type('Holiday{enter}')
            cy.get('#Body_Body_tbAvailableHours').type('10')
            cy.get('#Body_Body_tbUsedHours').type('5')
            cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon').click()
            cy.get(':nth-child(4) > .col-md-5').type('1/1/2021')
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon').click()
            cy.get(':nth-child(5) > .col-md-5').type('1/2/2021')
            cy.get('#Body_Body_btnSave').click()

      }

      UpdateTimeOff() {

            cy.wait(5000)

            cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
            cy.get('#Body_Body_modalAddTimeOff_lbl').click()
            cy.get('#Body_Body_tbAvailableHours').clear()
            cy.get('#Body_Body_tbAvailableHours').type('15')
            cy.get('#Body_Body_tbUsedHours').clear()
            cy.get('#Body_Body_tbUsedHours').type('10')
            cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon').click()
            cy.get(':nth-child(4) > .col-md-5 ').clear()
            cy.get(':nth-child(4) > .col-md-5').type('1/8/2021')
            cy.get(':nth-child(5) > .col-md-4 > .form-control-static').click()
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon').click()
            cy.get(':nth-child(5) > .col-md-5').clear()
            cy.get(':nth-child(5) > .col-md-5').type('1/9/2021')
            cy.get('#Body_Body_btnSave').click()


      }
      DeleteTimeOff() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
            cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()



      }
}
export default EmployeeTimeOff