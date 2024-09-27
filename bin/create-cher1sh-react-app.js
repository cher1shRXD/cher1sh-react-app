#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const inquirer = require("inquirer");
const chalk = require("chalk");

async function init() {
  console.log(chalk.green("Welcome to cher1shRXD's React App template!"));

  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
      default: "my-cher1sh-react-app",
    },
  ]);

  const targetPath = path.join(process.cwd(), answers.projectName);

  try {
    fs.copySync(path.join(__dirname, "../template"), targetPath);
    console.log(chalk.green(`Your cher1sh-react-app created successfully at ${targetPath} by cher1shRXD`));

    const packageJsonPath = path.join(targetPath, "package.json");
    const packageJson = fs.readJsonSync(packageJsonPath);

    packageJson.name = answers.projectName;
    packageJson.version = "1.0.0";

    fs.writeJsonSync(packageJsonPath, packageJson, { spaces: 2 });
  } catch (err) {
    console.error(chalk.red("Error while creating the project"), err);
  }
}

init();
