const button = document.querySelector('.card-btn');
const card = document.querySelector('.card');



button.addEventListener('click', () => {
    card.classList.toggle('change');
});