const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

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

addManager();

function addManager() {
    inquirer.prompt(newManager).then(function(data) {
        // console.log(data.name);
        let manager = new Manager(data.name, data.ID, data.email, data.officeNumber)
        employees.push(manager);
        addTeamMember();
    })
}

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
            console.log(employees);
            // render(employees);
            writeToFile(outputPath, render(employees));
        }
    })
}

function addEngineer () {
    inquirer.prompt(newEngineer).then(function(data) {
        // console.log(data);
        let engineer = new Engineer(data.name, data.ID, data.email, data.github)
        employees.push(engineer);
        addTeamMember();
    })
}

function addIntern () {
    inquirer.prompt(newIntern).then(function(data) {
        // console.log(data);
        let intern = new Intern(data.name, data.ID, data.email, data.school)
        employees.push(intern);
        addTeamMember();
    })
}

//ask for manager
//new employee
// which type
// create instance
// output to array


const employees = [];


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        throw err;
      }
      console.log("team.html created successfully!");
    });
  }


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
