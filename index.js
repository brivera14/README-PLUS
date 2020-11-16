const inquirer = require('inquirer');

// array of questions for user
const promptReadmeQuestions = userAnswers => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the steps required to install your project: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter instructions and examples for use:',
        },
        {
            type: 'confirm',
            name: 'confirmCredits',
            message: 'Would you like to add collaborators to your project?',
            default: false
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'Please enter the collaborators of your project:',
            when: ({ confirmCredits }) => confirmCredits
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Would you like to add a License?',
            default: false,
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose the license for this project:',
            choices: ['APACHE', 'MIT', 'BSD', 'GPL'],
            when: ({ confirmLicense }) => confirmLicense
        },
    ])
}
// const questions = [

// ];

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
promptReadmeQuestions().then(userAnswers => {console.log(userAnswers)});