const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;