export default function CreateCard(Country, City, Condition, Degrees, Humidity, Precipitation, Wind)
{
    if (document.querySelector(".container")) 
        document.querySelector("main").removeChild(document.querySelector(".container"));

    const card = document.createElement("div");
    card.classList.add("container");


    const country = document.createElement("h1");
    country.innerText = `${Country}, ${City}`;

    const condition = document.createElement("h3");
    condition.innerText = `Condition: ${Condition}`; 

    const degrees = document.createElement("span");
    degrees.classList.add("degrees");
    degrees.innerText = `${Degrees}°C`;

    const emoji = document.createElement("span");
    emoji.classList.add("emoji");
    emoji.innerText = GetEmojiFromCondition(Condition);

    const humidity = document.createElement("h3");
    humidity.classList.add("humitity");
    humidity.innerText = 'Humidity: ' + Humidity + '%';

    const precipitation = document.createElement("h3");
    precipitation.classList.add ('precipitation');
    precipitation.innerText = 'Precipitation: ' + Precipitation + '%';

    const wind = document.createElement("h3");
    wind.classList.add("wind");
    wind.innerText = 'Wind: ' + Wind + 'kh/h';

    card.append(country, degrees, emoji, condition, humidity, precipitation, wind);
    document.querySelector("main").append(card);
}


function GetEmojiFromCondition(Condition)
{
    Condition = Condition.toLowerCase();
    if(Condition.includes("partly cloudy")) return '⛅';
    if(Condition.includes("rain")) return '🌧';
    if(Condition.includes("clear") || Condition.includes("sunny")) return '🌞';
    if(Condition.includes('overcast')) return '☁'
    
}

