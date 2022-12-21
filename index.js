const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generatehtml')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')


const allEmployees = [];

function createManager( ){
    //Inquirer to collect manager data
    inquirer
    .prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: "name",
        message: "What is the manager's name?"
      },
      {
        type: 'input',
        name: "id",
        message: "What is the manager's id?"
      },
      {
        type: 'input',
        name: "email",
        message: "What is the manager's email?"
      },
      {
        type: 'input',
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
    ])
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
      let manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      allEmployees.push(manager)
      addTeam()
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

function addTeam() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: "Would you like to add another team member?",
            loop: true
        }
    ])
}

function addTeam(){
    inquirer
    .prompt([
        {
            type: 'input',
            name: "name",
            message: "What is the engineer's name?"
          },
          {
            type: 'input',
            name: "id",
            message: "What is the engineer's id?"
          },
          {
            type: 'input',
            name: "email",
            message: "What is the engineer's email?"
          },
          {
            type: 'input',
            name: "officeNumber",
            message: "What is the engineer's github?"
          }
        ])
        .then((answers) => {
            console.log(answers)
            let intern = new Intern(answers.name, answers.id, answers.email, answers.officeNumber)
            allEmployees.push(intern)
            addTeam()
          })
          .catch((error) => {
            if (error.isTtyError) {
            } else {
            }
        });
    }
    //inquirer to ask if user wants to 
    //add Engineer
    //add Intern
    //finish building Team

  
    /* Pass your questions in here */


    // Use user feedback for... whatever!!
   // if() engineer, call createEngineer()
   // if() intern, call createIntern()
   //if fiish, call buildTeam()


      // Prompt couldn't be rendered in the current environment

      // Something else went wrong




function buildTeam(){
   // fs.writeFile()
}
createManager()