import chalk from "chalk";

process.on("unhandledRejection", (err) => {
    console.log(chalk.redBright.bold("ERROR"), err.message);
});


export function handleInvalidArguments(rawArgs){
    const args = rawArgs.slice(2);
    if(args.length > 1){
        throw new Error("Argument count is exceeded. Please only specify the folder name.");
    }
    if(args.some(arg => arg[0] === "-")){
        throw new Error("Invalid argument. Flags are not supported.");
    }
}
