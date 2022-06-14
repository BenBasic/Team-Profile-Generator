const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Answers", () => {
        it ("Should grab all the data from answers and return an object with properties", () => {

            const testData = new Manager("Buck", 555, "bstrickland@stricklandpropane.com", "(912) 748-4422");

            expect(testData.name).toEqual("Buck");
            expect(testData.id).toEqual(555);
            expect(testData.email).toEqual("bstrickland@stricklandpropane.com");
            expect(testData.officeNumber).toEqual("(912) 748-4422");
        });
    });

    describe("getOfficeNumber", () => {
        it ("Should return the value of officeNumber in the data", () => {
            const testData = new Manager("Buck", 555, "bstrickland@stricklandpropane.com", "(912) 748-4422");

            expect(testData.getOfficeNumber()).toEqual("(912) 748-4422");
        });
    });

    describe("getRole", () => {
        it ("Should return the value of the role assigned to Manager (which is Manager)", () => {
            const testData = new Manager("Buck", 555, "bstrickland@stricklandpropane.com", "(912) 748-4422");

            expect(testData.getRole()).toEqual("Manager");
        });
    });
});