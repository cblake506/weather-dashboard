function getWeather(event){
    event.preventDefault();

    var apiKey = '&appid=1c27f27a707bdfd5f41ae112c33f6e37';
    var city = document.getElementById('city').value;

    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + apiKey;
    fetch(url, {
        // The browser fetches the resource from the remote server without first looking in the cache.
        // The browser will then update the cache with the downloaded resource.
        cache: 'reload',
    })
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {

        var tempEl = document.getElementById('temperature');
        tempEl.innerHTML = "";

        var high = convertKtoF(data.main.temp_max);
        var low = convertKtoF(data.main.temp_min);
        var temp = convertKtoF(data.main.temp);
        tempEl.insertAdjacentHTML('beforeend', '<li>Current: ' + temp + 'F</li>');
        tempEl.insertAdjacentHTML('beforeend', '<li>Daily high: ' + high + 'F</li>');
        tempEl.insertAdjacentHTML('beforeend', '<li>Daily low: ' + low + 'F</li>');
        });
    
}

function convertKtoF(kelvin){
    return Math.round(1.8 * (kelvin - 273) + 32);
}

document.getElementById('city-button').addEventListener('click', getWeather)