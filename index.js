const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const team = [];

const init =() => {
    // Inquirer to collect manager data
    inquirer.prompt([
      /* Pass your questions in here */
      {
        type: 'input',
        name: 'name',
        message: 'What is the managers name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the managers id?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the managers email?'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the managers office number?'
      }
    ])
    .then((data) => {
      console.log(data)
      let manager = new Manager(data.name, data.id, data.email, data.officeNumber)
      team.push(manager)
      addTeamMember();
    })
    };

// Function to add new team member
function addTeamMember() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'add',
          message: 'Would you like to add another team member?',
          choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then((data) => {
      if(data.add == 'Engineer') {
        return addEngineer();
      } else if (data.add == 'Intern') {
        return addIntern();
      } else {
        return writeFile();
      }
    })
};

// Function to add engineer
function addEngineer() {
    inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the engineers name?'
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the engineers id?'
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is the engineers email?'
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'What is the engineers github?'
        }
        ])
        .then((data) => {
            console.log(data)
            let engineer = new Engineer(data.name, data.id, data.email, data.officeNumber)
            team.push(engineer)
            addTeamMember();
          })
        };

function addTeamMember() {
    inquirer.prompt([
        {
          type: 'list',
          name: 'add',
          message: 'Would you like to add another team member?',
          choices: ['Engineer', 'Intern', 'None']
        }
        ])
        .then((data) => {
        if(data.add == 'Engineer') {
        addEngineer();
        } else if (data.add == 'Intern') {
        addIntern();
        } else {
        writeFile();
      }
    })
};

function addIntern() {
  inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the interns name?'
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is the interns id?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is the interns email?'
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the interns github?'
      }
      ])
      .then((data) => {
          console.log(data)
          let intern = new Intern(data.name, data.id, data.email, data.officeNumber)
          team.push(intern)
          addTeamMember();
        })
      };
// fs.writeFile()
function writeFile(){
  console.log(generateHTML(team))
  fs.writeFileSync('./dist/index.html', generateHTML(team));
}
init();