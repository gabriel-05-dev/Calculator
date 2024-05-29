numbers = document.querySelectorAll('.number');
display = document.querySelector('.displayContent');
let value1 = 0;

numbers.forEach(function(button) {
    button.addEventListener("click", function() {
    value1 += button.innerText;
    display.innerText += button.innerText;
    });
  });
