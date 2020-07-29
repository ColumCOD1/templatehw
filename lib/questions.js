module.exports = {
    addTeamMember: [
      {
        type: "confirm",
        message: "would you like to add a team member",
        name: "addMember",
      },
    ],
    promptRole: [
      {
        type: "list",
        message: "what is your job title",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
    ],
    buildManager: [
      {
        type: "input",
        message: "what is your managers name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is your managers id",
        name: "id",
      },
      {
        type: "input",
        message: "what is your managers email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your managers office number",
        name: "officeNumber",
      },
    ],
    buildIntern: [
      {
        type: "input",
        message: "what is you interns name?",
        name: "name",
      },
      {
        type: "input",
        message: "what is you interns id?",
        name: "id",
      },
      {
        type: "input",
        message: "what is your interns email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your interns education",
        name: "school",
      },
    ],
    buildEngineer: [
      {
        type: "input",
        message: "what is your engineers name",
        name: "name",
      },
      {
        type: "input",
        message: "what is your engineers id?",
        name: "id",
      },
      {
        type: "input",
        message: "what is your engineers email",
        name: "email",
      },
      {
        type: "input",
        message: "what is your engineers Github username",
        name: "github",
      },
    ],
  };