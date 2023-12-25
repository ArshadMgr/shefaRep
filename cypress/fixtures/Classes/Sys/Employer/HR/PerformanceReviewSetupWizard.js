///<reference types="cypress" />
class PRSetupWizard{

    AddSetupWizard(){
 
     cy.get('#Body_wizard_btnAddReviewType').click()
     cy.get('#Body_wizard_modalAddReviewType_lbl').click()
	 cy.wait(2000)
     cy.get('#Body_wizard_tbTitle').type('Annual Review')
     cy.get('#Body_wizard_tbReviewTypeDescription').type('Annual Review Desc')
          cy.get('#Body_wizard_btnSaveReviewType').click()
     cy.wait(3000)

    
    }
    
    UpdateSetupWizard(){
        cy.wait(3000)
        cy.get('#Body_wizard_gvReviewTypes_ctl00_0 > .glyphicon').click()
        cy.get('#Body_wizard_modalAddReviewType_lbl').click()
        cy.get('#Body_wizard_tbTitle').clear()
        cy.get('#Body_wizard_tbTitle').type('Annual Review_Updated')
        cy.get('#Body_wizard_tbReviewTypeDescription').clear()
        cy.get('#Body_wizard_tbReviewTypeDescription').type('Annual Review Desc_Updated')
        cy.get('#Body_wizard_btnSaveReviewType').click()

    }
    
