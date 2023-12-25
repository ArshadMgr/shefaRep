///<reference types="cypress" />

class EmployeeLicenses {

      AddLicenses() {

            cy.wait(5000)
            cy.get(':nth-child(16) > a > .Text').click()
            cy.get('#Body_Body_btnAddLicense').click()
            cy.get('#Body_Body_modalAddLicense_lbl').click()

            cy.get('#Body_Body_tbTitle').type('Driving')
            cy.get('#select2-Body_Body_ddlLicenseType-container').type('Driving{enter}')
            cy.get('#Body_Body_tbIssuedBy').type('City Traffice Police')
            cy.get('#Body_Body_tbLicenseNumber').type('7788')
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-5').type('1/1/2020')
            cy.get(':nth-child(6) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(6) > .col-md-5').type('1/1/2021')
            cy.get('.AspireCheckBox > label').click()
            cy.get('.form-horizontal > :nth-child(8) > :nth-child(2)').type('1')
            cy.get('#Body_Body_tbNotes').type('This is test Notes, Please ignore (Added by Cypress)')

            cy.get('#Body_Body_btnSave').click()
            cy.contains('Success! License has been added').click()
      }
      UpdateLicense() {
            cy.wait(5000)
            cy.get('#Body_Body_gvLicenses_btnEdit_0 > .glyphicon').click()
            cy.get('#Body_Body_modalAddLicense_lbl').click()
            cy.get('#Body_Body_tbTitle').clear()
            cy.get('#Body_Body_tbTitle').type('Visa')
            cy.get('#select2-Body_Body_ddlLicenseType-container').type('Driving{enter}')
            cy.get('#Body_Body_tbIssuedBy').clear()
            cy.get('#Body_Body_tbIssuedBy').type('US Visa')
            cy.get('#Body_Body_tbLicenseNumber').clear()
            cy.get('#Body_Body_tbLicenseNumber').type('7788')
            cy.get(':nth-child(5) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-5').clear()
            cy.get(':nth-child(5) > .col-md-5').type('1/14/2021')
            cy.get(':nth-child(6) > .col-md-5 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(6) > .col-md-5').clear()
            cy.get(':nth-child(6) > .col-md-5').type('1/8/2024')
            cy.get('.AspireCheckBox > label').click()
            cy.get('.form-horizontal > :nth-child(8) > :nth-child(2)').clear()
            cy.get('.form-horizontal > :nth-child(8) > :nth-child(2)').type('1')
            cy.get('#Body_Body_tbNotes').clear()
            cy.get('#Body_Body_tbNotes').type('This is test Notes, Please ignore (Added by Cypress)-Updated')
            cy.get('#Body_Body_btnSave').click()
      }
      DeleteLicense() {
            cy.wait(5000)
            cy.get('#Body_Body_gvLicenses_btnDelete_0 > .glyphicon').click()
            cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


      }
}
export default EmployeeLicenses