const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
