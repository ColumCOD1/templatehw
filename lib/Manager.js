// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

//////////////////////////////////////////////////////////////////////////////////////////////
//                                    Manager                                               //
//////////////////////////////////////////////////////////////////////////////////////////////
const Employee = require("./Employee.js");
// Class to create a template for employees
// extends adds to employee
class Manager extends Employee {
  // Name, ID, email
  constructor(name, id, email, officeNumber) {
    //grabs other elements and will cascade down, IE - will get all properties and add more in this case officeNumber
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  // the only difference in the talest js is that its asking for a github which we put in the super
  // Create functions to call these properties when needed using
  // getofficeNumber(), getRole()
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
