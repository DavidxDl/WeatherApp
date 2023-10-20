
export default async function GetWeather(city)
{
    if (!city) return;
    try {
        const response = await fetch('http://api.weatherapi.com/v1/current.json?key=cb3fb464a54f4aaf9cd32643231910&q=' + city)   
        const data = await response.json();
        console.log(data);
        return data;
    } catch(err) {
        throw new Error(err);
    }
    
}