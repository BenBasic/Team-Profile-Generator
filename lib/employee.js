class Employee {
  // Constructing the class values
    constructor(name, id, email) {
      // Assigning the value of name
      this.name = name;
      // Assigning the value of id
      this.id = id;
      // Assigning the value of email
      this.email = email;
    }
  
    // getName function which will return the value of name
    getName() {
      return this.name;
    }
    
    // getId function which will return the value of id
    getId() {
      return this.id;
    }
  
    // getEmail function which will return the value of email
    getEmail() {
      return this.email;
    }
  
    // getRole function which will return the role of Employee
    getRole() {
      return 'Employee';
    }
  }
  
  // Exporting Employee to be referenced in other documents
  module.exports = Employee;