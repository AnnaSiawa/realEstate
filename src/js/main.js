import Swiper, {Navigation, Pagination} from 'swiper';
Swiper.use([Navigation, Pagination]);

let scrollHeader = require('./modules/scroll');
let formSend = require('./modules/formSend');

window.onload = function () {
    scrollHeader();
    formSend();
}
