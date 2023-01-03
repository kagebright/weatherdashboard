$(document).ready(function() {
    //apiKey from OpenWeatherMap
    const apiKey = "dc9a13c8fc4afc874882b2c3a86a4300";
  
    //declaring the variables
    const listofCities = $(".listOfCities");
    const mainCity = $("h3.searchedCity");
    const temp = $(".temp");
    const humidity = $(".humidity");
    const windSpeed = $(".windSpeed");
    const uvIndex = $(".uvIndex");
  
    //search function
    function search() {
      const city = document.querySelector("#inputCity").value;
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
        .then(response => response.json())
        .then(data => displayWeather(data));
    }
  
    //display weather function
    function displayWeather(data) {
      mainCity.text("City: " + data.name);
      temp.text("Temperature: " + data.main.temp + "°F");
      humidity.text("Humidity: " + data.main.humidity + "%");
      windSpeed.text("Wind Speed: " + data.wind.speed + "mph");
    }
  
    //event listener for search button
    document.querySelector("#searchBtn").addEventListener("click", function() {
      search();
    });
  
    //event listener for enter key press
    document.querySelector("#inputCity").addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        search();
      }
    });
  
    //event listener for clear button
    document.querySelector(".clearBtn").addEventListener("click", function() {
      listofCities.empty();
    });
  });
  