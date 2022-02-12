// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
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
        name: 'color',
        message: 'What is your favorite color>',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false;
            }       
        }
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}.md`, data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                console.log("Oh no!!!")
                reject(err);

                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'File cnode inreated!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
        // .then(data => {
        //     return console.log(data);
        // })
        .then(data => {
            console.log(data);
            console.log(generateMarkdown(data))
            return generateMarkdown(data);
            // return generateMarkdown(data);
        })
        .then(info => {
            return writeToFile(info);
        })
        // .catch(err => {
        //     console.log(err);
        // });
}

// Function call to initialize app
init();

