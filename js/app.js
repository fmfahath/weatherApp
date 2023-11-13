const apiKey = "3216a92ffcaa9289d6d7efe46efb895a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const city = "&q=eravur";
const fullUrl = apiUrl + city + `&appid=${apiKey}`;

async function checkWeather(){
    const response = await fetch(fullUrl);
    var data = await response.json();
    console.log(data);
}

checkWeather();