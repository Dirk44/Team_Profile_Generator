const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");
const team = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function createManager() {
    console.log("Build your Team!");
    inquirer.prompt([
        {
            type: "input",
            name: "manager",
            message: "What is your team manager's name?",
            validate: (manager) => {
                if (manager) {
                    return true;
                }
                else {
                    console.log("Plase enter the manager's name.");
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's ID?",
            validate: (managerId) => {
                if (managerId) {
                    return true;
                }
                else {
                    console.log("Please enter manager's ID.");
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's ID?",
            validate: (managerEmail) => {
                if (managerEmail) {
                    return true;
                }
                else {
                    console.log("Please enter manager's Email.");
                }
            }
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's Office Number?",
            validate: (managerOfficeNumber) => {
                if (managerOfficeNumber) {
                    return true;
                }
                else {
                    console.log("Please enter manager's Office Number.");
                }
            }
        },
    ]).then(response => {
        const manager = new Manager(response.manager, response.managerId, response.managerEmail, response.managerOfficeNumber);
        team.push(manager);
        addTeam();

    });
}

function addTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "memberType",
            message: "Which type of team member are you adding?",
            choices: ["Engineer", "Intern"]
        }
    ]).then(picked => {
        switch (picked.memberType) {
            case "Engineer":
                addEngineer();
                break;
                case "Intern":
                    addIntern();
                    break;
                    case "I don't need to add anymore team members.":
                        buildTeam();
                        break;
        }
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Whats the name of the Engineer you want to add?",
            validate: (engineerName) => {
                if (engineerName) {
                    return true;
                }
                else {
                    console.log("Enter the nameof the Engineer you want to add.");
                }
            }
        },

        {
            type: "input",
            name: "engineerId",
            message: "Whats the ID of the Engineer you want to add?",
            validate: (engineerId) => {
                if (engineerId) {
                    return true;
                }
                else {
                    console.log("Enter the name of the Engineer you want to add.");
                }
            }
        }, 
    ])
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
