window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2020-06-11'; //Дата окончания акции

    function getTimeRemaining(endtime) { //Создаём функцию для получения времени до конца акции
        const t = Date.parse(endtime) - Date.parse(new Date()), //Получаем разницу между датой окончания акции и текущей датой 
            days = Math.floor(t / (24 * 60 * 60 * 100)), //Вычисляем сколько это дней
            hours = Math.floor((t / (60 * 60 * 1000)) % 24), // Вычисляем часы
            minutes = Math.floor((t / 60 / 1000) % 60), //Вычисляем минуты
            seconds = Math.floor((t / 1000) % 60); // Вычисляем секунды

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
});