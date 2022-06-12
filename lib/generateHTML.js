const path = require("path");
const fs = require("fs");
const htmlTemplates = path.resolve(__dirname, "../src");




const website = teamMembers => {
    const page = [];

    page.push
}

const generateMember = member => {

    let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"))
    memberTemplate = newText(memberTemplate, "name", )

};

const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    return memberTemplate.replace(grabText, info);
};