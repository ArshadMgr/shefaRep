///<reference types="cypress" />
class EmployeeSkills {
      AddSkills() {

            cy.get('#Body_btnAddSkill').click()
            cy.get('#Body_modalManageEmployeeSkill_lbl').click()
            cy.get('#select2-Body_ddlSkillGroup-container').type('Language{enter}')

            cy.wait(3000)

            cy.get('#select2-Body_ddlSkillName-container').type('Speaking{enter}')
            cy.get('#select2-Body_ddlProficiency-container').type('Expert{enter}')
            cy.get('#Body_tbNotes').type('This is test note, Please ignore(Added by Cypress)')
            cy.get('#Body_btnSave').click()
      }
      UpdateSkill() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Edit"] > .glyphicon').click()
            cy.get('#Body_modalManageEmployeeSkill_lbl').click()

            cy.get('#select2-Body_ddlProficiency-container').type('Beginner{enter}')
            cy.get('#Body_tbNotes').clear()
            cy.get('#Body_tbNotes').type('This is test note, Please ignore(Added by Cypress)-Updated')
            cy.get('#Body_btnSave').click()
      }
      DeleteSkills() {
            cy.wait(5000)
            cy.get(':nth-child(1) > .text-nowrap > [title="Delete"] > .glyphicon').click()
            cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      }
}

export default EmployeeSkills