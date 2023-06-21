const readline = require('readline-sync');

function PrintMessage(msg) {
    console.log(msg);
}
function CheckForExitSignal(passed_string){
    if (passed_string.includes('q')) {
        return true;
    } else {
        return false;
    }
}
function ExitWithMessage(prompt) {
    throw new Error(prompt);
}
function GatherInput(prompt) {
    console.log(prompt);
    const message = readline.prompt();
    if (CheckForExitSignal(message)) {
        ExitWithMessage('Exit signal q detected.');   
    }
    return message;
}
function ParseInputString(passed_string, operator) {
    return passed_string.replace(/\s/g, operator);
}
function Calculate(expression) {
    try {
        var answer = eval(expression);
    } catch (e) {
        return 'Invalid input';
    }
    return answer;
}

PrintMessage('Welcome to the calculator!');

while (true){

    const operator = GatherInput('Please enter desired operator. (Enter q to quit)');
    const operands = GatherInput('Please enter space-separated integers');

    PrintMessage(Calculate(ParseInputString(operands, operator))); 
}