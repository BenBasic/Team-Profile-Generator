const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Answers", () => {
        it ("Should grab all the data from answers and return an object with properties")
        const testData = new Intern("Bobby", 123, "bhill@stricklandpropane.com", "Clown College");

        expect(testData.name).toEqual("Bobby");
        expect(testData.id).toEqual(123);
        expect(testData.email).toEqual("bhill@stricklandpropane.com");
        expect(testData.school).toEqual("Clown College");
    });

        it ("Should cause an error if no data is grabbed from the answers", () => {
        const cb = () => new Intern();
        expect(cb).toThrow();
    });
});
