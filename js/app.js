//fetching data from  API
const apiKey = "3216a92ffcaa9289d6d7efe46efb895a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const city = "&q=eravur";
const fullUrl = apiUrl + city + `&appid=${apiKey}`;

async function checkWeather(){
    const response = await fetch(fullUrl);
    var data = await response.json();
    console.log(data);

    //display fetched data
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";    
}

checkWeather();