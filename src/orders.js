import bearDetailsApi from './bearDetails-api.js';

const bearName = document.getElementById('full-name');
const age = document.getElementById('age');
const accessories = document.getElementById('accessories');
const mood = document.getElementById('mood');
const color = document.getElementById('color');
const background = document.getElementById('background');

//get the applicant name
const searchParams = new URLSearchParams(window.location.search);
const name = searchParams.get('name');

const bear = bearDetailsApi.get(name);

if(!bear) {
    window.location = './';
}

bearName.textContent = bear.name;
age.textContent = bear.age;
accessories.textContent = bear.accessories;
if(bear.accessories) {
    accessories.textContent = bear.accessories.join(', ');
}
mood.textContent = bear.mood;
color.textContent = bear.color;
background.textContent = bear.background;