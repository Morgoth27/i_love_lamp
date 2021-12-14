var getWeather = function (zipCode) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

        fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json().then(function(data)
                 {
                     displayWeather(data);

                 });
            } else {
                alert('Invalid data entry, please review entry and try again.');
            });
        
    function displayWeather