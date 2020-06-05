const car = {
    model: 'Audi',
    color: 'red',
    engine: 'v6',
    about: function() {
       console.log(`My car is ${this.model}, it has color ${this.color}`);
    }
};

// const newCar = Object.create(car);
// newCar.model = 'BMW';

const newCar = {};
Object.setPrototypeOf(newCar, car);
newCar.model = 'Lincoln';
newCar.color = 'black';

console.log(car.about());
console.log(newCar.about());

// ми використали car як прототип для нового обєкту mewCar;