///<reference types="cypress" />
class EmployeeRates {
   AddRates() {
      cy.wait(5000)
      cy.get(':nth-child(19) > a > .Text').click()
      cy.get('#Body_Body_tabContainer_ucDefaultRates_btnAddRate').click()
      cy.get('#Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_modalRate_lbl').click()
      cy.get('#select2-Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_ucDefaultRate_ddlRPayrollCalendarRuleID-container').type('Monthly{enter}')
      cy.wait(3000)
      cy.get('#select2-Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_ucDefaultRate_ddlPayType-container').type('Salary{enter}')
      cy.wait(3000)
      cy.get('#select2-Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_ucDefaultRate_ddlIsExempt-container').type('Yes{enter}')
      cy.get(':nth-child(2) > :nth-child(2) > .form-group').type('45')
      cy.get(':nth-child(3) > :nth-child(2) > .form-group').type('70000')
      cy.get(':nth-child(5) > .col-md-6 > .form-group > .select2 > .selection > .select2-selection').type('2021{enter}')
      cy.get('#Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_btnSave').click()
   }
   UpdateRate() {
      cy.wait(5000)
      cy.get(':nth-child(1) > [style="white-space:nowrap;"] > [title="Edit"] > .glyphicon').click()
      cy.wait(2000)
      cy.get('#Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_modalRate_lbl').click()
      cy.get('#select2-Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_ucDefaultRate_ddlPayType-container').type('Hourly{enter}')
      cy.wait(3000)
      cy.get('#select2-Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_ucDefaultRate_ddlIsExempt-container').type('No{enter}')
      cy.get(':nth-child(2) > :nth-child(2) > .form-group').clear()
      cy.get(':nth-child(2) > :nth-child(2) > .form-group').type('46')
      cy.get(':nth-child(3) > :nth-child(1) > .form-group').clear()
      cy.get(':nth-child(3) > :nth-child(1) > .form-group').type('8000')
      cy.get('#Body_Body_tabContainer_ucDefaultRates_ucDefaultRateModal_btnSave').click()

   }
   DeleteRates() {
      cy.wait(5000)
      cy.get(':nth-child(1) > [style="white-space:nowrap;"] > [title="Delete"] > .glyphicon').click()
      cy.get('.modal-footer > .btn-primary').click()


   }
}

export default EmployeeRates