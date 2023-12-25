///<reference types="cypress" />
class PerformanceJournal {

    AddPJournal() {

        cy.get('#Body_btnAddNote').click()
        cy.get('#Body_modalAddNote_lbl').click()
        cy.get('#select2-Body_ddlEmployee-container').type('Barack Obama{enter}')
        cy.get('#select2-Body_ddlNoteType-container').type('Positive{enter}')
        cy.get('#Body_tbTitle').type('Note')
        cy.get('.note-editable').type('Test Note ( Cypress)')
        cy.get(':nth-child(1) > .AspireCheckBox > label').click()
        cy.get(':nth-child(2) > .AspireCheckBox > label').click()
        cy.get('#Body_btnSave').click()



    }

    UpdatePJournal() {
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(8) > [title="Edit Note"] > .glyphicon').click()

        cy.wait(3000)
        cy.get('#Body_modalAddNote_lbl').click()
        cy.get('#select2-Body_ddlNoteType-container').type('Negative{enter}')
        cy.get('#Body_tbTitle').clear()
        cy.get('#Body_tbTitle').type('Updated_Note')
        cy.get('.note-editable').clear()
        cy.get('.note-editable').type('Test Updated by Cypress')
        cy.get(':nth-child(1) > .AspireCheckBox > label').click()
        cy.get(':nth-child(2) > .AspireCheckBox > label').click()
        cy.get('#Body_btnSave').click()

    }

    DeletePJournal() {
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(8) > [title="Delete Note"] > .glyphicon').click()
        cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    }



}

export default PerformanceJournal