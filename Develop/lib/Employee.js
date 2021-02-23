// TODO: Write code to define and export the Employee class

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

    }

    getEmployeeName () {
        return this.name;
    }

    getEmployeeId() {
        return this.id;
    }

    getEmployeeEmail() {
        return this.email;
    }

    getRole() {
        return "employee"
    }


}

module.exports = Employee;