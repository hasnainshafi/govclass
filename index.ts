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

const input1=await inquirer.prompt([ 
{
name:"first",
type:"number",
message:"Kindly Enter Your First Number : "
},

{
name:"Second",
type:"number",
message:"Kindly Enter Your Second Number : "
},

{
name:"Operator",
type:"list",
message:"Kindly Select Your Operator : ",
choices:["Addition","Subtraction","Division","Multiplication","Exponentiation"]
}

]);

if (input1.Operator=="Addition"){
    console.log(input1.first+input1.Second)
}

else if (input1.Operator=="Subtraction"){
    console.log(input1.first-input1.Second)
}

else if (input1.Operator=="Division"){
    console.log(input1.first/input1.Second)
}

else if (input1.Operator=="Multiplication"){
    console.log(input1.first*input1.Second)
}

else if (input1.Operator=="Exponentiation"){
    console.log(input1.first**input1.Second)
}

else{
    console.log("Kindly Select An Operator")
}


let ishungry=false;
let snack=ishungry ? "apple" : "water";
console.log(`You Should have some ${snack}.`)


// const { Day }: { Day: string } = await inquirer.prompt([ 
//     {
//     name:"Day",
//     type:"input",
//     message:"Kindly Enter Any Day Name : "
//     },
    
//     ]);

//     switch(Day.toLowerCase){

//         case"monday":
//         console.log('Go For Work');
//         break;
//         case"tuesday":
//         console.log('Go For Lunch');
//         break;
//         case"wednesday":
//         console.log('Go For Dinner');
//         break;
//         case"thursday":
//         console.log('Go With Friends');
//         break;
//         case"friday":
//         console.log('Go For A Class');
//         break;
//         case"saturday":
//         console.log('Go For A Medical Check-Up');
//         break;
//         case"sunday":
//         console.log('Go For Picnic');
//         break;
//         default:
//             console.log('Please Select Any Day')
//     }

// 2nd method to perform swutch case declaration of function and convert and save into variable
// async function main() {
//     const { Day }: { Day: string } = await inquirer.prompt([
//         {
//             name: "Day",
//             type: "input",
//             message: "Kindly Enter Any Day Name : "
//         }
//     ]);
    
//     switch (Day.toLowerCase()) {
//         case "monday":
//             console.log('Go For Work');
//             break;
//         case "tuesday":
//             console.log('Go For Lunch');
//             break;
//         case "wednesday":
//             console.log('Go For Dinner');
//             break;
//         case "thursday":
//             console.log('Go With Friends');
//             break;
//         case "friday":
//             console.log('Go For A Class');
//             break;
//         case "saturday":
//             console.log('Go For A Medical Check-Up');
//             break;
//         case "sunday":
//             console.log('Go For Picnic');
//             break;
//         default:
//             console.log('Please Select Any Day');
//     }
// }

// let m=main()
// console.log(m)



// 3rd method to perform swutch case simple declaration of function
// async function main() {
//     const { Day }: { Day: string } = await inquirer.prompt([
//         {
//             name: "Day",
//             type: "input",
//             message: "Kindly Enter Any Day Name : "
//         }
//     ]);
    
//     switch (Day.toLowerCase()) {
//         case "monday":
//             console.log('Go For Work');
//             break;
//         case "tuesday":
//             console.log('Go For Lunch');
//             break;
//         case "wednesday":
//             console.log('Go For Dinner');
//             break;
//         case "thursday":
//             console.log('Go With Friends');
//             break;
//         case "friday":
//             console.log('Go For A Class');
//             break;
//         case "saturday":
//             console.log('Go For A Medical Check-Up');
//             break;
//         case "sunday":
//             console.log('Go For Picnic');
//             break;
//         default:
//             console.log('Please Select Any Day');
//     }
// }
// main()

//Rest Operators 
async function fry(egg:number=2, butter:number=5, ...salt:number[]){
    console.log(egg)
    console.log(butter)
    console.log(salt)
}
fry(4,5,6,7)
// let r=fry()
// console.log(r)
//Spread Operators
async function m(e:number=2, b:number=5, ...s:number[]){
    console.log(e)
    console.log(b)
    console.log(...s)
}
fry(4,5,6,7)

// Default Operators
async function a(e:number=2, b:number=5, s:number=9){
    return e+b+s
}
let g=a(4,5,6)
console.log(g)

//Arrow Functions 1st method
let l=() =>{
    let f=5+3+2
    return f
} 
let o=l()
console.log(o)

//Arrow Functions 2nd method
let lo=() =>5+9+6
let ko=lo()
console.log(ko)

// Arrow Functions 3rd Method
let ba=(eg:number,bu:number,sa:number)=>(eg+bu+sa)
let pa=ba(5,4,8)
console.log(pa)

// Arrow Functions 4th Method
let baa=()=>{return 4+8+23}
let paa=baa()
console.log(paa)


// Arrow Functions 5th Method
let bba=(eg:number,bu:number,sa:number)=>{

    let coo=eg+bu+sa;
    return coo;
}
let ppa=bba(5,40,8)
console.log(ppa)


// Recursive function
// a function calling itself
function count(nlm:number){
    if(nlm <= 0){
        console.log("DONE!");
        return;
    }
    console.log(nlm);
    count(nlm - 1);
}
count(50);


// Anonymous Function
// A function that has no name and it is saved in any expression(Variables) and we can call this function through expressions.
// setTimeout(function() {
//     console.log("This is a delayed message.");
// }, 10000);
let add = function(a: number, b: number): number {
    return a + b;
};

console.log(add(2, 3)); // Output: 5

// Hoisting
// Hoisting is basically declaration of any function or variable before creating of function or any variable
down()
function down(){
    console.log(4+5)
}
