// Assinging node package requirements
const path = require("path");
const fs = require("fs");
// Assigning htmlTemplates to the correct directory for reference
const htmlTemplates = path.resolve(__dirname, "../src");
// Assigning page to an empty string which will later be populated
let page = ``;



// Creating the teamMembers function which grabs all the user answer data and uses it to change values within the html template
function teamMembers(data) {

    // For loop which iterates through the data array
    for (let i =0; i < data.length; i++) {

        // Assigning memberTemplate to the .html file with the stored content which will be replaced, memberTemplate.replace wouldnt work unless adding utf8 which makes it readable
        let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"), "utf8")
        // Replacing name, idNumber, and email information in memberTemplate with user's answer for those options
        memberTemplate = newText(memberTemplate, "name", data[i].getName());
        memberTemplate = newText(memberTemplate, "idNumber", data[i].getId());
        memberTemplate = newText(memberTemplate, "email", data[i].getEmail());

        // Checking if the role which is being passed through the iterated data array, will then re-assign the related data with the related user input data
        switch (data[i].getRole()) {
            // If its a Manager role, replace the extra question in the template with an officeNumber and related role
            case "Manager":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getOfficeNumber());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                // Adds the memberTemplate with replaced data to the page string
                page+= memberTemplate;
                // Breaks out of the switch statement so program can continue
                break;
            // If its an Engineer role, replace the extra question in the template with a GitHub link and related role
            case "Engineer":
                memberTemplate = newText(memberTemplate, "extraQuestion", `GitHub: <a href="${data[i].getGitHub()}" target="_blank">${data[i].github}</a>`)
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                // Adds the memberTemplate with replaced data to the page string
                page+= memberTemplate;
                // Breaks out of the switch statement so program can continue
                break;
            // If its an Intern role, replace the extra question in the template with a school and related role
            case "Intern":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getSchool());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                // Adds the memberTemplate with replaced data to the page string
                page+= memberTemplate;
                // Breaks out of the switch statement so program can continue
                break;
        }
    }
    // Once the amount of user's created team members is done being added to the page string, return the value of it so that it can be referenced in htmlContent
    return page;
}

// Assigning newText to grab placeholder text in the memberTemplate and replace it
const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    // Return the value of the memberTemplate with the replaced placeholder text to be referenced within the teamMembers function
    return memberTemplate.replace(grabText, info);
};

// Assigning the htmlPage function to contain base html code which will input the returned page string within the htmlContent
function htmlPage(data) {
    let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="../assets/css/style.css" />

    <title>Strickland Propane</title>

</head>
<body>

    <!-- Header Title of the page -->
    <section class="col-12 jumbotron mb-3 team-heading">
        <h1 class="text-center">Strickland Propane</h1>
    </section>

     <!-- Container which will populate with team members added through the terminal promps -->
    <section class="container">
        <section class="row">
            <section class="team-members col-12 d-flex justify-content-center">
                ${teamMembers(data)}
            </section>
        </section>
    </section>
    
</body>
</html>
    `
    // Returns the htmlContent with the newly added teamMembers data, allowing it to be referenced for export
    return htmlContent;
}

// Exports the htmlPage for writeFile usage in index.js
module.exports = htmlPage;

