let display = document.getElementById('display');
let operand1 = '';
let operand2 = '';
let operationSymbol = '';

function appendToDisplay(value) {
    if (operationSymbol === '') {
        operand1 += value;
        display.textContent = operand1;
    } else {
        operand2 += value;
        display.textContent = operand2;
    }
}

function operation(symbol) {
    operationSymbol = symbol;
}

function calculate() {
    let result;
    switch(operationSymbol) {
        case '+':
            result = parseFloat(operand1) + parseFloat(operand2);
            break;
        case '-':
            result = parseFloat(operand1) - parseFloat(operand2);
            break;
        case '*':
            result = parseFloat(operand1) * parseFloat(operand2);
            break;
        case '/':
            result = parseFloat(operand1) / parseFloat(operand2);
            break;
    }
    display.textContent = result;
}

function clearDisplay() {
    display.textContent = '0';
    operand1 = '';
    operand2 = '';
    operationSymbol = '';
}
