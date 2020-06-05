/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "Джокер"
    ]
};


const promoAdw = document.querySelectorAll('.promo__adv img');
const promo = document.querySelector('.promo__bg');
const promoContent = promo.querySelector('.promo__genre');
const listFilm = document.querySelector('.promo__interactive-list');
const listFilmsEl = document.querySelectorAll('.promo__interactive-item');
// 1)
promoAdw.forEach(img => {
    img.remove();
});

// 2)
promoContent.textContent = 'драма';

// 3)
promo.style.cssText = 'background: url(img/bg.jpg) no-repeat;';

// 4)
listFilm.innerHTML = '';
movieDB.movies.sort();
movieDB.movies.forEach((el,index) => {
    const li = document.createElement('li');
        li.textContent = `${index+1}. ${movieDB.movies[index]}`;
        li.classList.add('promo__interactive-item');
        listFilm.append(li);
});
