$(document).ready(function(){
    //apiKey from OpenWeatherMap
    let apiKey = "dc9a13c8fc4afc874882b2c3a86a4300",

    //declaring the variables
    const listofCities = $(".listOfCities");
    const mainCity = $("h3.searchedCity");
    const temp = $(".temp");
    const humidity = $(".humidity");
    const windSpeed = $(".windSpeed");
    const uvIndex = $(".uvIndex");


});

fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "units=metric&appid=" + apiKey);
    .then((response) => response.JSON());
    .then((data) => this.displayWeather(data));
    

displayWeather= function(data) {
    document.querySelector(".city").innerText = "Weather in " + name; 
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "windSpeed: " + speed + "mph";
};


document.querySelector(".search-button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});