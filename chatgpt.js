
"use strict"

let weather = [
    {
        city: "Arizona",
        temperature: 90,
        forecast: "sunny"  
    },
    {
        city: "california",
        temperature: 75,
        forecast: "clear skies"
    }

];
function displayForecast(Weather){
    let theWeather = (` The weather in ${Weather.city}: ${Weather.forecast}, ${Weather.temperature}°F`);
    document.getElementById("theweather").innerHTML = `${theWeather}`;
}


