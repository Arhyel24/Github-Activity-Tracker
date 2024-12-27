#!/usr/bin/env node

import chalk from "chalk";
import { program } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import { fetchGitHubUser } from "./src/actions/get-user-details.js";
import displayUserData from "./src/actions/display-user-details.js";

program
  .version("1.0.0")
  .description("Github Activity Tracker")
  .option("-n, --name <type>", "Add your name", "myname")
  .action(async (options) => {
    console.log(
      chalk.yellow(
        figlet.textSync("GITHUB ACTIVITY", { horizontalLayout: "full" })
      )
    );

    const args = process.argv.slice(2);

    if (args.length < 1) {
      console.error(chalk.red("Error: Please provide a GitHub username."));
      process.exit(1);
    }

    const username = args[0];

    
    const events = await fetchGitHubUser(username);
    
    if (!events) {
      console.error(chalk.red("Error: Cannot fetch events"));
      process.exit(1);
    }
    // console.log(events);

    displayUserData(events);

    // inquirer
    //   .prompt([
    //     {
    //       type: "input",
    //       name: "name",
    //       message: "What's your name?",
    //     },
    //   ])
    //   .then((answers) => {
    //     console.log(chalk.green(`Hey there, ${answers.name}!`));
    //   });
  });

program.parse(process.argv);
