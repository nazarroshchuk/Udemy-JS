function User(name, id) {
    this.name = name;
    this.id = id;
    this. human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}, your age is ${this.id}`);
    };
}

const nazar = new User('Nazar', 33),
    alex = new User('Alex', 37);
// коли ми створюємо змінну на основу ф=ї констуктор, ми отримаємо обєкт
// який буде складатися з переданих даних, також включатиме в себе дефолтні значення і методи
console.log(nazar.hello());
console.log(alex.hello());

// можна доповнити конструктор методом через prototype
User.prototype.exit = function() {
    console.log(`User ${this.name} exited`);
};
console.log(nazar.exit());

// у ES6 є покращена версія ф=ї конструктора Class


