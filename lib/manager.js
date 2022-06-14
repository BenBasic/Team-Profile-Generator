// Setting up Employee class file requirements
const Employee = require('./employee');

// Extending Manager to Employee class to assign as it's parent
class Manager extends Employee {
    // Constructing the class values
    constructor(name, id, email, officeNumber) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        // Assigning the value of officeNumber
        this.officeNumber = officeNumber;
    }
    // getName function which will return the value of name
    getName() {
        return this.name;
    }

    // getOfficeNumber function which will return the value of officeNumber
    getOfficeNumber() {
        return this.officeNumber;
    }

    // getRole function which will return the role of Manager
    getRole() {
        return "Manager";
    }
}

// Exporting Manager to be referenced in other documents
module.exports = Manager;