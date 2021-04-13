//allows me to run tests on the constructors and functions in Engineer.js
const Engineer = require("../lib/Engineer");


//tests on the constructors and functions in Engineer.js
test("can create Engineer object", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(typeof (testEngineer)).toBe("object");
});

test("Can set name using Engineer constructors", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(testEngineer.name).toBe("Dylan");
});

test("Can set id using Engineer constructors", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(testEngineer.id).toBe(5);
});

test("Can set email using Engineer constructors", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(testEngineer.email).toBe("dylan@fakemail.com");
});

test("Does getGitHub() return GitHub profile name", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(testEngineer.getGithub()).toBe("dylanTop5");
});

test("Does getRole() return Employee role", () => {
    const testEngineer = new Engineer("Dylan", 5, "dylan@fakemail.com", "dylanTop5");
    expect(testEngineer.getRole()).toBe("Engineer");
});