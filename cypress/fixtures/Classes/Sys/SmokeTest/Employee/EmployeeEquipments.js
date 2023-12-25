///<reference types="cypress" />

class EmployeeEquipments {
      AddEquipment() {
            cy.wait(2000)
            const { delay } = require("bluebird")

            cy.get('#Body_btnAddEquipment').click()
            cy.get('#Body_modalManageEquipment_lbl').click()
            cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(3) > .col-md-6').type('1/1/2020')
            cy.get('#Body_tbEquipmentIssued').type('Keyboard{enter}')
            cy.get('#Body_tbSerialNumber').type('7788')
            cy.get('#Body_tbIssuedBy').type('Dell')
            cy.get(':nth-child(5) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-6').type('1/1/2021')
            cy.get('#Body_modalManageEquipment_lbl').click()

            cy.get('#Body_tbReturnedTo').type('Emcentrix{enter}')
            cy.get('#Body_tbNotes').type('This is test notes (Added by Cypress)')
            cy.get('#Body_btnSaveEquipment').click()
      }
      UpdateEquipment() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
            cy.get('#Body_modalManageEquipment_lbl').click()
            cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(3) > .col-md-6').clear()
            cy.get(':nth-child(3) > .col-md-6').type('1/6/2020')
            cy.get('#Body_tbEquipmentIssued').clear()
            cy.get('#Body_tbEquipmentIssued').type('Laptop{enter}')
            cy.get('#Body_tbSerialNumber').clear()
            cy.get('#Body_tbSerialNumber').type('876B_A')
            cy.get('#Body_tbIssuedBy').clear()
            cy.get('#Body_tbIssuedBy').type('HP')
            cy.get(':nth-child(5) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
            cy.get(':nth-child(5) > .col-md-6').clear()
            cy.get(':nth-child(5) > .col-md-6').type('1/3/2021')
            cy.get('#Body_modalManageEquipment_lbl').click()
            cy.get('#Body_tbReturnedTo').clear()
            cy.get('#Body_tbReturnedTo').type('Emcentrix_Updated{enter}')
            cy.get('#Body_tbNotes').clear()
            cy.get('#Body_tbNotes').type('This is test notes (Added by Cypress)_Updated')
            cy.get('#Body_btnSaveEquipment').click()
      }
      DeleteEquipment() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
            cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      }
}

export default EmployeeEquipments