const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Answers", () => {
        it ("Should grab all the data from answers and return an object with properties", () => {

            const testData = new Intern("Bobby", 123, "bhill@stricklandpropane.com", "Clown College");

            expect(testData.name).toEqual("Bobby");
            expect(testData.id).toEqual(123);
            expect(testData.email).toEqual("bhill@stricklandpropane.com");
            expect(testData.school).toEqual("Clown College");
        });
    });

    describe("getSchool", () => {
        it ("Should return the value of school in the data", () => {
            const testData = new Intern("Bobby", 123, "bhill@stricklandpropane.com", "Clown College");

            expect(testData.getSchool()).toEqual("Clown College");
        });
    });

    describe("getRole", () => {
        it ("Should return the value of the role assigned to Intern (which is Intern)", () => {
            const testData = new Intern("Bobby", 123, "bhill@stricklandpropane.com", "Clown College");

            expect(testData.getRole()).toEqual("Intern");
        });
    });
});