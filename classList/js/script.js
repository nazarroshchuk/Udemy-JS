const btns = document.querySelectorAll('button');

// // console.log(btns[0].classList.length); // кількість класів (2)
// console.log(btns[0].classList.item(0)); // blue
// console.log(btns[0].classList.add('red', 'someClass'));
// console.log(btns[0].classList.remove('blue', 'someClass'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[2].classList.contains('red')) {
//     console.log('red');
// }
// // return true || false

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    // btns[1].classList.toggle('red'); // alternative
});
// при кліку на першу кнопку ми перевіряєм наявність класу red 
// якщо його немає ми його додаємо
// якщо він є то ми його видаляємо

// console.log(btns[0].className()); // стрий метод і вже не використовується
// виводить строку всіх класів

// ## делегування події

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e)=> {
    console.dir(e.target);
    if (e.target && e.target.tegName == 'BUTTON') {
        console.log('HEllo');
    }
    if(e.target && e.target.classList.contains('blue')) {
        console.log('It is blue button');
    }
    if (e.target && e.target.matches('button.red')) { // умова спрацює лише на кнопці з даним класом і тегом
        console.log('HEllo');
    }
});

// навісим подію на масив кнопок
btns.addEventListener('click', () => {
    console.log('Hello');
});
// в цьому випадку подія не спрацює на кнопку яку ми згенеруємо нище

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);

// а при делегуванні ## все буде працювати




