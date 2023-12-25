///<reference types='cypress'/>

class DirectDeposit {

    AddDirectDeposit() {

        cy.wait(3000)
        cy.get('#Body_btnAddDDeposit').click()
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get('#select2-Body_ddlAccountType-container').type('Savings{enter}')
        cy.get('#Body_tbPriority').type(Math.random() * 5000)
        cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
        cy.get(':nth-child(3) > .col-md-6').type('1/1/2021')
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get(':nth-child(4) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
        cy.get(':nth-child(4) > .col-md-6').type('1/7/2022')
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get('#Body_tbBankName').type('The Bank of America')
        cy.get('#Body_tbBranchCity').type('New York')
        cy.get('#Body_tbAccountName').type('Savings')
        cy.get('#Body_tbABARoutingNumber').type('12345')
        cy.get('#Body_tbAccountNumber').type('987654321')
        cy.get(':nth-child(10) > .col-md-6 > .AspireCheckBox > label').click()
        cy.get(':nth-child(12) > .col-md-6 > .select2 > .selection > .select2-selection').type('flat{enter}')
        cy.get('#Body_tbAmount').type('200')



        cy.wait(3000)
        cy.get('#Body_tbPreNoteDate').type('This is test note added by Cypress')
        cy.get('#Body_btnSaveDDeposit').click()


    }

    UpdateDirectDeposit() {
        cy.wait(3000)
        cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get('#select2-Body_ddlAccountType-container').type('Savings{enter}')
        cy.get('#Body_tbPriority').clear()
        cy.get('#Body_tbPriority').type(Math.random() * 5000)
        cy.get(':nth-child(3) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
        cy.get(':nth-child(3) > .col-md-6').clear()
        cy.get(':nth-child(3) > .col-md-6').type('1/1/2021')
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get(':nth-child(4) > .col-md-6 > .input-group > .input-group-addon > .glyphicon').click()
        cy.get(':nth-child(4) > .col-md-6').clear()
        cy.get(':nth-child(4) > .col-md-6').type('1/7/2022')
        cy.get('#Body_modalManageDirectDeposit_lbl').click()
        cy.get('#Body_tbBankName').clear()
        cy.get('#Body_tbBankName').type('The Bank of America')
        cy.get('#Body_tbBranchCity').clear()
        cy.get('#Body_tbBranchCity').type('Washington D.C')
        cy.get('#Body_tbAccountName').clear()
        cy.get('#Body_tbAccountName').type('Savings')
        cy.get('#Body_tbABARoutingNumber').clear()
        cy.get('#Body_tbABARoutingNumber').type('12345')
        cy.get('#Body_tbAccountNumber').clear()
        cy.get('#Body_tbAccountNumber').type('987654321')
        cy.get(':nth-child(12) > .col-md-6 > .select2 > .selection > .select2-selection').type('flat{enter}')
        cy.get('#Body_tbAmount').clear()
        cy.get('#Body_tbAmount').type('700')
        cy.get('#Body_tbPreNoteDate').clear()
        cy.get('#Body_tbPreNoteDate').type('This is test note added by Cypress_Updated')
        cy.get('#Body_btnSaveDDeposit').click()

    }

    DeleteDirectDeposit() {
        cy.wait(3000)
        cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
        cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

    }

}

export default DirectDeposit