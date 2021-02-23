// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Manager.

const Employee = require("./Employee");



class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
        

    }

    getManagerName () {
        return this.name;
    }

    getManagerId() {
        return this.id;
    }

    getManagerEmail() {
        return this.email;
    }

    GetManagerOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }


}

module.exports = Manager;