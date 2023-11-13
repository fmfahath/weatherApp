//fetching data from  API
const apiKey = "3216a92ffcaa9289d6d7efe46efb895a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    // console.log(data);

    //display fetched data
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";    
}

checkWeather(city);