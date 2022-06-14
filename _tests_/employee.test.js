const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Answers", () => {
        it ("Should grab all the data from answers and return an object with properties", () => {

            const testData = new Employee("Debbie", 234, "dgrund@stricklandpropane.com");

            expect(testData.name).toEqual("Debbie");
            expect(testData.id).toEqual(234);
            expect(testData.email).toEqual("dgrund@stricklandpropane.com");
        });
    });

    describe("getRole", () => {
        it ("Should return the value of the role assigned to Employee (which is Employee)", () => {
            const testData = new Employee("Debbie", 234, "dgrund@stricklandpropane.com");

            expect(testData.getRole()).toEqual("Employee");
        });
    });
});