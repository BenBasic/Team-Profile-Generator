// Setting up Employee class file requirements
const Employee = require('./employee');

// Extending Engineer to Employee class to assign as it's parent
class Engineer extends Employee {
    // Constructing the class values
    constructor(name, id, email, github) {
        // Calling the parent constructor (Employee) to assign the name, id, and email properties
        super(name, id, email);
        // Assigning github value 
        this.github = github;
    }

    // getGitHub function which will return a github url based on the value of github
    getGitHub() {
        return `https://github.com/${this.github}/`;
    }

    // getRole function which will return the role of Engineer
    getRole() {
        return "Engineer";
    }
}

// Exporting Engineer to be referenced in other documents
module.exports = Engineer;