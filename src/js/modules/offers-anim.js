module.exports = () => {
    const offersOutgoing = document.querySelectorAll('.offers__outgoing');

    offersOutgoing.forEach( item => {
        const offersBtn = item.querySelector('.offers__btn');
        const offersLink = item.querySelector('.offers__link')
        offersBtn.addEventListener('mouseover', e => {
            e.stopPropagation();
            offersLink.classList.toggle('animate__heartBeat');
        });
    });
}
