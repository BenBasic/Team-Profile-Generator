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
    assignManager();

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
            })
    }
}
init();
