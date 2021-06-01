import initialize from './modules/initialize';
import getWeather from './modules/getWeather';
import display from './modules/display';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = initialize().getLocation();
document.getElementById('switchUnits').onclick = changeUnit;
// search form
document.querySelector('#search').onclick = search;

// Sets unit to display temperature. '1' for celsius, '2' for fahrenheit. Set to 1 by default
let temperatureUnit = 1;

// save a local copy of weather data to assist with unit conversion due to how
let weather = {};

function changeUnit() {
  // switch weather units on main weather display
  if (temperatureUnit === 1) {
    temperatureUnit = 2;
    document.getElementById('switchUnits').innerText = 'C';
  } else {
    temperatureUnit = 1;
    document.getElementById('switchUnits').innerText = 'F';
  }
  display().displayWeather(weather, temperatureUnit);
}

function search(e) {
  e.preventDefault();
  const city = document.getElementById('search-city').value;
  // weather object gets overwritten in case of error in search. this maintains a copy of the original
  const weatherBackup = { ...weather };
  if (city) {
    getWeather().getFromCityName(city)
      .then((weatherData) => {
        weather = { ...weatherData };
        display().displayAll(weather, temperatureUnit);
      })
      .catch((error) => {
        // set weather to last functioning set of values
        weather = { ...weatherBackup };
        console.log(error);
        alert('Encountered an Error');
      });
  }
}

/* exported from here to avoid needlessly complicating data sharing between
   various versions of the "weather" object                              */
export default function showDefault() {
  getWeather().getFromCoordinates(localStorage.latitude, localStorage.longitude)
    .then((weatherData) => {
      weather = { ...weatherData };
      display().displayAll(weather, 1);
    })
    .catch((error) => {
      console.log(error);
    });
}
