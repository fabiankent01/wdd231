const apiKey = '8b048cc20a3f897fa3c2764fe8444182';  // Replace with your OpenWeatherMap API key
const city = 'Benin City,NG';
const units = 'imperial';  // Use 'metric' for Celsius, 'imperial' for Fahrenheit

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const temperature = data.main.temp;
        const description = capitalizeFirstLetter(data.weather[0].description);
        document.getElementById('weather').textContent = `${temperature}°F - ${description}`;
    })
    .catch(err => {
        console.error('Weather fetch error:', err);
        document.getElementById('weather').textContent = 'Unable to fetch weather';
    });

// Page visit counter using localStorage
let visitCount = Number(localStorage.getItem('visit-count')) || 0;
visitCount++;
localStorage.setItem('visit-count', visitCount);
document.getElementById('visits').textContent = `Page Visits: ${visitCount}`;

// Helper to capitalize the first letter
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        const forecastDiv = document.getElementById('forecast');
        const forecastList = data.list;

        // Filter for forecasts around midday (12:00:00) and get the next 3 days
        const threeDayForecast = forecastList.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        threeDayForecast.forEach(forecast => {
            const date = new Date(forecast.dt_txt);
            const temp = forecast.main.temp;
            const description = capitalizeFirstLetter(forecast.weather[0].description);

            const dayElement = document.createElement('p');
            dayElement.textContent = `${date.toDateString()}: ${temp}°F, ${description}`;
            forecastDiv.appendChild(dayElement);
        });
    })
    .catch(err => {
        console.error('Forecast fetch error:', err);
    });
