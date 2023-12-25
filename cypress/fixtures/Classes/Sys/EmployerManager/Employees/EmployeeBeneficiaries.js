///<reference types="cypress" />
class EmployeeBeneficiaries {

  AddBeneficiary() {
    cy.wait(5000)
    let s2
    s2 = ((Math.random() * 500000000000000000))
    var SSN = s2

    cy.get(':nth-child(4) > a > .Text').click()
    cy.get('#Body_Body_btnAddBeneficiary').click()
    cy.get('#Body_Body_modalBeneficiary_lbl').click()
    cy.get('#Body_Body_txtFirstName').type('John')
    cy.get('#Body_Body_txtLastName').type('Doe')
    cy.get('#select2-Body_Body_ddlGender-container').type('Male{enter}')
    cy.get('#select2-Body_Body_ddlRelationship-container').type('Brother{enter}')
    cy.get('#Body_Body_txtSSN').type(SSN)
    cy.get('.input-group-addon > .glyphicon').click()
    cy.get('.panel-body > :nth-child(5) > :nth-child(2)').type('1/1/1986')
    cy.get('.AspireCheckBox > label').click()
    cy.get('#Body_Body_txtPhone').type('(222) 222-2222')
    cy.get('#select2-Body_Body_ddlCountry-container').type('United States{enter}')
    cy.get('#Body_Body_txtAddress').type('2072 Vesta Drive')
    cy.get('#Body_Body_txtAddress2').type('Chicago, IL 60617')
    cy.get('#Body_Body_txtCity').type('NY')
    cy.get('#select2-Body_Body_ddlState-container').type('Alabama{enter}')
    cy.get('#Body_Body_txtZip').type('12345')
    cy.get('#Body_Body_btnSave').click()

  }

  UpdateBeneficiary() {

    cy.wait(5000)
    cy.get('#Body_Body_gvEmployeeBeneficiaries_btnEdit_0 > .glyphicon').click()

    cy.wait(5000)
    let s2
    s2 = ((Math.random() * 500000000000000000))
    var SSN = s2
    cy.get('#Body_Body_modalBeneficiary_lbl').click()
    cy.get('#Body_Body_txtFirstName').clear()
    cy.get('#Body_Body_txtFirstName').type('Jennifer')
    cy.get('#Body_Body_txtLastName').clear()
    cy.get('#Body_Body_txtLastName').type('Lopiz')
    cy.get('#select2-Body_Body_ddlGender-container').type('Male{enter}')
    cy.get('#select2-Body_Body_ddlRelationship-container').type('Aunt{enter}')
    cy.get('#Body_Body_txtSSN').clear()
    cy.get('#Body_Body_txtSSN').type(SSN)
    cy.get('.input-group-addon > .glyphicon').click()
    //cy.get('.input-group-addon > .glyphicon').clear()
    cy.get('.panel-body > :nth-child(5) > :nth-child(2)').type('1/1/1987')
    cy.get('.AspireCheckBox > label').click()
    cy.get('#Body_Body_txtPhone').clear()
    cy.get('#Body_Body_txtPhone').type('(333) 222-2222')
    cy.get('#select2-Body_Body_ddlCountry-container').type('United States{enter}')
    cy.get('#Body_Body_txtAddress').clear()
    cy.get('#Body_Body_txtAddress').type('2072 Vesta Drive_Updated')
    cy.get('#Body_Body_txtAddress2').clear()
    cy.get('#Body_Body_txtAddress2').type('Chicago, IL 60617_Updated')
    cy.get('#Body_Body_txtCity').clear()
    cy.get('#Body_Body_txtCity').type('NJ')
    cy.get('#select2-Body_Body_ddlState-container').type('Alaska{enter}')
    cy.get('#Body_Body_txtZip').clear()
    cy.get('#Body_Body_txtZip').type('98765')
    cy.get('#Body_Body_btnSave').click()


  }

  DeleteBeneficiary() {
    cy.wait(5000)
    cy.get('#Body_Body_gvEmployeeBeneficiaries_btnDelete_0 > .glyphicon').click()
    cy.get('.modal.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()


  }
}
export default EmployeeBeneficiaries
