const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const outputPath1 = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//link to questions folder which the functions call
const questions = require("./lib/questions");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
//path for the outputted html
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//render file established here which is later used
const render = require("./lib/htmlRenderer");

const writeFileAsync = util.promisify(fs.writeFile);
//empty team array which is continously added to
let teamArray = [];
// and to create objects for each team member (using the correct classes as blueprints!)

//helper function to add team memebers
function addTeamMember() {
  return inquirer
    .prompt(questions.addTeamMember)
    .then(function (answers) {
      if (answers.addMember) {
        promptQuesitons();
      } else {
        renderFiles();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//function prompts user which passes through the other functions depending on the user response
function promptQuesitons() {
  inquirer
    .prompt(questions.promptRole)
    .then(function (reply) {
      //switch case which took role of if statements, runs through function depending on user input
      switch (reply.role) {
        case "Manager":
          return buildManager();
        case "Intern":
          return buildIntern();
        case "Engineer":
          return buildEngineer();
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}
//this function builds the managers profile
function buildManager() {
  inquirer
    .prompt(questions.buildManager)
    //.then gathers the information above
    .then(function (managerReply) {
      //making a new object
      teamArray.push(
        new Manager(
          managerReply.name,
          managerReply.id,
          managerReply.email,
          managerReply.officeNumber
        )
      );
      //run new team member function (this confuses me)
      addTeamMember();
    })
    .catch(function (err) {
      console.log(err);
    });
}
//this function builds intern profile
function buildIntern() {
  inquirer
    .prompt(questions.buildIntern)
    .then(function (internReply) {
      teamArray.push(
        new Intern(
          internReply.name,
          internReply.id,
          internReply.email,
          internReply.school
        )
      );
      addTeamMember();
    })
    .catch(function (err) {
      console.log(err);
    });
}
//this funciton builds engineer profile
function buildEngineer() {
  inquirer
    .prompt(questions.buildEngineer)
    .then(function (engineerReply) {
      teamArray.push(
        new Engineer(
          engineerReply.name,
          engineerReply.id,
          engineerReply.email,
          engineerReply.github
        )
      );
      addTeamMember();
    })
    .catch(function (err) {
      console.log(err);
    });
}

//init to run questions (which are in the questions folder)
function init() {
  promptQuesitons();
}
init();
//ASYNC the runs function
//this renders the file sending files to generate html
async function renderFiles() {
  try {
    const userAnswers = await render(teamArray);
    writeFileAsync(outputPath, userAnswers);
  } catch (err) {
    console.log(err);
  }
}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
