/* Задания на урок:
1) Удалить все рекламные блоки со страницы (правая часть сайта)
2) Изменить жанр фильма, поменять "комедия" на "драма"
3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS
4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 
5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),

        // submitBtn = document.querySelector('.add').lastElementChild,
        // input = document.querySelector('.add input');

        adv.forEach(item => {
            item.remove();
        });

    genre.textContent = 'драма';

    poster.style.backgroundImage = "url('img/bg.jpg')";

    movieList.innerHTML = "";

    movieDB.movies.sort();

    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item} 
            <div class="delete"></div>
        </li>
        `;
    });

    submitBtn.addEventListener('click', e => {
        e.preventDefault();
        movieDB.movies = input.value;
    });


    console.log(movieDB.movies);
});