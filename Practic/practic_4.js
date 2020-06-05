let numberOfFilms;


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?','');
    
        while (personalMovieDB.count === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви вже подивились?','');
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert(`Переглядів було доволі мало`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert(`Ви класний глядач`);
        } else if (personalMovieDB.count >= 30) {
            alert(`Ви кіноман`);
        } else {
            alert(`Сталася помилка`);
        }
    },
    toggleVisibleMyDB: function() {
       personalMovieDB.privat = !personalMovieDB.privat;
    },
    showMyBD: function(hidden) {
        if (hidden.privat === false) {
            console.log(hidden.privat);
        } else {
            console.log(hidden.privat);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let question = prompt(`Your favorite genre of number ${i}`);
            if ( question !== '' && question !== null) {
                personalMovieDB.genres.push(question);
            } else {
                question = prompt(`Your favorite genre of number ${i}`);
                i--;
            }
        }
        personalMovieDB.genres.forEach((el,index) => {
            console.log(`Favoirte genre ${index + 1}  is ${el}`);
        });
    
    // alternative variant
        // let genres = prompt('Write your favorite genres through whom!');
        // for (let i = 1; i <2;i++) {
        //     if ( genres !== '' && genres !== null) {
        //         personalMovieDB.genres = genres.split(',');
        //     } else {
        //         alert('You wrote not correct format');
        //         i--;
        //     }
        // }
    }
};





