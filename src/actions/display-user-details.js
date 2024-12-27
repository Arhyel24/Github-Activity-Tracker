import chalk from "chalk";


export default function displayUserData(events) {
  events.forEach((event) => {
    if (event.type === "WatchEvent") {
      console.log(
        chalk.yellow(
          `- Starred  ${event.repo.name}`
        )
      );
    } else if (event.type === "CreateEvent") { 
    console.log(chalk.blue(`- Created new repository ${event.repo.name}`))
    } else if (event.type === "PushEvent") {
      console.log(chalk.white(`- Pushed ${event.payload.commits.length} commits to ${event.repo.name}`))
    }
    // console.log(chalk.yellow(event.type));c
  });
}
