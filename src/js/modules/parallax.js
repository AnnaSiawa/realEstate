module.exports = () => {

    //паралакс облаков
    let parallax1 = document.querySelector('.parallax1');
    let parallax2 = document.querySelector('.parallax2');

    window.addEventListener('mousemove', function (e) {
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;
        parallax1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        parallax2.style.transform = 'translate(' + x * 50 + 'px, ' + y * 50 + 'px)';
    });

    // let parallax = document.querySelectorAll('.parallax');
    // parallax.forEach(item => {
    //     window.addEventListener('mousemove', function (e) {
    //         let x = e.clientX / window.innerWidth;
    //         let y = e.clientY / window.innerHeight;
    //         item.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
    //     });
    // });

    //свет фонаря в хедере
    let lanternArr = document.querySelectorAll('.click-lantern');
    let lightLanternArr = document.querySelectorAll('.light-lantern');
    let lightLanternPath = document.querySelector('.light-lantern-path57');
    let hiddenContacts = document.querySelector('.hidden-contacts');

    lanternArr.forEach(lantern => {
        lantern.addEventListener('click', e => {
            if (hiddenContacts.classList.contains('_active')) {
                hiddenContacts.classList.remove('_active');
            } else {
                hiddenContacts.classList.add('_active');
            }
            lightLanternArr.forEach(lightLantern => {
                lightLantern.classList.toggle('_active');
            });
        });
    });

    lightLanternPath.addEventListener('click', e => {
        lightLanternArr.forEach(lightLantern => {
            lightLantern.classList.remove('_active');
            hiddenContacts.classList.remove('_active');
        });
    })

    //движение фонарем
    let lampSvg = document.querySelector('.lamp-svg');
    let timerLamp = setInterval(() => {
        lampSvg.classList.toggle('animate__headShake');
        hiddenContacts.classList.toggle('animate__headShake');
    }, 2500);
}
