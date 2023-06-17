const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', openModal);
};

buttonCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', (event) => {
    console.log(event.key);

    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})
