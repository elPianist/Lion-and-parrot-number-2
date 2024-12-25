const lion = document.getElementById('lion');
const parrot = document.getElementById('parrot');
const button = document.getElementById('action-button');

let isEaten = false;

button.addEventListener('click', () => {
    if (!isEaten) {
        parrot.style.display = 'none';
        lion.src = 'images/lion_eating.png'; // Path to the "lion eating" image
        button.textContent = 'Reset';
        isEaten = true;
    } else {
        parrot.style.display = 'inline';
        lion.src = 'images/lion.png'; // Path to the original lion image
        button.textContent = 'Feed the Lion';
        isEaten = false;
    }
});