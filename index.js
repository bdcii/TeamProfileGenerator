//setting variables for modules I will need later
const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");

//setting variables to connect the different Class .js files
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");








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


    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building My Team'],
        name: 'menuOption',
    },


    {
        type: 'input',
        message: 'What is the name of the Engineer?',
        name: 'engineerName',
        when: (answers) => answers.menuOption === 'Add an Engineer'
    },
    {
        type: 'input',
        message: 'What is the Engineer ID?',
        name: 'engineerID',
    },
    {
        type: 'input',
        message: 'What is the Enginneer email address?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is Engineers GitHub username?',
        name: 'engineerGitHub',
    },


    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building My Team'],
        name: 'menuOption',
    },


    {
        type: 'input',
        message: 'What is the name of the Intern?',
        name: 'internName',
        when: (answers) => answers.menuOption === 'Add an Intern'
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

    {
        type: 'list',
        message: 'What would you like to do next?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building My Team'],
        name: 'menuOption',
    },


])

.then((answers) =>{

    const {managerName, managerID, managerEmail, managerOffice, menuOption, engineerName, engineerID, engineerEmail, engineerGitHub, internName, internID, internEmail, internSchool } = answers;




//will need function to generate HTML file containing data collected from prompts

})