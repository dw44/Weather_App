import unitConversion from './unitConversion';

const display = function() {
  const printWithUnits = (temperature, unit) => `${temperature}° ${unit}`;

  const capitalizeFirst = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;

  const displayWeather = (weather, unit) => {
    if (unit === 1) {
      document.getElementById('current-temperature').innerText = `Current Temperature: ${printWithUnits(unitConversion().kelvinToCelsius(weather.main.temp).toFixed(1), 'C')}`;
      document.getElementById('feels-like').innerText = `Feels Like: ${printWithUnits(unitConversion().kelvinToCelsius(weather.main.feels_like).toFixed(1), 'C')}`;
      document.getElementById('daily-max').innerText = `Maximum: ${printWithUnits(unitConversion().kelvinToCelsius(weather.main.temp_max).toFixed(1), 'C')}`;
      document.getElementById('daily-min').innerText = `Minimum: ${printWithUnits(unitConversion().kelvinToCelsius(weather.main.temp_min).toFixed(1), 'C')}`;
    }
    else  if (unit === 2) {
      document.getElementById('current-temperature').innerText = `Current Temperature: ${printWithUnits(unitConversion().kelvinToFahrenheit(weather.main.temp).toFixed(1), 'F')}`;
      document.getElementById('feels-like').innerText = `Feels Like: ${printWithUnits(unitConversion().kelvinToFahrenheit(weather.main.feels_like).toFixed(1), 'F')}`;
      document.getElementById('daily-max').innerText = `Maximum: ${printWithUnits(unitConversion().kelvinToFahrenheit(weather.main.temp_max).toFixed(1), 'F')}`;
      document.getElementById('daily-min').innerText = `Minimum: ${printWithUnits(unitConversion().kelvinToFahrenheit(weather.main.temp_min).toFixed(1), 'F')}`;
    }
  }

  const displayAll = (weather, unit) => {
    document.getElementById('location').innerText = `${weather.name}, ${weather.sys.country}`;
    document.getElementById('humidity').innerText = `Humidity: ${weather.main.humidity}%`;
    document.getElementById('wind-speed').innerText = `Wind Speed: ${(weather.wind.speed * 3.6).toFixed(1)} km/h`;
    document.getElementById('description-text').innerText = capitalizeFirst(weather.weather[0].description);
    document.getElementById('description-image').src = `./assets/${weather.weather[0].icon}@2x.png`;
    displayWeather(weather, unit);
  }

  return {
    displayWeather,
    displayAll,
  };
}

export default display;