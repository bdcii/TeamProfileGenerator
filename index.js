//setting variables for access to npm modules I will need later
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//setting variables to connect the different Class .js files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


//variables to generate html file and place it in specified directory
const output_dir = path.resolve(__dirname, "dist");
const output_path = path.join(output_dir, "teamsite.html")
const render = require("./src/template-helper");


//array that collects employee data from user submission
let teamArray = [];


//function that runs at start off application
function runApp() {
    console.log('Please enter Manager information to begin building team');
    addManager();
}


//function that runs at end of each team member prompt. Lets user choose next step to take.
function askWhatsNext() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do next?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building My Team'],
            name: 'menuOption',
        }
    ]).then(answers => {
        if (answers.menuOption === 'Add an Engineer') {
            addEngineer()
        } else if (answers.menuOption === 'Add an Intern') {
            addIntern()
        } else buildTeam()
    })
}

//function that prompts user for Manager data.
function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Team Manager name?',
            name: 'managerName',
        },
        {
            type: 'input',
            message: 'What is the Team Manager employee ID?',
            name: 'managerID',
        },
        {
            type: 'input',
            message: 'What is the Team Manager email address?',
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: 'What is the Team Manager office number?',
            name: 'managerOffice',
        },
    ]).then(answers => {

        //creates new Manager object using collected user input
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice);

        //pushes instance of Manager object into teamArray for later use
        teamArray.push(manager);

        //prompt user for next step
        askWhatsNext();
    })
}

//function that prompts user for engineer data
function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Engineer?',
            name: 'engineerName',
        },
        {
            type: 'input',
            message: 'What is the Engineer ID?',
            name: 'engineerID',
        },
        {
            type: 'input',
            message: 'What is the Engineer email address?',
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: 'What is Engineers GitHub username?',
            name: 'engineerGitHub',
        },
    ]).then(answers => {

        //creates new Engineer object using collected user input
        const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);

        //pushes instance of Engineer object into the teamArray for later use
        teamArray.push(engineer);

        //prompt user for next step
        askWhatsNext();
    })
}

//function that prompts user for intern data
function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the Intern?',
            name: 'internName',
        },
        {
            type: 'input',
            message: 'What is the Intern ID?',
            name: 'internID',
        },
        {
            type: 'input',
            message: 'What is the Intern email address?',
            name: 'internEmail',
        },
        {
            type: 'input',
            message: 'Where does the Intern attend school?',
            name: 'internSchool',
        },
    ]).then(answers => {

        //creates new Intern object collected from user input
        const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

        //pushes instance of Intern object into teamArray for later use
        teamArray.push(intern);

        //prompt user for next step
        askWhatsNext();
    })
}

//this function generates the html page using the data collected from user prompts
function buildTeam() {

    //this function uses the file system to create an html file with the data collected from user prompts.  It puts the file in the directory specified by the output
    //path argument. It uses the render function to inject the collected user data sitting in the teamArray into the template js file, and uses that to generate the html
    fs.writeFileSync(output_path, render(teamArray), "utf-8");
}

//starting application
runApp();