import inquirer from "inquirer";
// const input1=await inquirer.prompt({
// name:"num1",
// type:"number",
// message:"Kindly Enter Your First Number : "
// });
// const input2=await inquirer.prompt({
// name:"num2",
// type:"number",
// message:"Kindly Enter Your Second Number : "
// });
// let total:number=input1.num1+input2.num2
// console.log(total);
const input1 = await inquirer.prompt([
    {
        name: "first",
        type: "number",
        message: "Kindly Enter Your First Number : "
    },
    {
        name: "Second",
        type: "number",
        message: "Kindly Enter Your Second Number : "
    },
    {
        name: "Operator",
        type: "list",
        message: "Kindly Select Your Operator : ",
        choices: ["Addition", "Subtraction", "Division", "Multiplication", "Exponentiation"]
    }
]);
if (input1.Operator == "Addition") {
    console.log(input1.first + input1.Second);
}
else if (input1.Operator == "Subtraction") {
    console.log(input1.first - input1.Second);
}
else if (input1.Operator == "Division") {
    console.log(input1.first / input1.Second);
}
else if (input1.Operator == "Multiplication") {
    console.log(input1.first * input1.Second);
}
else if (input1.Operator == "Exponentiation") {
    console.log(input1.first ** input1.Second);
}
else {
    console.log("Kindly Select An Operator");
}
let ishungry = true;
let snack = ishungry ? "apple" : "water";
console.log(`You Should have some ${snack}.`);
