const readline = require('readline-sync');
console.log('Welcome to the calculator!');

console.log('Please enter desired operator');
const operator = readline.prompt();

console.log('Please enter operands separated by a space');
var space_separated_operands = readline.prompt();

space_separated_operands = space_separated_operands.replace(/\s/g, operator);

console.log(eval(space_separated_operands));

/*
var answer;
switch (operator) {
    case '+':
        answer = parseInt(op1) + parseInt(op2);
        break;
    case '-':
        answer = parseInt(op1) - parseInt(op2);
        break;
    case '*':
        answer = parseInt(op1) * parseInt(op2);
        break;
    case '/':
            answer = parseInt(op1) / parseInt(op2);
            break;

}

console.log(answer);
*/