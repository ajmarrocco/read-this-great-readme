// Include packages needed for this application
const inquirer = require('inquirer');
const { renderLicenseBadge, renderLicenseLink , renderLicenseTable, renderLicenseSection, generateMarkdown } = require('./utils/generateMarkdown.js');
const fs = require('fs');
// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required)',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please write a short description of your project!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies? (Required)',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter command should be run to install dependencies!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter what the user need to know about using the repo!');
                return false;
            }       
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']

    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo? (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter what the user need to know about contributing to the repo!');
                return false;
            }       
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests? (Required)',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter command should be run to run tests!');
                return false;
            }       
        }
    }
];

const promptUser = () => inquirer.prompt(questions);

// Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);

                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// Create a function to initialize app
function init() {
    promptUser()
        .then(data => {
            // destructs data into license and the rest of data
            const {license, ...rest} = data;
            //calls the license functions in generateMarkdown.js
            renderLicenseBadge(license);
            renderLicenseLink(license)
            renderLicenseTable(license)
            renderLicenseSection(license)
            //runs and returns the generateMarkdown function
            return generateMarkdown(rest,license);
        })
        .then(info => {
            //splits info string
            const titleNameUntrimmed = info.split(' ');
            //trims 2nd element of titleNameUntrimmed and sets to title name
            const titleName = titleNameUntrimmed[1].trim();
            //goes to return write file with titleName and info 
            return writeToFile(titleName, info);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();

