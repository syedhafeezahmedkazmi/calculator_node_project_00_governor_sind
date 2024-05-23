// #! /usr/bin/env node
import inquirer from "inquirer";
// printing a Wellcom message
console.log("\n\tWellcom To \`by\tHafeez_kazmi\` - Calculator_node_project\n");
// Asking Questions from users through Inquirer
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter you first Number: "
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter you first Number: "
    },
    {
        type: "list",
        name: "operator",
        message: "please select operation: ",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
else if (ans.operator === "Division") {
    console.log(ans.first_number / ans.second_number);
}
else {
    console.log("Invalid Input");
}
