class NewHirePO{

    getFirstName(){
  
      return  cy.get('#Body_employeeInfo_cef84cda6287c43f1a011a7e44cfc8252_tb')
    }
   getMiddleName(){
    return cy.get('#Body_employeeInfo_c3255c58b96594454866c714400ae9760_tb')
   }
   getLastName(){
    return cy.get('#Body_employeeInfo_c072541fb2a0f42ea96371695cc671e4e_tb')
   }
   getUserName(){
    return cy.get('#Body_employeeInfo_c01bee1c6d5314f81a9e15ff2cfd3e433_tb')
   }
   getDOB(){
    return cy.get('#Body_employeeInfo_c265a415c1f084ac8ac0ea5ad277704f5_dtp')
   }
   getSSN(){
    return cy.xpath("//input[@id='Body_employeeInfo_cc5d629aabb8a413f9e562e694963b50b_tb']")
   }
   getMaritalStatus(){
    return cy.get('#select2-Body_employeeInfo_c33f247d14f6b4670a2b1225960296984_ddl-container')
   }
   getMaritalStatusTextField(){
    return cy.xpath("//input[@role='textbox']")
   }
   getExpandGender(){
    return cy.get('#select2-Body_employeeInfo_c072ebdb02a9c4518b8764f66262a2f00_ddl-container')
   }
   getGenderTextField(){
    return  cy.xpath("//input[@role='textbox']")
   }
   getEEID1(){
    return cy.get('#Body_employeeInfo_c7e84905b6e264b7f82d6ebb9bae6203f_tb')
   }
   getEEID2(){
    return cy.get('#Body_employeeInfo_c4560ae15d0f447278b90790757160497_tb')
   }
   getEEInfo(){
    return cy.get("#select2-Body_employeeInfo_c6fa1c27a5620400196d9475de4595250_ddl-container")
   }
   getText(){
    return cy.xpath("//input[@role='textbox']")
   }




  }
  export default NewHirePO