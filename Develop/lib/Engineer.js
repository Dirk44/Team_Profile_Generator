// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;


    }

    getEngineerName () {
        return this.name;
    }

    getEngineerId() {
        return this.id;
    }

    getEngineerEmail() {
        return this.email;
    }

    getEngineerGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer"
    }


}

module.exports = Engineer;