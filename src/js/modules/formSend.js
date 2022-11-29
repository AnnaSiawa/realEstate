module.exports = () => {
    const popUp = document.querySelector('.pop-up');
    const popUpInner = document.querySelector('.pop-up__inner');
    const btnPopUp = document.querySelector('#btn-pop-up');
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    let newTitle = document.createElement('div');
    newTitle.className = 'pop-up__title';
    popUpInner.prepend(newTitle);

    btnPopUp.addEventListener('click', () => {
        newTitle.innerHTML = '';
        popUp.classList.remove('_active');
    });

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                newTitle.innerHTML = result.message;
                popUp.classList.add('_active');
                form.reset();
                form.classList.remove('_sending');
            } else {
                newTitle.innerHTML = 'Ошибка';
                popUp.classList.add('_active');
                form.classList.remove('_sending');
            }
        } else {
            newTitle.innerHTML = 'Запоните обязательные поля';
            popUp.classList.add('_active');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        let reqFields = input.parentElement.querySelectorAll('.req-field');
        reqFields.forEach(item => {
            item.classList.add('_error');
        })

        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        let reqFields = input.parentElement.querySelectorAll('.req-field');
        reqFields.forEach(item => {
            item.classList.remove('_error');
        })

        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
}
