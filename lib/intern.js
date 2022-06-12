const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        this.school = school;
    }

    getGitHub() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;