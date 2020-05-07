const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const newEmployee = [
    {
        type: "list",
        name: "employeeType",
        message: "Please choose next employee to add.",
        choices: [
            "Engineer",
            "Intern",
            "I have already added all employees."
        ]
    }
]
const newManager = [
    {
        type: "input",
        name: "name",
        message: "Please enter the manager's name."
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the manager's ID number."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email."
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number."

    }
]
const newEngineer = [
    {
        type: "input",
        name: "name",
        message: "Please enter the engineers's name."
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the engineers's ID number."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineers's email."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineers's github username."

    }
]
const newIntern = [
    {
        type: "input",
        name: "name",
        message: "Please enter the intern's name."
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the intern's ID number."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email."
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the intern's school."

    }
]
//start prompts with manager
addManager();

function addManager() {
    inquirer.prompt(newManager).then(function(data) {
        let manager = new Manager(data.name, data.ID, data.email, data.officeNumber)
        employees.push(manager);
        addTeamMember();
    })
}
//user can choose to add new employee (engineer or intern) or finish if they have added all employees
function addTeamMember () {
    inquirer.prompt(newEmployee).then(function(data) {
        console.log(data.employeeType);
        if (data.employeeType === "Engineer") {
            addEngineer();
        }
        else if (data.employeeType === "Intern") {
            addIntern();
        }
        else {
            writeToFile(outputPath, render(employees));
        }
    })
}

function addEngineer () {
    inquirer.prompt(newEngineer).then(function(data) {
        let engineer = new Engineer(data.name, data.ID, data.email, data.github)
        employees.push(engineer);
        addTeamMember();
    })
}

function addIntern () {
    inquirer.prompt(newIntern).then(function(data) {
        let intern = new Intern(data.name, data.ID, data.email, data.school)
        employees.push(intern);
        addTeamMember();
    })
}
// Empty array we will push employee objects into
const employees = [];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log("team.html created successfully!");
    });
  }

