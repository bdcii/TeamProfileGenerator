class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){}

    getId(){}

    getEMail(){}

    getRole(){
        return 'Employee';
    }
}

module.exports = Employee;