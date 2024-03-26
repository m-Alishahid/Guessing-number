#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const question = await inquirer.prompt([{
        name: "userInputGuess",
        type: "number",
        message: "Please Guess a number under 1-6:",
    }]);
if (question.userInputGuess === randomNumber) {
    console.log("Great! you guess a right number");
}
else {
    console.log("You guess wrong number try again!");
}
