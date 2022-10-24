const input = document.querySelector('.nick');
const button = document.querySelector('.start');
const form = document.querySelector('.form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = '../game/game.html'
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
