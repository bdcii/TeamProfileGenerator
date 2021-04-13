//allows me to run tests on the constructors and functions in Intern.js
const Intern = require("../lib/Intern");


//tests on the constructors and functions in Intern.js
test("can create Intern object", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(typeof (testIntern)).toBe("object");
});

test("Can set name using Intern constructors", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(testIntern.name).toBe("Daria");
});

test("Can set id using Intern constructors", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(testIntern.id).toBe(9);
});

test("Can set email using Intern constructors", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(testIntern.email).toBe("daria@fakemail.com");
});

test("Does getSchool() return school name", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(testIntern.getSchool()).toBe("Lawndale High");
});

test("Does getRole() return Intern role", () => {
    const testIntern = new Intern("Daria", 9, "daria@fakemail.com", "Lawndale High");
    expect(testIntern.getRole()).toBe("Intern");
});