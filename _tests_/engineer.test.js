const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Answers", () => {
        it ("Should grab all the data from answers and return an object with properties", () => {

            const testData = new Engineer("Hank", 111, "hhill@stricklandpropane.com", "BenBasic");

            expect(testData.name).toEqual("Hank");
            expect(testData.id).toEqual(111);
            expect(testData.email).toEqual("hhill@stricklandpropane.com");
            expect(testData.github).toEqual("BenBasic");
        });
    });

    describe("getGitHub", () => {
        it ("Should return the value of github in the data", () => {
            const testData = new Engineer("Hank", 111, "hhill@stricklandpropane.com", "BenBasic");

            expect(testData.getGitHub()).toEqual("https://github.com/BenBasic/");
        });
    });

    describe("getRole", () => {
        it ("Should return the value of the role assigned to Engineer (which is Engineer)", () => {
            const testData = new Engineer("Hank", 111, "hhill@stricklandpropane.com", "BenBasic");

            expect(testData.getRole()).toEqual("Engineer");
        });
    });
});