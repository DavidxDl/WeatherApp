import './style/style.css';
import GetGif from "./GetGif";
import GetWeather from "./GetWeather";
import CreateCard from "./CreateCard";
import headerImage from './imgs/headerImg.jpg';
import logoImage from './imgs/UmbrellaLogo.png';
const body = document.querySelector('body');
const btn = document.getElementById('btn');
const search = document.getElementById('searchbar');
const header = document.querySelector('.header');

document.getElementById("logoImg").src = logoImage;
let cardBackground;

console.log('hey!');

btn.addEventListener('click', () => {
    if (!search.value) return;

    GetWeather(search.value)

    .then((weather) => {
        const countryName = weather.location.country;
        const cityName = weather.location.name;
        const conditionText = weather.current.condition.text;
        const degreesValue = weather.current.temp_c;
        const humidity = weather.current.humidity;
        const precipitation = weather.current.precip_in;
        const wind = weather.current.wind_kph;

        GetGif('weather' + conditionText);
        CreateCard(countryName, cityName, conditionText, degreesValue, humidity, precipitation, wind);
    })
});