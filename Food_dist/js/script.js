// window.addEventListener('DOMContentLoaded', () => {

//     const tabs = document.querySelectorAll('.tabheader__item'),
//         tabsContent = document.querySelectorAll('.tabcontent'),
//         tabsParent = document.querySelector('.tabheader__items');

//     function hideTabContent() {
//         tabsContent.forEach((item) => {
//             item.classList.add('hide');
//             item.classList.remove('showe','fade');
//         });
//         tabs.forEach((tab) => {
//             tab.classList.remove('tabheader__item_active');
//         });
//     }

//     function showeTabContent(i = 0) {
//         tabsContent[i].classList.add('show', 'fade');
//         tabsContent[i].classList.remove('hide');
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showeTabContent();


//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((el, index) => {
//                 if (target == el) {
//                     hideTabContent();
//                     showeTabContent(index);
//                 }
//             });
//         }
//     });














// });

window.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('.tabcontent');
    const tabheaderItems = document.querySelector('.tabheader__items');
    const tabheaderElem = document.querySelectorAll('.tabheader__item');

function hideTabContent() {
    tabs.forEach((el)=> {
        el.classList.add('hide');
        el.classList.remove('show', 'fade');
    });
    tabheaderElem.forEach((el) => {
        el.classList.remove('tabheader__item_active');
    });
}
function showeTabContent(i = 0) {
    tabs[i].classList.add('show','fade');
    tabs[i].classList.remove('hide');
    tabheaderElem[i].classList.add('tabheader__item_active');
}

tabheaderItems.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
        tabheaderElem.forEach((el, index) => {
            if (target == el) {
                hideTabContent();
                showeTabContent(index);
            }
        });
    }
});

hideTabContent();
showeTabContent();
});