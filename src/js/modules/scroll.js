module.exports = () => {
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
}
