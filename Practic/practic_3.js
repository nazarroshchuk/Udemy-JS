let numberOfFilms;



function start() {
    numberOfFilms = prompt('Скільки фільмів ви вже подивились?','');

    while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Скільки фільмів ви вже подивились?','');
    }

}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const lastFilm = prompt('Один з останніх переглянутих фільмів?','');
        const estimateFilms = prompt('Як ви його оціните?','');
        if (lastFilm && estimateFilms 
            && lastFilm.length < 50 
            && estimateFilms.length < 50 
            && lastFilm !== null 
            && estimateFilms !== null) {
            personalMovieDB.movies[lastFilm] = estimateFilms; 
        } else { 
            i--;
            alert(`Try one more time`);
        }
        
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert(`Переглядів було доволі мало`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert(`Ви класний глядач`);
    } else if (personalMovieDB.count >= 30) {
        alert(`Ви кіноман`);
    } else {
        alert(`Сталася помилка`);
    }
}
detectPersonalLevel();

function showMyBD(hidden) {
    if (hidden.privat === false) {
        console.log(hidden);
    }
}


function writeYourGenres(obj, key) {
    for (let i = 1; i < 4; i++) {
        let question = prompt(`Your favorite genre of number ${i}`);
        obj[key].push(question);
    }
}
writeYourGenres(personalMovieDB, 'genres');
showMyBD(personalMovieDB);


