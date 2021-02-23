// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");



class Intern extends Employee {
    constructor (name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

    }

    getInternName () {
        return this.name;
    }

    getInternId() {
        return this.id;
    }

    getInternEmail() {
        return this.email;
    }

    getInternSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }


}

module.exports = Intern;