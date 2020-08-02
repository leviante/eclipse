//external dependencies
//internal dependencies
import {handleInvalidArguments} from "./error";
import {copyFilesToTargetDirectory, initGit} from "./main";
import chalk from "chalk";

function parseArgumentsIntoOptions(rawArgs) {
    const args = rawArgs.slice(2);
    return {
        targetDir: args[0]
    }
}

export async function cli(args) {
    handleInvalidArguments(args);
    const options = parseArgumentsIntoOptions(args);
    await copyFilesToTargetDirectory(options.targetDir);
    console.log("Created the template, initializing Git repository...");
    const {stdout} = await initGit(options.targetDir);
    console.log(stdout);
    console.log(chalk.green.bold("DONE"), "The installation is completed.");
    console.log("Don't forget to install your dependencies by doing", chalk.cyan.bold("yarn"), "or", chalk.red.bold("npm install") + "!");
    console.log("To start the development server, use", chalk.cyan.bold("yarn watch"), "or", chalk.red.bold("npm run watch") + ".");
}
