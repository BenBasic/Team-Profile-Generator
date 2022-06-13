const path = require("path");
const fs = require("fs");
const htmlTemplates = path.resolve(__dirname, "../src");
let page = ``;




function teamMembers(data) {
    console.log(data, "//", page, "//", data.Manager);

    for (let i =0; i < data.length; i++) {
        console.log("i number: " + i);

        // memberTemplate.replace wouldnt work unless adding utf8
        let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"), "utf8")
        memberTemplate = newText(memberTemplate, "name", data[i].getName());
        memberTemplate = newText(memberTemplate, "idNumber", data[i].getId());
        memberTemplate = newText(memberTemplate, "email", data[i].getEmail());

        switch (data[i].getRole()) {
            case "Manager":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getOfficeNumber());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                page+= memberTemplate;
                break;
            case "Engineer":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getGitHub());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                page+= memberTemplate;
                break;
            case "Intern":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getSchool());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                page+= memberTemplate;
                break;
        }
        console.log("page:" + page);
    }
    return page;
}

const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    console.log(grabText);
    return memberTemplate.replace(grabText, info);
};


function htmlPage(data) {
    let htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strickland Propane</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
  <link rel="stylesheet" href="./assets/css/style.css" />
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
    return htmlContent;
}


module.exports = htmlPage;

