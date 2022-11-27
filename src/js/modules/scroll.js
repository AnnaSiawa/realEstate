module.exports = () => {

    //анимация header при сколе страницы
    const headerScroll = document.querySelector('.header_middle');
    const menuLink = headerScroll.querySelectorAll('.desktop-menu__link');

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

    // прокрутка до выбранного в меню блока
    const menuItems = document.querySelectorAll('.contacts-item[data-goto]');

    menuItems.forEach(item => {
        item.addEventListener('click', onItemClick);
    });

    function onItemClick(e) {
        const menuItem = e.currentTarget;
        if (menuItem.dataset.goto && document.querySelector(menuItem.dataset.goto)) {
            const gotoBlock = document.querySelector(menuItem.dataset.goto);
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;
            window.scrollTo({
                top: gotoBlockValue - 100,
                left: 0,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

