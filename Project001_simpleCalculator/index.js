#! /usr/bin/env node
import inquirer from "inquirer";
const { firstNumber, secondNumber, operator } = await inquirer.prompt([
    {
        message: "Inter your first number", name: "firstNumber", type: "number"
    },
    {
        message: "Inter your second number", name: "secondNumber", type: "number"
    },
    {
        message: "Select one of the operators", name: "operator", type: "list", choices: [
            "Addition", "Subtraction", "Multiplication", "Division",
        ]
    }
]);
if (operator === "Addition") {
    console.log(firstNumber + secondNumber);
}
else if (operator === "Subtraction") {
    console.log(firstNumber - secondNumber);
}
else if (operator === "Multiplication") {
    console.log(firstNumber * secondNumber);
}
else if (operator === "Division") {
    console.log(firstNumber / secondNumber);
}
else {
    console.log("Inter a valid operator");
}
