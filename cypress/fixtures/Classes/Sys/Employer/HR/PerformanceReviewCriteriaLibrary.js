///<reference types="cypress" />
class CriteriaLibrary{

    AddCriteriaLibrary(){
      
        cy.get('#Body_btnAddCriteria').click()
        cy.get('#Body_modalAddCriteria_lbl').click()
        cy.get('#Body_tbHeader').type('QA Header')
        cy.get('#Body_tbWeight').type('10')
        cy.get('.note-editable').type('This is Test')
        cy.get('#rblStatus > :nth-child(1) > label').click()
        cy.get('#Body_btnSave').click()

    }

    UpdateCriteriaLibrary(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(7) > [title="Edit Criteria"] > .glyphicon').click()
        cy.get('#Body_modalAddCriteria_lbl').click()
        cy.get('#Body_tbHeader').clear().type('QA Header_Updated')
        cy.get('#Body_tbWeight').clear().type('20')
        cy.get('.note-editable').clear().type('This is test _ Updated')
        cy.get('#rblStatus > :nth-child(1) > label').click()
        cy.get('#Body_btnSave').click()


    }

    DeleteCriteriaLibrary(){
        cy.wait(3000)
    cy.get(':nth-child(1) > :nth-child(7) > [title="Delete Criteria"] > .glyphicon').click()
    cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    

    }

}
export default CriteriaLibrary
