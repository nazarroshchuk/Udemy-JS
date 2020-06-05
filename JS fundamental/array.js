const arr = [1, 2, 13, 6, 28];


// arr.pop(); // delete last elemetn of array
// arr.push(9); // add element in the end of arr

console.log(arr);
// ці методи використовувати не бажано, тому при додаванні елементу 
// посуваються індекси усіх елементів 
arr.shift(); // delete first elemetn of array
arr.unshift(9); // add element on front of arr

arr.sort(); // сортує все як строки

// це можна обійти за допомогою колбек функції
function compareNum(a, b) {
    return a - b;
}
arr.sort(compareNum);

console.log(arr);

// iteration array
for (let i = 0; i < arr.length;i++) {
    console.log(arr[i]);
}

for (let el of arr) {
    console.log(el);
}

arr.forEach(function(element, index, arr){
    console.log(`${index}: ${element} inside ${arr}`);
});
// break and continuous in forEach method don't work

const str = 'I like learning JavaScript';
const products = str.split(' '); // створить масив зі строки, 
// розбиває на елементи по ознаці що задамо в ''
console.log(products);
console.log(products.join(';')); // зєднає всі елементи масиву в строку 
// між елементами вставить що задано в ''
 
