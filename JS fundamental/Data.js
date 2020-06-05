const now = new Date();
// в аpгументи можна передавати як строку так і аргументи
// const now = new Date('2020-06-05');
// const now = new Date(2020, 6, 5, 20');

console.log(now); // 2020-06-05T12:05:45.658Z

// отримання компонентів Data

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getSeconds());
console.log(now.getMilliseconds());

console.log(now.getDay()); // нумерація починається  з Неділі

console.log(now.getHours());
console.log(now.getUTCHours());

console.log(now.getTimezoneOffset()); // різниця мій 0 часовим поясом

console.log(now.getTime());

// set Data

console.log(now.setHours(18, 40)); // hours, minutes


const now = new Date('2020-06-05');
    new Date.parse('2020-06-05'); // два однакових записи

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Done for ${end - start} milliseconds`);