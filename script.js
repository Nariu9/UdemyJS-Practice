'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Один из последних просмотренных фильмов ?', ''),
        b = prompt('На сколько оцените его ?', '');
    personalMovieDB.movies[a] = b;
}

// const a = prompt('Один из последних просмотренных фильмов ?', ''),
//     b = prompt('На сколько оцените его ?', ''),
//     c = prompt('Один из последних просмотренных фильмов ?', ''),
//     d = prompt('На сколько оцените его ?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

console.log(personalMovieDB);