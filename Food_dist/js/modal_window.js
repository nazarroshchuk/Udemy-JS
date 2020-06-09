const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('[data-modal]');
const btnCloseModal = document.querySelector('[data-close]');


function closeModal() {
    modal.style.display = 'none';
    // modal.classList.add('hide');
    // modal.classList.remove('show');
    document.body.style.overflow = 'visible';
}

function openModal() {
    modal.style.display = 'block';
    // modal.classList.add('show');
    // modal.classList.remove('hide');
    // але при появі модального вікна ми можемо чкролити сайт
    // щоб запобігти цьому
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
}

btnOpenModal.forEach((btn) => {
    btn.addEventListener('click', openModal);
});
btnCloseModal.addEventListener('click', closeModal);

// закриває модальне вікно коли клікаєм поза ним
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal(); 
    }
});

document.addEventListener('keydown', (e)=> { 
    if (e.code === 'Escape') { // можна добавити умову && modal.classList.contains('show');
        closeModal();
    }
});


// поява модального вікна через певний час або піля  скролу

const modalTimerId = setTimeout(openModal, 3000);

function showModalByScroll() {
    // прокрутка і контент який прокрутили і порівнюєм зі всією довжиною сайту
    if (window.pageYOffset + document.documentElement.clientHeight >= 
        document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
}

window.addEventListener('scroll', showModalByScroll);

