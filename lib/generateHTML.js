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

        // memberTemplate.replace wouldnt work unless adding utf8
        let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"), "utf8")
        memberTemplate = newText(memberTemplate, "name", data[i].getName());
        memberTemplate = newText(memberTemplate, "idNumber", data[i].getId());
        memberTemplate = newText(memberTemplate, "email", data[i].getEmail());

        switch (data[i].getRole()) {
            case "Manager":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getOfficeNumber());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                return memberTemplate;
            case "Engineer":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getGitHub());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                return memberTemplate;
            case "Intern":
                memberTemplate = newText(memberTemplate, "extraQuestion", data[i].getSchool());
                memberTemplate = newText(memberTemplate, "role", data[i].getRole());
                return memberTemplate;
        }

    }
}

const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    console.log(grabText);
    return memberTemplate.replace(grabText, info);
};

module.exports = teamMembers;