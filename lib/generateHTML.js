const path = require("path");
const fs = require("fs");
const htmlTemplates = path.resolve(__dirname, "../src");




function teamMembers(teamArray) {
    let page = [];
    page.push(teamArray);

    for (let i =0; i < page.length; i++) {

        let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"))
        memberTemplate = newText(memberTemplate, "name", employee.getName());
        memberTemplate = newText(memberTemplate, "idNumber", employee.getId());
        memberTemplate = newText(memberTemplate, "email", employee.getEmail());

        switch (page[i].getRole()) {
            case "Manager":
                memberTemplate = newText(memberTemplate, "extraQuestion", manager.getOfficeNumber());
                memberTemplate = newText(memberTemplate, "role", manager.getRole());
                return memberTemplate;
            case "Engineer":
                memberTemplate = newText(memberTemplate, "extraQuestion", engineer.getGitHub());
                memberTemplate = newText(memberTemplate, "role", engineer.getRole());
                return memberTemplate;
            case "Intern":
                memberTemplate = newText(memberTemplate, "extraQuestion", intern.getSchool());
                memberTemplate = newText(memberTemplate, "role", intern.getRole());
                return memberTemplate;
        }

    }
}

const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    return memberTemplate.replace(grabText, info);
};

module.exports = teamMembers;