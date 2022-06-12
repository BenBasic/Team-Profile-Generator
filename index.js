const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generate = require("./lib/generateHTML");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamArray = [];
const idArray = [];



function init() {

    function assignManager() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameManager",
                message: "What is your manager's first name?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a first name to continue"
                }
            },
            {
                type: "input",
                name: "idManager",
                message: "What is your manager's ID?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter an ID to continue" 
                }
            },
            {
                type: "input",
                name: "emailManager",
                message: "What is your manager's email address?",
                validate: userAnswer => {
                    if (userAnswer !== "" && userAnswer.includes("@") && userAnswer.includes(".")) {
                        return true;
                    } return "You must enter an email address to continue" 
                }
            },
            {
                type: "input",
                name: "phoneManager",
                message: "What is your manager's office phone number?",
                validate: userAnswer => {
                    if (userAnswer !== "" && userAnswer.length > 6 && userAnswer.length < 12) {
                        return true;
                    } return "You must enter a valid phone number to continue" 
                }
            }]).then(answers => {
                const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.phoneManager);
                teamArray.push(manager);
                idArray.push(answers.idManager);
                assignTeam();
            });
    }

    function assignTeam() {
        
        inquirer.prompt([
            {
                type: "list",
                name: "roleList",
                message: "What type of team member do you want to add to your team?",
                choices: ["Engineer", "Intern", "I don't want to add anyone"]
            }]).then(userRoleAnswer => {
                switch (userRoleAnswer.roleList) {
                    case "Engineer":
                        assignEngineer();
                        break;
                    case "Intern":
                        assignIntern();
                        break;
                    default:
                        createHTML();
                }
            });
    }

    function assignEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameEngineer",
                message: "What is your engineer's first name?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a first name to continue"
                }
            },
            {
                type: "input",
                name: "idEngineer",
                message: "What is your engineer's ID?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter an ID to continue" 
                }
            },
            {
                type: "input",
                name: "emailEngineer",
                message: "What is your engineer's email address?",
                validate: userAnswer => {
                    if (userAnswer !== "" && userAnswer.includes("@") && userAnswer.includes(".")) {
                        return true;
                    } return "You must enter an email address to continue" 
                }
            },
            {
                type: "input",
                name: "githubEngineer",
                message: "What is your engineer's GitHub username?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter GitHub username to continue" 
                }
            }]).then(answers => {
                const engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer);
                teamArray.push(engineer);
                idArray.push(answers.idEngineer);
                assignTeam();
            });
    }

    function assignIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "nameIntern",
                message: "What is your intern's first name?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a first name to continue"
                }
            },
            {
                type: "input",
                name: "idIntern",
                message: "What is your intern's ID?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter an ID to continue" 
                }
            },
            {
                type: "input",
                name: "emailIntern",
                message: "What is your intern's email address?",
                validate: userAnswer => {
                    if (userAnswer !== "" && userAnswer.includes("@") && userAnswer.includes(".")) {
                        return true;
                    } return "You must enter an email address to continue" 
                }
            },
            {
                type: "input",
                name: "schoolIntern",
                message: "What school does your intern go to?",
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a school name to continue" 
                }
            }]).then(answers => {
                const intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
                teamArray.push(intern);
                idArray.push(answers.idIntern);
                assignTeam();
            });
    }

    function createHTML() {
        fs.writeFileSync("index.html", generate(teamArray))
    };  
    assignManager();
}
init();
