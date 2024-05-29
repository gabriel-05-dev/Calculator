numbers = document.querySelectorAll('.number');
operators = document.querySelectorAll('.operator');
evaluate = document.querySelector('.evaluate');

display = document.querySelector('.displayContent');
let value1 = 0;
let value2 = 0;
let operator = '';

numbers.forEach(function(button) {
    button.addEventListener("click", function() {
    display.innerText += button.innerText;
    value1 = parseFloat(display.innerText);
    });
  });


//event listeners for operators.
operators.forEach(function(operator) {
  operator.addEventListener("click", function() {
    console.log(operator.innerText);
  });
});

evaluate.addEventListener('click', () => {
  operate(value1, value2, operator);
});



//if statements to check operator
function operate(value1, value2, operator) {
  console.log(operator);
};