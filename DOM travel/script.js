// console.log(document.body);
// console.log(document.documentElement); // choose all child of element
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);


// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);
// console.log(document.querySelector('#current').parentElement.parentElement);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// .childNodes  -- не дозволяє вибрати тіки елементи тому є спосіб

for ( let  node of document.body.childNodes) {
    if (node.nodeName === '#text') {
        continue;
    }
    console.log(node);
}