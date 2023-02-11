module.exports = () => {
    const headerScroll = document.querySelector('.header_middle');
    const menuLink = headerScroll.querySelectorAll('.desktop-menu__link');

    const iconMenu = document.querySelector('.menu__icon');
    const bodyMenu = document.querySelector('.mobile-menu');
    const menuCell = document.querySelector('.mobile-menu-cell');

    //анимация header при сколе страницы
    window.onscroll = function () {
        scrollPage();
    }

    function scrollPage() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            headerScroll.classList.add('_scroll');
            menuLink.forEach(link => {
                link.classList.add('_scroll');
            });
        } else {
            headerScroll.classList.remove('_scroll');
            menuLink.forEach(link => {
                link.classList.remove('_scroll');
            });
        }
    }

    //клик по меню-бургер
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

    function toggleMenu() {
        document.body.classList.toggle('lock');
        document.getElementsByTagName('html')[0].classList.toggle('lock');
        iconMenu.classList.toggle('active');
        bodyMenu.classList.toggle('active');
        menuCell.classList.toggle('active');
    }

    // прокрутка до выбранного в десктопном меню блока
    const menuItems = document.querySelectorAll('.contacts-item[data-goto]');
    menuItems.forEach(item => {
        item.addEventListener('click', onItemClick);
    });

    //прокрутка до выбранного в мобильном меню блока
    const mobileMenuItems = document.querySelectorAll('.mobile-menu__link[data-goto]');
    mobileMenuItems.forEach(item => {
        item.addEventListener('click', onItemClick);
    });

    // прокрутка до блока Контакты при нажатии на кнопку Связаться
    const feedbackButtons = document.querySelectorAll('button[data-goto]');
    feedbackButtons.forEach(button => {
        button.addEventListener('click', onItemClick);
    });

    function onItemClick(e) {
        const item = e.currentTarget;

        if (bodyMenu.classList.contains('active') && item.dataset.goto && document.querySelector(item.dataset.goto)) {
            iconMenu.classList.remove('active');
            bodyMenu.classList.remove('active');
            menuCell.classList.remove('active');
            document.body.classList.remove('lock');
            document.getElementsByTagName('html')[0].classList.remove('lock');
            const gotoBlock = document.querySelector(item.dataset.goto);
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue - 100,
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault();
        } else if (item.dataset.goto && document.querySelector(item.dataset.goto)) {
            const gotoBlock = document.querySelector(item.dataset.goto);
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue - 100,
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }

    // //обсервер для небоскребов
    // const scrollImations = (entries, observer) => {
    //     entries.forEach((entry) => {
    //         // анимируем, если элемент целиком попадает в отслеживаемую область
    //         if (entry.isIntersecting && entry.intersectionRatio == 1) {
    //             entry.target.classList.add('animate__bounceIn');
    //         } else {
    //             entry.target.classList.remove('animate__bounceIn');
    //         }
    //     });
    // }
    //
    // // создаём обсервер с параметрами
    // const options = {
    //     threshold: 1,
    // };
    // const observer = new IntersectionObserver(scrollImations, options);
    //
    // const boxes = document.querySelectorAll('.svg-anim');
    // boxes.forEach((box) => {
    //     observer.observe(box);
    // });
}

