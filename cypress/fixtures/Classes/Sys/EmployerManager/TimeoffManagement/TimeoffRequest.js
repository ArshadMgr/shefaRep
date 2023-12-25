///<reference types='cypress'/>

class TimeOffRequest {

    RequestTimeOff() {

        cy.aspireVisit('/Sys/EmployerManager/TimeoffManagement/TimeoffRequest.aspx')
        cy.get('#select2-Body_tabContainer_step1selectemployee_ddlEmployees-container').type('Barack Obama{enter}')
        cy.get('#Body_tabContainer_step1selectemployee_btnContinue').click()
        cy.get('#Body_tabContainer_tabStep2 > :nth-child(2) > .col-lg-4 > .select2 > .selection > .select2-selection').type('Double Time{enter}')
        cy.get('#Body_tabContainer_step2selectpolicy_dtpFrom').type('11/16/2021')
        cy.get('#Body_tabContainer_step2selectpolicy_dtpTo').type('11/17/2021')
        cy.get('#Body_tabContainer_step2selectpolicy_btnContinue').click()
        cy.get('#Body_tabContainer_step3submitrequest_btnSubmit').click()
        cy.wait(10000)
    }

    DeleteTimeOff() {
        cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
        cy.get('.modal-footer > .btn-primary').click()
    }

}

export default TimeOffRequest