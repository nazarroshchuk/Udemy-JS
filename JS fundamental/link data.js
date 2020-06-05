let a = 5;
let b = a;
    b = b +5; //10
// при створенні копії примітивних типів даних: String, Number 
// створюється їх незалежна копія і код працює за такою логікою

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;

console.log(obj);
console.log(copy); // отримаєм однакове значення
// при копіюванні обєктів ми лише створюєм посилання на оригінал
// при зміні копії буде змінюватись оригінал

// способи які дозволяють створити незалежну копію

function copyObj(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const number = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumber = copyObj(number);
newNumber.a = 10;


console.log(newNumber);
console.log(number); // виведе два різних обєкти

newNumber.c.x = 10;
console.log(newNumber);
console.log(number); // змінить кладений обєкт і в оригіналі

//даний спосіб працює лише з поверхневими копіями, лише тіки на 
// верхньому рівні вкладеності 

// Object.assign()

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(number, add)); 
// створили незалежну поверхневу копію обєктів, не враховуючи вкладених

const clone = Object.assign({},add);
    clone.d = 20;
console.log(add);
console.log(clone);
// отримаєм два незалежних обєкта

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'abracadabra';
console.log(newArray);
console.log(oldArray);
// також створили поверхневі копії

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet); 
// спред оператор ... 'розгорне всі масиви' і скопіює їх у новий


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [4, 8, 9];

log(...num);
// передасть масив по елементах і функція отримає їх по одному


const array = ['a', 'b'];

const newAarray = [...array];

/////////////
const q = {
    one: 1,
    two: 2
};

const newObject = {...q};
