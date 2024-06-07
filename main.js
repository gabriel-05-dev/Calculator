numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');
evaluate = document.querySelector('.evaluate');
clear = document.querySelector('.clear');
display = document.querySelector('.displayContent');

let value1 = 0;
let value2 = 0;
let parsedVal1 = 0;
let operatorVal = '';
let valEntered = false;

numbers.forEach(function(button) {
    button.addEventListener('click', function() {
      if (valEntered == false) {
       value1 += (button.innerText);
       display.innerText += button.innerText;
      } else if (valEntered == true) { //Verify previous value has been entered
        value2 += (button.innerText);
        display.innerText += (button.innerText); // Updates the text for the display.
      }
    });
  });



//event listeners for operators.
operators.forEach(function(operator) { //adds event listeneres for the operators.
  operator.addEventListener('click', function() {
    valEntered = true; //set val entered to True to take next input.
    display.innerText = ''; //set text to empty.
    parsedVal1 = parseFloat(value1); //parse the previous value.
    value1 = 0; //set previous value  to 0 after parse and new value to 0
    value2 = 0;
    //create event listener for value2
    operatorVal = operator; //set operator to operator chosen and log it/
      });
    });

 //evaluate button even listener, on click calls operate function
evaluate.addEventListener('click', () => {
  operate(parsedVal1, value2, operatorVal);
});

//event listener for clear btn.
clear.addEventListener('click', () => {
  clearCalculator();
})

function clearCalculator() {
  //clears the variables in the calculator for a new calculation
  display.innerText = '';
  value1 = 0;
  value2 = 0;
  parsedVal1 = 0;
  valEntered = false;
  operatorVal = '';
}
//This function operates on the parsed Value1, value2 and the operator the user
//provides following an input on the calculator.
function operate(parsedVal1, value2, operator) {
  value1 = parsedVal1;
  value2 = parseFloat(value2);
//checks to see which operator has been chosen by using the 'innertext' method.
  if (operator.innerText ==='×') {
    value1 = (value1 * value2);
  } else if (operator.innerText ==='÷') {
    value1 = (value1/value2);
  } else if (operator.innerText ==='-') {
    value1 = (value1-value2);
  } else if (operator.innerText ==='+') {
    value1 = (value1+value2);}
//set display to value calculated and set value2 to zero for new input.
  display.innerText = value1;
  value2 = 0;};