let display = document.getElementById('display');
let currentInput = '';

function solve(value) {
    if (value === 'sin' || value === 'cos' || value === 'log') {
        currentInput += value + '(';
    } else if (value === '^') {
        currentInput += '**'; // In JS exponentiation is **
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}
function result() {
    try {
        // Add closing parenthesis  if needed
        let openParens = (currentInput.match(/\(/g) || []).length;
        let closeParens = (currentInput.match(/\)/g) || []).length;
        while (closeParens < openParens) {
            currentInput += ')';
            closeParens++;
        }

        // Replace sin, cos, log with Math functions
        let result = currentInput
            .replace(/sin\(/g, 'Math.sin(')
            .replace(/cos\(/g, 'Math.cos(')
            .replace(/log\(/g, 'Math.log10(') 

        // Evaluate the expression
        display.value = eval(result);
        currentInput = display.value; // Update currentInput with the result
    } catch (e) {
        display.value = 'Error';
        currentInput = '';
    }
}

function Clearval(){
    display.value='';
    currentInput = '';
}
