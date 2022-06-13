const path = require("path");
const fs = require("fs");
const Manager = require("./manager.js");
const Employee = require("./employee");
const htmlTemplates = path.resolve(__dirname, "../src");




function teamMembers(data) {
    let page = [];
    page.push(data);
    console.log(data, "//", page, "//", data.Manager);

    for (let i =0; i < page.length; i++) {
        console.log(data[i].getRole());

        let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"))
        memberTemplate = newText(memberTemplate, "name", data[i].getName());
        memberTemplate = newText(memberTemplate, "idNumber", data[i].getId());
        memberTemplate = newText(memberTemplate, "email", data[i].getEmail());

        switch (page[i].getRole()) {
            case "Manager":
                memberTemplate = newText(memberTemplate, "extraQuestion", page[i].manager.getOfficeNumber());
                memberTemplate = newText(memberTemplate, "role", page[i].manager.getRole());
                return memberTemplate;
            case "Engineer":
                memberTemplate = newText(memberTemplate, "extraQuestion", page[i].engineer.getGitHub());
                memberTemplate = newText(memberTemplate, "role", page[i].engineer.getRole());
                return memberTemplate;
            case "Intern":
                memberTemplate = newText(memberTemplate, "extraQuestion", page[i].intern.getSchool());
                memberTemplate = newText(memberTemplate, "role", page[i].intern.getRole());
                return memberTemplate;
        }

    }
}

const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    return memberTemplate.replace(grabText, info);
};

module.exports = teamMembers;