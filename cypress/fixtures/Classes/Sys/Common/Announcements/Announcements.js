///<reference types="cypress" />
class Announcement{

AddAnnouncement(){


    cy.get('#Body_btnAddNewAnnouncement').click()
    cy.wait(3000)
    cy.get('#Body_tbSummary').type('Summar Holidays')
    cy.get(':nth-child(1) > .input-group > .input-group-addon > .glyphicon').click()
    cy.get('#Body_updatePanelMain > .row > :nth-child(1)').type('1/1/2021')
    cy.get(':nth-child(2) > .input-group > .input-group-addon > .glyphicon').click()
    cy.get('.row > :nth-child(2)').type('1/1/2022')
    cy.get('.note-editable').type('Company announces holidays (Added by Cypress)')
    cy.get('#Body_rblUserType > :nth-child(2) > label').click()
        cy.wait(3000)
        cy.get('.AspireCheckBox > label').click()
    cy.get('#Body_btnSave').click()

}

UpdateAnnouncement(){
    cy.wait(3000)
    cy.get(':nth-child(2) > :nth-child(6) > [title="Edit"] > .glyphicon').click()
     cy.get('#Body_tbSummary').clear()
        cy.get('#Body_tbSummary').type('Summar Holidays_Updated')
    cy.get(':nth-child(1) > .input-group > .input-group-addon > .glyphicon').click()
    cy.get('#Body_updatePanelMain > .row > :nth-child(1)').clear()
    cy.get('#Body_updatePanelMain > .row > :nth-child(1)').type('1/7/2021')
    cy.get(':nth-child(2) > .input-group > .input-group-addon > .glyphicon').click()
    cy.get('.row > :nth-child(2)').clear()
    cy.get('.row > :nth-child(2)').type('1/8/2022')
    cy.get('.note-editable').clear()
    cy.get('.note-editable').type('Company announces holidays (Updated by Cypress)')
    cy.get('#Body_rblUserType > :nth-child(2) > label').click()
        cy.wait(3000)
        cy.get('.AspireCheckBox > label').click()
    cy.get('#Body_btnSave').click()
    cy.get('[href="Announcements.aspx"]').click()

}

deleteAnnouncement(){
    cy.wait(3000)
    cy.get('#Body_gvAnnouncements_btnDelete_1 > .glyphicon').click()
    cy.get('.modal-footer > .btn-primary').click()

}

}

export default Announcement