import getBearInfo from '../src/getBearInfo.js';
import bearDetailsApi from './bearDetails-api.js';


//Referencing the form node buy-app
const form = document.getElementById('buy-app');

//Event listener
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const details = getBearInfo(formData);
    bearDetailsApi.save(details);
});