///<reference types="cypress" />
class EmployeeSkills {
      AddSkills() {
            cy.wait(5000)
            const { delay } = require("bluebird")

            cy.get(':nth-child(20) > a > .Text').click()
            cy.get('#Body_Body_btnAddSkill').click()
            cy.get('#Body_Body_modalManageEmployeeSkill_lbl').click()
            cy.get('#select2-Body_Body_ddlSkillGroup-container').type('Language{enter}')

            cy.wait(3000)

            cy.get('#select2-Body_Body_ddlSkillName-container').type('Speaking{enter}')
            cy.get('#select2-Body_Body_ddlProficiency-container').type('Expert{enter}')
            cy.get('#Body_Body_tbNotes').type('This is test note, Please ignore(Added by Cypress)')
            cy.get('#Body_Body_btnSave').click()
      }
      UpdateSkill() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
            cy.get('#Body_Body_modalManageEmployeeSkill_lbl').click()

            cy.get('#select2-Body_Body_ddlProficiency-container').type('Beginner{enter}')
            cy.get('#Body_Body_tbNotes').clear()
            cy.get('#Body_Body_tbNotes').type('This is test note, Please ignore(Added by Cypress)-Updated')
            cy.get('#Body_Body_btnSave').click()
      }
      DeleteSkills() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
            cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      }
}

export default EmployeeSkills