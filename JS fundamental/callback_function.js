function first() {
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

// callback -- це функція яка повинна бути виконана 
// після того як інша функція завершила своє виконання

function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

learnJS('JavaScript', function(){
    console.log('I am handsome!');
});

function done(){
    console.log('I am handsome!');
}

learnJS('CSS', done);

// callback дає нам гарантію шо цей код не буде виконаний 
// доки попередній не закінчить своє виконання