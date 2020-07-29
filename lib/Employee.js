// TODO: Write code to define and export the Employee class

//////////////////////////////////////////////////////////////////////////////////////////////
//                                    Employee                                              //
//////////////////////////////////////////////////////////////////////////////////////////////

// Class to create a template for employees
class Employee {
  // Name, ID, email
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // Create functions to call these properties when needed using
  // getName(), getId(), getEmail(), getRole()
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// export the module to be use on other pages
module.exports = Employee;