    DeleteSetupWizard(){
        cy.wait(3000)
        cy.get('#Body_wizard_gvReviewTypes_ctl01_1 > .glyphicon').click()
        cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
               

    }
AddRatingScale(){
   
cy.wait(3000)
cy.get('#Body_wizard_StartNavigationTemplateContainerID_btnStartNext').click()
cy.get('#Body_wizard_btnAddRating').click()
cy.get('#Body_wizard_modalAddRating_lbl').click()
cy.get('#Body_wizard_tbRatingScale').type(Math.random()*5000)
cy.get('#Body_wizard_tbRatingScaleScore').type(Math.random()*5000)
cy.get('.col-md-5 > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
cy.get('#divRatingLevel > .col-md-5').type('Above Average Performance{enter}')
cy.get('#Body_wizard_btnSaveRatingScale').click()


}


UpdateRatingScale(){
cy.wait(3000)
cy.get('#Body_wizard_gvRatings_ctl00_0 > .glyphicon').click()
cy.get('#Body_wizard_modalAddRating_lbl').click()
cy.get('#Body_wizard_tbRatingScale').clear()
cy.get('#Body_wizard_tbRatingScale').type('Excellent_Updated')
cy.get('#Body_wizard_tbRatingScaleScore').clear()
cy.get('#Body_wizard_tbRatingScaleScore').type('15')
cy.get('.col-md-5 > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click()
cy.get('#divRatingLevel > .col-md-5').type('High Performance{enter}')
cy.get('#Body_wizard_btnSaveRatingScale').click()



   

}

DeleatRatingScale(){
cy.wait(3000)
cy.get('#Body_wizard_gvRatings_ctl01_0 > .glyphicon').click()
cy.get('.modal-footer > .btn-primary').click()

    
}

AddReviewWorkFlows(){
cy.wait(3000)
cy.get('#Body_wizard_StepNavigationTemplateContainerID_btnStepNext').click()
cy.get('#Body_wizard_btnAddWorkflow').click()
cy.get('#Body_btnAddWorkflowStep').click()
cy.get('#Body_modalAddWorkflowStep_lbl').click()
cy.get('#select2-Body_ddlUsertype-container').type('employee{enter}')
cy.get('#Body_tbDescription').type('EE_Workflow')
cy.get('.AspireCheckBox > label').click()
cy.get('#Body_btnSaveWorkflowStep').click()

}

UpdateReviewWorkFlows(){
cy.wait(3000)
cy.get('[title="Edit Workflow Step"] > .glyphicon').click()
cy.get('#Body_modalAddWorkflowStep_lbl').click()
cy.get('#select2-Body_ddlUsertype-container').type('Employer{enter}')
cy.get('#Body_tbDescription').clear()
cy.get('#Body_tbDescription').type('ER_Workflow')
cy.get('.AspireCheckBox > label').click()
cy.get('#Body_btnSaveWorkflowStep').click()



}
DeleteReviewWorkFlows(){
cy.wait(3000)
cy.get('[title="Delete Workflow Step"] > .glyphicon').click()
cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
cy.get('#Body_hlnkCancel').click()
cy.get('#Body_wizard_StepNavigationTemplateContainerID_btnStepNext').click()

}

AddCriteria(){
cy.wait(3000)
cy.get('#Body_wizard_btnAddCriteria').click()
cy.get('#Body_wizard_modalAddCriteria_lbl').click()
cy.get('#Body_wizard_tbHeader').type('Criteria')
cy.get('#Body_wizard_tbWeight').type('40')
cy.get('.note-editable').type('Test Description ( Added by Cypress)')
cy.get('#rblCriteriaLibStatus > :nth-child(1) > label').click()
cy.get('#Body_wizard_btnSaveCriteriaLib').click()

}
UpdateCriteria(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Edit Criteria"] > .glyphicon').click()
cy.get('#Body_wizard_modalAddCriteria_lbl').click()
cy.get('#Body_wizard_tbHeader').clear()
cy.get('#Body_wizard_tbHeader').type('Test_Updated')
cy.get('#Body_wizard_tbWeight').clear()
cy.get('#Body_wizard_tbWeight').type('44')
cy.get('.note-editable').clear()
cy.get('.note-editable').type('Updated by Cypress')
cy.get('#rblCriteriaLibStatus > :nth-child(1) > label').click()
cy.get('#Body_wizard_btnSaveCriteriaLib').click()


}
DeleteCriteria(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Delete Criteria"] > .glyphicon').click()
cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


}
AddReviewForms(){
    cy.wait(3000)
    cy.get('#Body_wizard_StepNavigationTemplateContainerID_btnStepNext').click()
    cy.get('#Body_wizard_btnAddChecklist').click()
    cy.get('#Body_wizard_modalAddChecklist_lbl').click()
    cy.get('#Body_wizard_tbName').type('QA Form')
    cy.get('#Body_wizard_tbReviewFormDescription').type('Review Form Des')
    cy.get('.note-editable').type('Added by Cypress')
    cy.get('#rblReviewFormStatus > :nth-child(1) > label').click()
    cy.get('#Body_wizard_btnSaveReviewForm').click()

}
UpdateReviewForms(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Edit review form"] > .glyphicon').click()
cy.get('#Body_wizard_modalAddChecklist_lbl').click()
cy.get('#Body_wizard_tbName').clear()
cy.get('#Body_wizard_tbName').type('Review _Cypress')
cy.get('#Body_wizard_tbReviewFormDescription').clear()
cy.get('#Body_wizard_tbReviewFormDescription').type('Updated_Cypress')
cy.get('.note-editable').clear()
cy.get('.note-editable').type('This is test (Cypress)')
cy.get('#rblReviewFormStatus > :nth-child(1) > label').click()
cy.get('#Body_wizard_btnSaveReviewForm').click()


}

DeleteReviewForms(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Delete review form"] > .glyphicon').click()
cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


}

AddCommentTemplate(){
cy.wait(3000)
cy.get('#Body_wizard_StepNavigationTemplateContainerID_btnStepNext').click()
cy.get('#Body_wizard_btnAddCommentTemplate').click()
cy.get('#Body_wizard_modalAddCommentTemplate_lbl').click()
cy.get('#Body_wizard_tbCommentName').type('Test Comment')
cy.get('#Body_wizard_tbComments').type('This is test comment')
cy.get('#rblCommentStatus > :nth-child(1) > label').click()
cy.get('#Body_wizard_btnSaveComments').click()

}

UpdateCommentTemplate(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Edit Comment Template"] > .glyphicon').click()
cy.get('#Body_wizard_modalAddCommentTemplate_lbl').click()
cy.get('#Body_wizard_tbCommentName').clear()
cy.get('#Body_wizard_tbCommentName').type('Test_Updated')
cy.get('#Body_wizard_tbComments').clear()
cy.get('#Body_wizard_tbComments').type('Updated_Cypress')
cy.get('#rblCommentStatus > :nth-child(1) > label').click()
cy.get('#Body_wizard_btnSaveComments').click()


}

DeleteCommentTemplate(){
cy.wait(3000)
cy.get(':nth-child(1) > :nth-child(7) > [title="Delete Comment Template"] > .glyphicon').click()
cy.get('.modal-footer > .btn-primary').click()
cy.wait(3000)
cy.get('#Body_wizard_FinishNavigationTemplateContainerID_btSaveFinish').click()


}


}

    export default PRSetupWizard