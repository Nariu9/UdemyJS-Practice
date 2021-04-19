const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const key1 = prompt('Один из последних просмотренных фильмов ?', ''),
    value1 = prompt('На сколько оцените его ?', ''),
    key2 = prompt('Один из последних просмотренных фильмов ?', ''),
    value2 = prompt('На сколько оцените его ?', '');

personalMovieDB.movies[key1] = value1;
personalMovieDB.movies[key2] = value2;

console.log(personalMovieDB);