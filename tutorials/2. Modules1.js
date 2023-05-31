const data = require('./3. Modules2')

const fname = "Poorna";
const lname = "Chand";

const learning = "I am learning NodeJS";

const printToDo = (message) => {
    console.log(message)
};

printToDo(learning);

console.log(data)

module.exports = {fname, lname, printToDo};
