import axios from "axios";
import chalk from "chalk";

export async function fetchGitHubUser(username) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/events`
    );
    return response.data;
  } catch (error) {
    console.error(chalk.red("Error fetching data:", error.message));
    return null;
  }
}
