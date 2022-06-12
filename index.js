const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const teamArray = [];
const idArray = [];

function init() {

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
                        // Should probably add a function for engineer prompts here
                        break;
                    case "Intern":
                        // Should probably add a function for intern prompts here
                        break;
                    default:
                        // Should probably add a function for creating the html document here
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
    assignManager();


}
init();
