///<reference types="cypress" />

class EmployeeDependents {

     AddDependents() {
          cy.wait(5000)

          let s2
          s2 = ((Math.random() * 500000000000000000))
          var SSN = s2


          cy.get(':nth-child(7) > a > .Text').click()
          cy.get('#Body_Body_btnAddDependent').click()
          cy.wait(3000)
          cy.get('#Body_Body_modalDependent_lbl').click()

          cy.get(':nth-child(7) > :nth-child(1) > .AspireCheckBox > label').click()
          cy.get('.input-group-addon > .glyphicon').click()
          cy.get(':nth-child(1) > .panel-body > :nth-child(5) > :nth-child(2)').type('1/1/2020')
          cy.get('#Body_Body_modalDependent_lbl').click()
          cy.get(':nth-child(2) > .AspireCheckBox > label').click()
          cy.get(':nth-child(9) > :nth-child(1) > .AspireCheckBox > label').click()
          cy.get('#Body_Body_txtFirstName').type('Britney')
          cy.get('#Body_Body_txtLastName').type('Spears')
          cy.get('#select2-Body_Body_ddlGender-container').type('Male{enter}')
          cy.get('#select2-Body_Body_ddlRelationship-container').type('Spouse{enter}')
          cy.get('#Body_Body_txtSSN').type(SSN)
          cy.get('#Body_Body_txtPhone').type('5457878787')
          cy.get('#select2-Body_Body_ddlCountry-container').type('United States{enter}')
          cy.get('#Body_Body_txtAddress').type('CA, Street#1')
          cy.get('#Body_Body_txtAddress2').type('CA, West Street')
          cy.get('#Body_Body_txtCity').type('NY')
          cy.get('#select2-Body_Body_ddlState-container').type('New Jersey{enter}')
          cy.get('#Body_Body_txtZip').type('12345')
          cy.get('#Body_Body_btnSave').click()
     }
     UpdateDependents() {

          cy.wait(5000)
          cy.get('#Body_Body_gvDependents_btnEdit_0 > .glyphicon').click()
          cy.wait(3000)
          cy.get('#Body_Body_modalDependent_lbl').click()
          let s2
          s2 = ((Math.random() * 500000000000000000))
          var SSN = s2


          cy.get('#Body_Body_txtFirstName').clear()
          cy.get('#Body_Body_txtFirstName').type('John')
          cy.get('#Body_Body_txtLastName').clear()
          cy.get('#Body_Body_txtLastName').type('Doe')
          cy.get('#select2-Body_Body_ddlGender-container').type('Male{enter}')
          cy.get('#select2-Body_Body_ddlRelationship-container').type('Child{enter}')
          cy.get('#Body_Body_txtSSN').clear()
          cy.get('#Body_Body_txtSSN').type(SSN)
          cy.get('#Body_Body_txtPhone').clear()
          cy.get('#Body_Body_txtPhone').type('3337878787')

          cy.get('#select2-Body_Body_ddlCountry-container').type('United States{enter}')
          cy.get('#Body_Body_txtAddress').clear()
          cy.get('#Body_Body_txtAddress').type('CA, Street#1_Updated')
          cy.get('#Body_Body_txtAddress2').clear()
          cy.get('#Body_Body_txtAddress2').type('CA, West Street_Updated')
          cy.get('#Body_Body_txtCity').clear()
          cy.get('#Body_Body_txtCity').type('NJ')

          cy.get('#select2-Body_Body_ddlState-container').type('New Jersey{enter}')
          cy.get('#Body_Body_txtZip').clear()
          cy.get('#Body_Body_txtZip').type('54321')
          cy.get(':nth-child(7) > :nth-child(1) > .AspireCheckBox > label').click()
          cy.get('.input-group-addon > .glyphicon').click()
          cy.get(':nth-child(1) > .panel-body > :nth-child(5) > :nth-child(2)').click()
          cy.get(':nth-child(1) > .panel-body > :nth-child(5) > :nth-child(2)').clear()
          cy.get(':nth-child(1) > .panel-body > :nth-child(5) > :nth-child(2)').type('1/9/2021')

          cy.get('#Body_Body_modalDependent_lbl').click()
          cy.get(':nth-child(2) > .AspireCheckBox > label').click()
          cy.get(':nth-child(9) > :nth-child(1) > .AspireCheckBox > label').click()

          cy.get('#Body_Body_btnSave').click()
     }
     DeleteDependents() {
          cy.wait(5000)
          cy.get('#Body_Body_gvDependents_btnDelete_0 > .glyphicon').click()
          cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

     }
}

export default EmployeeDependents

