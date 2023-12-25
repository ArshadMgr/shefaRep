import 'cypress-iframe'

describe('Shefa Tests', function () {
    it('Shefa Admin Login', function () {

    cy.visit("https://staging.frontend.shefa.live/login/admin")


    
    cy.iframe('iframe.w-100').within(()=>{

        cy.get("#username").type("0503104300")
        cy.get("#password").type("Test@1234")
        cy.get("#kc-login").click()

    })




    })

})


