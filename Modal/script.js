// REFACTORING CODE

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');

const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
}

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden')
}

for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', openModal)
}

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
}); 




// BEFORE REFACTORING

/* 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
const buttonCloseModal = document.querySelector('.close-modal');


for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', () => {
        overlay.classList.remove('hidden');
        modal.classList.remove('hidden');
    })
}

buttonCloseModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal()
    }
}); */