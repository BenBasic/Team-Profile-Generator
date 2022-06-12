const path = require("path");
const fs = require("fs");
const htmlTemplates = path.resolve(__dirname, "../src");


const newText = (memberTemplate, oldText, info) => {
    const grabText = ("!" + oldText + "!");
    return memberTemplate.replace(grabText, info);
};

const website = teamMembers => {
    const page = [];


}

const generateMember = member => {

    let memberTemplate = fs.readFileSync(path.resolve(htmlTemplates, "memberTemplate.html"))
    member 

};