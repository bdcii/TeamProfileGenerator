//allows me to run tests on the constructors and functions in Manager.js
const Manager = require("../lib/Manager");


//tests on the constructors and functions in Manager.js
test("Can set office number using Manager constructors", () => {
    const testManager = new Manager("Squidward", 17, "squidward@fakemail.com", 9);
    expect(testManager.officeNumber).toBe(9);
});

test("Does getOffice() return office number", () => {
    const testManager = new Manager("Squidward", 17, "squidward@fakemail.com", 9);
    expect(testManager.getOffice()).toBe(9);
});

test("Does getRole() return Manager role", () => {
    const testManager = new Manager("Squidward", 17, "squidward@fakemail.com", 9);
    expect(testManager.getRole()).toBe("Manager");
});