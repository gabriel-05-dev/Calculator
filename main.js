let number1 = 0;
let number2 = 0;
let operator = '';


function addition(number_1, number_2) {
    return number_1+number_2;
}

function subtraction(number_1, number_2) {
    return number_1-number_2;
}

function multiply(number_1, number_2) {
    return number_1*number_2;
}

function divide(number_1, number_2) {
    return number_1/number_2;
}

function operate(number_1, number_2, operator) {
    if (operator == '+') {
        addition(number1,number2)
    } else if (operator == '-')  {
        subtraction(number1, number2)
    } else if (operator == '*') {
        multiply(number1, number2)
    } else if (operator == '/') {
        divide(number1, number2)
    }
}