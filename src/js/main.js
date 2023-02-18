import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

let scrollHeader = require('./modules/scroll');
let formSend = require('./modules/formSend');
let parallax = require('./modules/parallax');
let offersAnim = require('./modules/offers-anim');

window.onload = function () {
    scrollHeader();
    formSend();
    parallax();
    offersAnim();

    new Swiper('.success-slider', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            //буллеты
            clickable: true,
        },
        //отключение функционала, если слайдов меньше, чем надо
        watchOverflow: true,
        //бесконечный слайдер
        loop: false,
        //количество сдайдов на странице
        breakpoints: {
            //ширина экрана >= 960px
            1500: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            650: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
            }
        }
    });
}
