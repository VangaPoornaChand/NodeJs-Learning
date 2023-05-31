const modExample = require("./2. Modules1");
const { fname, lname } = require("./2. Modules1");

const { fullname } = require("./3. Modules2")

const num1 = 23;
const num2 = 44;

const opr = "/";

if(opr==="*"){
    console.log("Multiplication :",num1*num2);
}
else if(opr==="+"){
    console.log(`Addition of Numbers ${num1+num2}`);
}
else{
    console.log(`Can't Perform the Operation`);
}

console.log(`Hi ${modExample.fname} ${modExample.lname}`)

console.log(`Hi ${fname} ${lname}... Here the variable names should be same as the names that exporting in Modules1.js file or else it is printing as undefiened.... `)

console.log(`Hello ${fullname}`);

modExample.printToDo("I am calling funtion from another file...")