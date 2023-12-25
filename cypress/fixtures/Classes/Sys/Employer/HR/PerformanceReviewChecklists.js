///<reference types="cypress" />
class ReviewForm{

    AddReviewForm(){

        cy.get('#Body_btnAddChecklist').click()
        cy.get('#Body_modalAddChecklist_lbl').click()
        cy.get('#Body_tbName').type('QA')
        cy.get('#Body_tbDescription').type('QA Desc')
        cy.get('.note-editable').type('Test Instruction ')
        cy.get('#rblStatus > :nth-child(1) > label').click()
        cy.get('#Body_btnSave').click()
    
    }
    
    UpdateReviewForm(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(8) > [title="Edit review form"] > .glyphicon').click()
        cy.get('#Body_modalAddChecklist_lbl').click()
        cy.get('#Body_tbName').clear()
        cy.get('#Body_tbName').type('QA Review _ Updated')
        cy.get('#Body_tbDescription').clear()
        cy.get('#Body_tbDescription').type('Test Description _ upated')
        cy.get('#rblStatus > :nth-child(2) > label').click()
        cy.get('#Body_btnSave').click()

    }
    
    DeleteReviewForm(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(8) > [title="Delete review form"] > .glyphicon').click()
        cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    }
    
    AddRatingScale(){
        cy.wait(3000)
        cy.get('#Body_btnAddRatings').click()
        cy.get('#Body_btnAddRating').click()
        cy.get('#Body_tbRatingScale').type(Math.random()*5000)
        cy.get('#Body_tbRatingScaleScore').type(Math.random()*5000)
        cy.get('#select2-ddlPerformanceLevel-container').type('Above Average Performance{enter}')
        cy.get('#Body_btnSave').click()


    }
    UpdateRatingScale(){
        cy.wait(3000)
     cy.get('#Body_gvRatings_ctl00_0 > .glyphicon').click()
     cy.get('#Body_modalAddRating_lbl').click()
     cy.get('#Body_tbRatingScale').clear()
     cy.get('#Body_tbRatingScale').type(Math.random()*5000)
     cy.get('#Body_tbRatingScaleScore').clear()
     cy.get('#Body_tbRatingScaleScore').type(Math.random()*5000)
     cy.get('#select2-ddlPerformanceLevel-container').type('High Performance{enter}')
     cy.get('#Body_btnSave').click()

    

    }
    DeleteRatingScale(){
        cy.wait(3000)
        cy.get('#Body_gvRatings_ctl01_0 > .glyphicon').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(3000)
        cy.get('.text-center > a').click()
        
    }


    }
    
    export default ReviewForm