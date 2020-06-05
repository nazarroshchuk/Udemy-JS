const obj = new Object();

const option = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log("Test");
    }
};
//console.log(option.name); // get value obj


console.log(Object.keys(option)); // отримуєм масив всіх ключів обєкту

console.log(Object.keys(option).length); // кількість елементів обєкту


delete option.name; // delete value obj
// console.log(option);

// iteration of object
for (let key in option) {
    if(typeof(option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Proportie ${i}, has value ${option[key][i]}`);  
        }
    } else {
        console.log(`Proportie ${key}, has value ${option[key]}`);
    }
}

// Object also can have his own methods (key: function() {...})
console.log(option.makeTest());


// destruction
const {border, bg} = option.colors;
console.log(border);

