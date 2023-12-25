///<reference types='cypress'/>
import 'cypress-xpath';
import TOobjs from '../PageObjects/TOClass';



const currentDate = new Date();

// Extract day, month, and year components
const day = String(currentDate.getDate()).padStart(2, '0');
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const year = currentDate.getFullYear();

// Format the date as dd/mm/yyyy
const formattedDate = `${month}/${day}/${year}`;

// Type the formatted date into an input field
// cy.get('#your-input-element').type(formattedDate);



var TO = new TOobjs()

class Assert {
    TimeOff() {
    TO.getassertafterlogin()
    TO.getassertdashboard()
    TO.getclicktimeoff().click()
    TO.getclickTimeOffRequest().click()
    TO.getAssertTimeOffpage()
    TO.getClickDDL().click()
    TO.getInputTextBox().type('jenn')
    TO.getInputTextBox().type("{enter}")
    TO.getContinueBtn1().click()
    TO.getselectTOPolicy().click()
    TO.getInputTextBox().type('paid')
    TO.getInputTextBox().type("{enter}")
    TO.getTypeFromDate().type(formattedDate)
    TO.getTypeToDate().type(formattedDate)
    TO.getContinueBtn2().click()
    TO.getAssertTimeOffpage()
    TO.getClickHours().click().clear()
    TO.getClickHours().type("08:00")
    TO.getTypeComments().type('I am applying Paid Time Off for attending a function outside city.')
    TO.getFinalSubmitBtn().click()


}
}    

export default Assert
