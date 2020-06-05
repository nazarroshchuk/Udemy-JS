'use strict';
const box = document.querySelector('.box');
const btn = document.querySelector('button');

// бути обережним з використанням цих методів
// коли активний стиль box-sizing: border-box;

// показує розміри едементу тіки з padding
// не враховує margin i scroll
// const width = box.clientWidth;
// const height = box.clientHeight;


// дає повний розмір елемента по box-model
const width = box.offsetWidth;
const height = box.offsetHeight;


console.log(height);
console.log(width);

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

// JS рахує координати тіки від лівої сторони
console.log(box.getBoundingClientRect());
console.log(box.getBoundingClientRect().top);

// можна читати всі застосовані стилі до елемента по факту в даний момент

const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);

console.log(document.documentElement.scrollTop);
console.log(document.documentElement);



window.scrollBy(0,400); // scroll на 400px відносто поточної позиції
window.scrollTo(0,400); // scroll на 400px відносто всієї сторінки