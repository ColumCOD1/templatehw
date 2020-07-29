// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//////////////////////////////////////////////////////////////////////////////////////////////
//                                    Engineer                                              //
//////////////////////////////////////////////////////////////////////////////////////////////
const Employee = require("./Employee.js");
// Class to create a template for employees
//extends adds to employee

class Engineer extends Employee {
  // Name, ID, email
  constructor(name, id, email, github) {
    // grabs other elements and will cascade down, IE - will get all properties and add more in this case github
    super(name, id, email);
    this.github = github;
  }
  // the only difference in the talest js is that its asking for a github which we put in the super
  // Create functions to call these properties when needed using getGithub(), getRole()
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

// export the module to be use on other pages
module.exports = Engineer;
