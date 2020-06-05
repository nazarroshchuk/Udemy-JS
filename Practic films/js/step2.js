/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    // Возьмите свой код из предыдущей практики
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
    
    
    const sortArray = (arr) => {
        arr.sort();
    };

   const deleteAdw = (adv) => {
        adv.forEach(img => {
            img.remove();
        });
    };
   

    // 2)
    promoContent.textContent = 'драма';

    // 3)
    promo.style.cssText = 'background: url(img/bg.jpg) no-repeat;';



    
    

    // 1)

    const form = document.querySelector('.add');
    const addedFilm = document.querySelector('.adding__input');
    const deleteListEl = document.querySelectorAll('div.delete');
    const checkbox = form.querySelector('[type="checkbox"]');
    const bntSend = form.lastElementChild;

   
   
    function renderListOfFilms(films, parent) {
        listFilm.innerHTML = '';
        sortArray(films);

        films.forEach((el,index) => {
            const li = document.createElement('li');
                li.textContent = `${index+1}. ${films[index]}`;
                li.classList.add('promo__interactive-item');
                li.classList.add('delete');
            const span = document.createElement('span');
                li.append(span);
            const divDelete = document.createElement('div');
                divDelete.classList.add('delete');
                li.append(divDelete);
                parent.append(li);
        });

        document.querySelectorAll('div.delete').forEach((btn, index) => {

            btn.addEventListener('click',() => {
                btn.parentElement.remove();
                console.log(movieDB.movies);
                movieDB.movies.splice(index,1);
                renderListOfFilms(movieDB.movies, listFilm);
            });
        });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let newFilm = addedFilm.value;
        const favorite = checkbox.checked;

        if (favorite) {
            console.log('You add new film!');
        }

        if (newFilm === '') {
            addedFilm.placeholder = 'Enter name of film!';
            addedFilm.classList.add('--change-color');
        } else {
            if (newFilm > 21) {
                newFilm = `${newFilm.substr(0,22)}...`;
            }
            movieDB.movies.push(newFilm);
            renderListOfFilms(movieDB.movies, listFilm);
            e.target.reset();
            addedFilm.placeholder = 'Что уже посмотрено...?';
            addedFilm.classList.remove('--change-color');
        }
    });
    renderListOfFilms(movieDB.movies, listFilm);
    deleteAdw(promoAdw);
});


