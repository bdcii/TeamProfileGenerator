//allows me to run tests on the constructors and functions in Employee.js
const Employee = require("../lib/Employee");


//tests on the constructors and functions in Employee.js
test("can create Employee object", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(typeof(testEmployee)).toBe("object");
});

test("Can set name using Employee constructors", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.name).toBe("Qbert");
});

test("Can set id using Employee constructors", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.id).toBe(42);
});

test("Can set email using Employee constructors", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.email).toBe("qbert@fakemail.com");
});

test("Does getName() return a name", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.getName()).toBe("Qbert");
});

test("Does getID() return an ID", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.getId()).toBe(42);
});

test("Does getEmail() return email address", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.getEmail()).toBe("qbert@fakemail.com");
});

test("Does getRole() return Employee role", () => {
    const testEmployee = new Employee("Qbert", 42, "qbert@fakemail.com");
    expect(testEmployee.getRole()).toBe("Employee");
});