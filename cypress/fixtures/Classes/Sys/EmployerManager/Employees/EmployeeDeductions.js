///<reference types="cypress" />

class EmployeeDeductions {

      AddDeduction() {
            cy.wait(5000)
            cy.get(':nth-child(6) > a > .Text').click()
            cy.get('#Body_Body_btnAddDeduction').click()
            cy.get('#Body_Body_modalAddEditDeduction_lbl').click()
            cy.get('#select2-Body_Body_ddlDeductionCode-container').type('105{enter}')
            cy.wait(5000)
            cy.get('#Body_Body_txtAmount').type('99')
            cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(4) > .col-md-5').type('1/1/2020')
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-5').type('1/1/2021')
            cy.get(':nth-child(6) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(6) > .col-md-5').type('1/1/2020')
            cy.get('#select2-Body_Body_ddlDeductionStatus-container').type('Active{enter}')
            cy.get('#Body_Body_btnSave').click()
      }
      UpdateDeduction() {
            cy.wait(5000)
            cy.get('#Body_Body_gvEmployeeDeductions_btnEdit_0 > .glyphicon').click()
            cy.get('#Body_Body_modalAddEditDeduction_lbl').click()
            cy.get('#select2-Body_Body_ddlDeductionCode-container').type('105{enter}')
            cy.wait(5000)
            cy.get('#Body_Body_txtAmount').clear()
            cy.get('#Body_Body_txtAmount').type('99')
            cy.get(':nth-child(4) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(4) > .col-md-5').clear()
            cy.get(':nth-child(4) > .col-md-5').type('1/3/2021')
            cy.get(':nth-child(5) > .col-md-4 > .form-control-static').click()
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-5').clear()
            cy.get(':nth-child(5) > .col-md-5').type('1/2/2022')
            cy.get(':nth-child(6) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(6) > .col-md-5').clear()
            cy.get(':nth-child(6) > .col-md-5').type('12/3/2021')
            cy.get('#select2-Body_Body_ddlDeductionStatus-container').type('Inactive{enter}')
            cy.get('#Body_Body_btnSave').click()



      }
      DeleteDeduction() {
            cy.wait(5000)
            cy.get('#Body_Body_gvEmployeeDeductions_btnDelete_0 > .glyphicon').click()
            cy.get('.modal-footer > .btn-primary').click()


      }
}

export default EmployeeDeductions