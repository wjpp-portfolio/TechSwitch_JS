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
function IsVowel(prompt) {
    if ('AEIOU'.indexOf(prompt) == -1) {
        return false; 
    } else{
        return true;
    }
}
class VowelCount {
    constructor(prompt) {
        this.prompt = prompt.toUpperCase();
    }
    show() {
        PrintMessage('The vowel counts (as they appear) are:');
        for (var vowel in this.vowel_map) {
            let v = this.vowel_map[vowel];
            PrintMessage(`${vowel}: ${v}:`);
        }
    }
    count() {
        this.vowel_map = {};
        for (var i in this.prompt) {
            var letter = this.prompt[i];

            if (IsVowel(letter)) {
                if (typeof(this.vowel_map[letter]) === 'undefined') {
                    this.vowel_map[letter] = 1;
                } else {
                    this.vowel_map[letter] += 1;
                } 
            } 
        }
    }

}

PrintMessage('Welcome to the calculator!');

while (true){
    var mode = GatherInput('Which calculation mode do you want? \n1) Arithmetic \n2) Vowel counting');

    if (mode == 1) {
        const operator = GatherInput('Please enter desired operator. (Enter q to quit)');
        const operands = GatherInput('Please enter space-separated integers');

        PrintMessage(Calculate(ParseInputString(operands, operator))); 
    } else {
        const string_to_count = GatherInput('Please enter a phrase:');
        vc = new VowelCount(string_to_count);
        vc.count();
        vc.show();
    }
}