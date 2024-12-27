const inquirer = require("inquirer");

//function to get username input
export default async function askUserInput() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "username",
      message: "Enter the GitHub username:",
    },
  ]);
  return answers.username;
}
