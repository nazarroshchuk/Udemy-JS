'use strict';

const box = document.getElementById('box');

const buttons = document.getElementsByName('button');
// got psuedo array;

buttons[2];
// got 1 element of array;

const circles = document.getElementsByClassName('circle');

const hearts = document.querySelectorAll('.heart'); //'#hearts','hearts'
// got pseudo array;
//make array with method forEach();

const oneHeart = document.querySelector('.heart');
// we got first element in list;

// style

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: red; width: 500px;';

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'orange';

////  create Element

const div = document.createElement('div');
const text = document.createTextNode('Here was I');


// create Class
div.classList.add('black');
div.classList.remove('black');

// add Elements
document.body.append(div);  // last child
document.body.prepend(div);  // first child

document.querySelector('.wrapper').append(div);

hearts[0].before(div); // add before hearts[0]
hearts[1].after(div); // add after hearts[0]

circles[0].remove();

hearts[3].replaceWith(circles[0]); // replase hearts[3] on circles[0];


// add Text
div.innerHTML = '<h1>Hello World</h1>';// will read with browser how HTML code

div.textContent = 'Hello'; // only text


// add text as HTML code
div.insertAdjacentHTML('beforeBegine', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterBegine', '<h2>Hello</h2>');
div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');




