import initialize from './modules/initialize';
import getWeather from './modules/getWeather';
import display from './modules/display';
import unitConversion from './modules/unitConversion';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = pageLoad;
document.getElementById('switchUnits').onclick = changeUnit;

// Sets unit to display temperature. '1' for celsius, '2' for fahrenheit. Set to 1 by default
let temperatureUnit = 1; 

// save a local copy of weather data to assist with unit conversion due to how 
let weather = {};

function pageLoad() {
  // display weather for user location or toronto on page load
  initialize().getLocation();
  getWeather().getFromCoordinates(localStorage.latitude, localStorage.longitude)
  .then(weatherData => {
    weather = {...weatherData}
    display().displayAll(weather, 1);
  })
  .catch(error => {
    console.log(error);
  });

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