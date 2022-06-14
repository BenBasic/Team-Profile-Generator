// Assigning class requirements to their respective file locations
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// Assigning generate to the file location of the HTML Generator
const generate = require("./lib/generateHTML");
// Assigning node package dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// Assigning teamArray to empty array which will be populated with data once question prompts are answered by the user
const teamArray = [];
const idArray = [];


// Creating the init function which contains all the functions of the program
function init() {

    // Creating assignManager function which contains initial question prompts and Manager class creation
    function assignManager() {
        // Using node inquirer to prompt questions for assigning a manager
        inquirer.prompt([
            {
                type: "input",
                name: "nameManager",
                message: "What is your manager's first name?",
                // Validating the user's answer to make sure they actually typed out a name, if they didn't then they will be prompted to input a valid name
                validate: userAnswer => {
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a valid first name to continue"
                }
            },
            {
                type: "input",
                name: "idManager",
                message: "What is your manager's ID?",
                // Validating the user's answer to make sure they actually typed out an ID, and if they didn't then they will be prompted to enter an ID
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
                // Validating the user's answer to make sure they actually typed out an email which would include an @ and a . and if they didn't then they will be prompted to enter a valid email address
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
                // Validating the user's answer to make sure they actually typed out something, and be within a certain length range, and if they didn't then they will be prompted to enter a valid phone number
                validate: userAnswer => {
                    if (userAnswer !== "" && userAnswer.length > 6 && userAnswer.length < 12) {
                        return true;
                    } return "You must enter a valid phone number to continue" 
                }
            }]).then(answers => {
                // Creates a new Manager class containing the data the user input with their answers
                const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.phoneManager);
                // Adds the Manager class with the related data to the teamArray
                teamArray.push(manager);
                idArray.push(answers.idManager);
                // Calls the assignTeam function which prompts the user to add additional roles
                assignTeam();
            });
    }

    // Creating the assignTeam function, which begins with prompting the user to select a role of a team member to add while prompting them further questions based on their selection
    function assignTeam() {
        
        // Using node inquirer to prompt a role list for assigning a new team member
        inquirer.prompt([
            {
                type: "list",
                name: "roleList",
                message: "What type of team member do you want to add to your team?",
                choices: ["Engineer", "Intern", "I don't want to add anyone"]
            }]).then(userRoleAnswer => {
                // Based on the user's selected role, related question promp function will be called, if user selects that they dont want to add anyone, then the program will call the createHTML function
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

    // Creating assignEngineer function which contains question prompts and Engineer class creation
    function assignEngineer() {
        // Using node inquirer to prompt questions for assigning an engineer
        inquirer.prompt([
            {
                type: "input",
                name: "nameEngineer",
                message: "What is your engineer's first name?",
                validate: userAnswer => {
                    // Validating the user's answer to make sure they actually typed out a name, if they didn't then they will be prompted to input a valid name
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
                    // Validating the user's answer to make sure they actually typed out an ID, and if they didn't then they will be prompted to enter an ID
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
                    // Validating the user's answer to make sure they actually typed out an email which would include an @ and a . and if they didn't then they will be prompted to enter a valid email address
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
                    // Validating the user's answer to make sure they actually typed out a GitHub username, and if they didn't then they will be prompted to enter a GitHub username
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a GitHub username to continue" 
                }
            }]).then(answers => {
                // Creates a new Engineer class containing the data the user input with their answers
                const engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer);
                // Adds the Manager class with the related data to the teamArray
                teamArray.push(engineer);
                idArray.push(answers.idEngineer);
                // Calls the assignTeam function which prompts the user to add additional roles
                assignTeam();
            });
    }

    // Creating assignintern function which contains question prompts and Intern class creation
    function assignIntern() {
        // Using node inquirer to prompt questions for assigning an intern
        inquirer.prompt([
            {
                type: "input",
                name: "nameIntern",
                message: "What is your intern's first name?",
                validate: userAnswer => {
                    // Validating the user's answer to make sure they actually typed out a name, if they didn't then they will be prompted to input a valid name
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
                    // Validating the user's answer to make sure they actually typed out an ID, and if they didn't then they will be prompted to enter an ID
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
                    // Validating the user's answer to make sure they actually typed out an email which would include an @ and a . and if they didn't then they will be prompted to enter a valid email address
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
                    // Validating the user's answer to make sure they actually typed out a school name, if they didn't then they will be prompted to input a valid name
                    if (userAnswer !== "") {
                        return true;
                    } return "You must enter a school name to continue" 
                }
            }]).then(answers => {
                // Creates a new Intern class containing the data the user input with their answers
                const intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
                // Adds the Manager class with the related data to the teamArray
                teamArray.push(intern);
                idArray.push(answers.idIntern);
                // Calls the assignTeam function which prompts the user to add additional roles
                assignTeam();
            });
    }

    // Creates the createHTML function, which needs a file name and data to properly run the function, this will write an HTML file with data from the user input
    function createHTML(fileName, data) {
        // Writes an HTML file into the dist folder with a title of index.html, links to the generateHTML.js with the data of teamArray
        fs.writeFile("./dist/index.html", generate(teamArray), err => {
            // If there is an error in the process, log the error
            if (err) {
                console.error(err);
            }
            // If the HTML is generated successfully, log a message to the user letting them know
            console.log("index.html created")
        })
    };  

    // Calls the assignManager function once init begins
    assignManager();
}
// Calls the init function to start the program
init();
