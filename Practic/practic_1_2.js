const numberOfFilms = prompt('Скільки фільмів ви вже подивились?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    alert(`Переглядів було доволі мало`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert(`Ви класний глядач`);
} else if (personalMovieDB.count >= 30) {
    alert(`Ви кіноман`);
} else {
    alert(`Сталася помилка`);
}
console.log(personalMovieDB);

