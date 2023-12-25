///<reference types="cypress" />
class CommentTemplate{

    AddCommentTemplate(){
     
  
        cy.get('#Body_btnAddCommentTemplate').click()
        cy.get('#Body_modalAddCommentTemplate_lbl').click()
        cy.get('#Body_tbCommentName').type('QA Comment')
        cy.get('#Body_tbComments').type('Test Comment')
        cy.get('#rblStatus > :nth-child(1) > label').click()
        cy.get('#Body_btnSave').click()
    }

    UpdateCommentTemplate(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(7) > [title="Edit Comment Template"] > .glyphicon').click()
        cy.get('#Body_modalAddCommentTemplate_lbl').click()
        cy.get('#Body_tbCommentName').clear().type('QA Comment _ Updated')
        cy.get('#Body_tbComments').clear().type('QA_Updated')
        cy.get('#rblStatus > :nth-child(1) > label').click()
        cy.get('#Body_btnSave').click()

    }
    DeleteCommentTemplate(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(7) > [title="Delete Comment Template"] > .glyphicon').click()
        cy.get('.modal-footer > .btn-primary').click()
    }

}

export default CommentTemplate
