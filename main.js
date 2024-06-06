numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');
evaluate = document.querySelector('.evaluate');
clear = document.querySelector('.clear');
display = document.querySelector('.displayContent');

let value1 = 0;
let value2 = 0;
let operatorVal = '';
let valEntered = false;

numbers.forEach(function(button) {
    button.addEventListener('click', function() {
      if (valEntered == false) {
       value1 += (button.innerText);
       display.innerText += button.innerText;
       console.log(value1);
      } else if (valEntered == true) {
        value2 += (button.innerText);
        display.innerText += (button.innerText);
        console.log(value2);
      }
    });
  });

//event listeners for operators.
operators.forEach(function(operator) {
  operator.addEventListener('click', function() {
    valEntered = true;
    display.innerText = '';
    //create event listener for value2
    operatorVal = operator;
    console.log(operatorVal.innerText);
      });
    });
 
evaluate.addEventListener('click', () => {
  operate(value1, value2, operatorVal);
});

clear.addEventListener('click', () => {
  clearCalculator();
})

function clearCalculator() {
  display.innerText = '';
  value1 = 0;
  value2 = 0;
  valEntered = false;
  operatorVal = '';
}
//if statements to check operator
function operate(value1, value2, operator) {
  value1 = parseFloat(value1);
  value2 = parseFloat(value2);

  if (operator.innerText ==='*') {
    value1 = (value1 * value2);
  } else if (operator.innerText ==='/') {
    value1 = (value1/value2);
  } else if (operator.innerText ==='-') {
    value1 = (value1value2);
  } else if (operator.innerText ==='+') {
    value1 = (value1+value2);}

  display.innerText = value1;
  value2 = 0;
  };