export default async function GetGif(name) {
    try {
        const body = document.querySelector("body");
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=qfDuH4FSqm8RzfieCR0Et6jrPkTd7tiK&s=' + GetGoodGifPrompt(name),{mode:"cors"});
        const data = await response.json();
        const gifUrl = data.data.images.original.url;
        body.style = 'background-image: url(' + gifUrl +' );'
    } catch(err) {
        console.log('Gif not found!');
    }

}

function GetGoodGifPrompt(condition)
{
    condition = condition.toLowerCase();
    if(condition.includes("partly cloudy") || condition.includes('overcast')) return "Cielo Nublado";
    if(condition.includes("rain")) return 'rain drops';
    if (condition.includes("sunny") || condition.includes("clear")) return "sunrise";
}