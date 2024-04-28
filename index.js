import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "enter 1st number",
        type: "number",
        name: "firstNum"
    },
    {
        message: "enter 2nd number",
        type: "number",
        name: "secondNum"
    },
    {
        message: "Select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNum + answer.secondNum);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNum - answer.secondNum);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNum * answer.secondNum);
}
else if (answer.operator === "division") {
    console.log(answer.firstNum / answer.secondNum);
}
else {
    console.log("please select a valid operator");
}
