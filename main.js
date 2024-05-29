const values = document.querySelectorAll('.button');
const clearBtn = document.querySelector('.clear');
let valueStack = 0;

values.forEach(value => value.addEventListener('click', () => {
    valueStack += value.innerHTML;
    console.log(valueStack);
}));