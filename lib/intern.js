// Setting up Employee class file requirements
const Employee = require('./employee');

// Extending Intern to Employee class to assign as it's parent
class Intern extends Employee {
    // Constructing the class values
    constructor(name, id, email, school) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        // Assigning school value
        this.school = school;
    }

    // getSchool function which will return the value of school
    getSchool() {
        return this.school;
    }

    // getRole function which will return the role of Intern
    getRole() {
        return "Intern";
    }
}

// Exporting Intern to be referenced in other documents
module.exports = Intern;