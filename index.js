// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions for use.',
        default: 'Run node index.js in command line.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: ['MIT','GPLv3','Apache','BSD 3-clause','GPLv2','LGPLv3','Unlicensed']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Any instructions on how to contribute?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the tests for your application?'
    },
    {
        type: 'input',
        name: 'githubLink',
        message: 'Enter GitHub profile link.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile("README.md",data))
}

// Function call to initialize app
init();