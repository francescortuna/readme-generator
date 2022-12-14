// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    { // For title section of README
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    { // For description section of README
        type: 'input',
        name: 'desc',
        message: 'Enter a description of your project.'
    },
    { // For installation section of README
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    { // For instruction section of README
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.'
    },
    { // For license section of README
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT','GPLv3','Apache','BSD 3-clause','GPLv2','LGPLv3','Unlicensed']
    },
    { // For contributing section of README
        type: 'input',
        name: 'contribution',
        message: 'Any instructions on how to contribute?'
    },
    { // For test section of README
        type: 'input',
        name: 'test',
        message: 'What command should user enter to run tests?',
        default: 'npm test'
    },
    { // For question section of README
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    { // For question section of README
        type: 'input',
        name: 'email',
        message: 'Enter email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('README generated.!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile("README.md",data))
}

// Function call to initialize app
init();