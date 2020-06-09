// контекст виклику функції -- це те що оточує ф=ю і в яких умовах вона викликається

function showThis() {
    console.log(this); // залежно чи включений 'use strict' буде показувати різний контекст
}
// 'use strict' --> undefined
// not 'use strict'  --> window

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return this.a + this.b;
    } 
    console.log(sum());
}
// не важливо де запускається функція, навіть якщо в середині іншої ф=ї
// її констекст не буде змінюватись і буде  = window / undefined

showThis(4,5);

cons obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // тут контекстом буде обєкт на якому викликається цей метод
        function foo() {
            console.log(this); // в цьому випадку контекст загубиться
        }
        foo();
    }
};


function User(name, id) {
    this.name = name;
    this.id = id;
    this. human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}, your age is ${this.id}`);
    };
}



function sayName(surname, id) {
    console.log(this);
    console.log(this.name + surname + id);
}

const user = {
    name: ' Nazar'
};

sayName.call(user, 'Roshchuk', 44); // бере функцію і міняє її контекст один раз
sayName.apply(user, ['Roshchuk', 44]);

function count(num) {
    return this * num;
}

const double = count.bind(2); // створює нову функцію з жостко привязаним контекстом
console.log(double(3));

// 1) звичайна функція: this = window, якщо 'use strict' = undefined
// 2) контекст у методів обєктів буде сам об'єкт
// 3) у ф=ї конструктор this завжди буде мати контекст обєкта який ми будем створювати
// this в конструкторах і класах - це новий екземпляр об'єкта
// 4)  ручна привязка контексту this: call, apply, bind
// 5) в обробщиках подій коли ми використовуєм як колбек звичайну ф=ю
// контекстом this буде елемент на котрий навішана подія
// у випадку срілочної ф=ї this буде втрачати контекст елемента


// практика
// теоретично у нас є кнопка
const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    console.log(this); // this => btn = event.target
});

// якщо колбек ф=я у EventListener не є стрілочна то контекстом буде елемент на контий клікнули
// стрілочна функія завжди бере this у батьків
const object = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            console.log(this.num);
        };
        say();
    }
};

object.sayNumber();


const doubl = a =>  a * 2; // якщо ф=я поміщається в одну строку і має 1 аргумент
