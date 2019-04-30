import getBearInfo from '../src/getBearInfo.js';
const form = document.getElementById('buy-app');

//Event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const details = getBearInfo(formData);
    console.log(details);
});