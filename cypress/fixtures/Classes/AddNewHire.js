///<reference types='cypress'/>
import NewHirePO from "../PageObjects/NewHire_PO"
var MPOHirePO = new NewHirePO()
//import NewHireData from "../Data/NewHireData.json"


var randomNumber = Math.random()
var min = 1
var max = 10
var randomInteger = Math.floor(Math.random() * (max - min + 1)) + min



class NewHire{
demographics(){
    cy.fixture("TestData/NewHireData.json").then((data) => {

    MPOHirePO.getFirstName().type(data.FirstName)
    MPOHirePO.getMiddleName().type(data.MidleName)
    MPOHirePO.getLastName().type(data.LastName)
    MPOHirePO.getUserName().type(data.UserName+randomInteger)
    MPOHirePO.getDOB().type(data.DOB)
    MPOHirePO.getSSN().type(data.SSN+randomInteger)
    MPOHirePO.getMaritalStatus().click()
    MPOHirePO.getMaritalStatusTextField().type(data.MaritalStatus).type("{enter}")
    MPOHirePO.getExpandGender().click()
    MPOHirePO.getGenderTextField().type(data.Gender).type("{enter}")
    MPOHirePO.getEEID1().type(data.PartialEEID+randomInteger)
    MPOHirePO.getEEID2().type(data.PartialEEID+randomInteger)
    MPOHirePO.getEEInfo().click()
    MPOHirePO.getText().type("yes").type("{enter}") 

    })
}

}
export default NewHire