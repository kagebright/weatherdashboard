$(function) () {
//declaring all the variables
    const cites = $(".cities");
    const temperature = $(".temp");
    const


fetch("http://api.openweathermap.org/geo/1.0/direct?q={lowell},{25},{country code}&limit={limit}&appid={dc9a13c8fc4afc874882b2c3a86a4300}")
    .then(function (response) {
        if (response.ok) {
            response.json()
            .then(function(data)) {
                displayIssues(data);
            }
        }
    });

};