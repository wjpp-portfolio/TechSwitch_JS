console.log('Welcome to the calculator!');
const readline = require('readline-sync');

console.log('Please enter first operand');
const op1 = readline.prompt();

console.log('Please enter second operand');
const op2 = readline.prompt();

var answer = parseInt(op1) * parseInt(op2);
console.log(answer);
