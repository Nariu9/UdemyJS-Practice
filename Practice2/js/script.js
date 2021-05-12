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
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelector('.promo__adv'),
    advImg = adv.querySelectorAll('img'),
    genre = document.querySelector('.promo__genre'),
    promoBg = document.querySelector('.promo__bg'),
    movieList = document.querySelectorAll('.promo__interactive-item');

const sortedMovies = movieDB.movies.sort();

advImg.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

promoBg.style.background = "url('../img/bg.jpg')";

movieList.forEach((item, i) => {
    item.textContent = `${i+1} ${sortedMovies[i]}`;
});

console.log(movieList);