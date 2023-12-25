///<reference types="cypress" />
class ReviewSession{

    AddReviewSession(){

    cy.get('#Body_btnAddSession').click()
    cy.get('#Body_tbSessionTitle').type('QA Review Session1')
    cy.get('#select2-ddlSessionType-container').click()
    cy.get('#select2-ddlSessionType-container').type('One Time{enter}')
   // cy.get('#Body_btnAddNewReviewType').click()
   
    // cy.get('#Body_btnAddNewReviewType').click()
	// cy.wait(3000)
    // cy.get('#Body_tbTitle').type('Quality Matrices')
    // cy.get('#Body_tbDescription').type('Quality Matrices Desc')
    // cy.get('#Body_btnSaveReviewType').click()
    // if (cy.get('#lblMessage').should('have.text', 'Title already exists.')){

    //     cy.get('#Body_ctl27 > .btn-default').click()
     
    // }
    // else {

        
    // }

    cy.get('.col-sm-12 > :nth-child(1) > :nth-child(4)').click()
    cy.get('#select2-Body_ddlReviewType-container').click()
    cy.get('#select2-Body_ddlReviewType-container').type('Yearly Review{enter}')
    cy.get('#Body_ddlReviewForm').click()
    cy.get('#Body_ddlReviewForm').type('Test{enter}')
    cy.get('#select2-Body_ddlWorkflow-container').click()
    cy.get('#select2-Body_ddlWorkflow-container').type('QA Workflow{enter}')
    cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2)').type('1/1/2021')
    cy.get(':nth-child(1) > :nth-child(9) > :nth-child(2)').click()
    cy.get(':nth-child(1) > :nth-child(10) > :nth-child(2)').click()
    cy.get(':nth-child(1) > :nth-child(10) > :nth-child(2)').type('1/1/2023')
    cy.get(':nth-child(1) > :nth-child(10) > :nth-child(2)').click()
    cy.get('.AspireCheckBox > label').click()
    cy.get('thead > tr > :nth-child(1)').click()
    cy.get(':nth-child(1) > [style="width:40px;"] > .AspireCheckBox').click()
    cy.get('#Body_btnFinished').click()





    }
    UpdateReviewSession(){
        cy.wait(3000)


    }
    DeleteReviewSession(){
        cy.wait(3000)
        cy.get(':nth-child(1) > :nth-child(10) > [title="Delete Session"] > .glyphicon').click()
        cy.get('.modal-footer > .btn-primary').click()



    }


}
export default ReviewSession