// спосіб назначення Event
// 1) тег атрибута HTML onclick = 'eventFunc()';

// 2) використовуєм властивості DOM для події
const btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      btns = document.querySelectorAll('button');
// btn.oncklick = function() {
//     alert('Click');
// };

// btn.oncklick = function() {
//     alert('Second click');
// };
// у випадку призначення двох подій на один і той самий елемент
// спрацьовуватиме лише остання подія
// також в такому вигляді ми не можемо видалити подію в майбутньому

// 3)
// btn.addEventListener('click', () => {
//     alert('Click');
// });
// btn.addEventListener('click', () => {
//     alert('Second click');
// });
// в такому записі пожії будуть виконуватись в порядку черги 
// незалежно він інших подій

// обєкт події Event / e/ ev
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target); // отримуємо елемент на якому клікнули
//     e.target.remove(); // видаляє елемент при кліку
// });

////

const deleteElement = (e) => {
    console.log(e.target); // currentTarget
    console.log(e.type);
    console.log('button');
};

btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);
overlay.addEventListener('click', (e) => {
    console.log(e.target);
    console.log(e.type);
    console.log('div');
});
// вспливання події - це коли обробщик події спочатку спрацювує у самому вкладеному елементі
// і тоді йде до верху на батьківські елементи


// відміна стандартної поведінки елемента

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // вдіміняє дефолтну поведінку
    console.log(e.target);
});

// навішати обробщик на псевдомасив forEach

btns.forEach( btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});
// обробник подій також приймає третє значення/аргумент у вигляді {}