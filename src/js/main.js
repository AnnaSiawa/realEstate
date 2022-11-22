import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

let vanillaTabs = require('./modules/vanilla-tabs');
let scrollHeader = require('./modules/scroll');

window.onload = function () {
    const iconMenu = document.querySelector('.menu__icon');
    const bodyMenu = document.querySelector('.mobile-menu');
    const menuCell = document.querySelector('.mobile-menu-cell');

    const toggleMenu = () => {
        document.body.classList.toggle('lock');
        document.getElementsByTagName('html')[0].classList.toggle('lock');
        iconMenu.classList.toggle('active');
        bodyMenu.classList.toggle('active');
        menuCell.classList.toggle('active');
    }

    if (iconMenu) {
        iconMenu.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener('click', e => {
            let target = e.target;
            let itsMenu = target === bodyMenu || bodyMenu.contains(target);
            let itsIconMenu = target === iconMenu;
            let menuIsActive = bodyMenu.classList.contains('active');
            if (!itsMenu && !itsIconMenu && menuIsActive) {
                bodyMenu.classList.toggle('active');
                iconMenu.classList.toggle('active');
            }
        });
    }

    const swiper = new Swiper('.product-swiper', {
        navigation: {
            nextEl: '.swiperProduct-button-next',
            prevEl: '.swiperProduct-button-prev'
        },
        watchOverflow: true,
        loop: true,
        slidesPerGroup: 1,
        breakpoints: {
            1620: {
                slidesPerView: 5,
                spaceBetween: 60,
            },
            1380: {
                slidesPerView: 4,
                spaceBetween: 60,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 60,
            },
            768: {
                centeredSlides: false,
                slidesPerView: 2,
                spaceBetween: 60,
            },
            300: {
                centeredSlides: true,
                slidesPerView: 1,
                spaceBetween: 60,
            }
        }
    });

    const tabs = new vanillaTabs({
        'selector': '#tabs-a',
        'type': 'horizontal',
        'responsiveBreak': 1919,
        'activeIndex': 0
    });

    scrollHeader();
}
