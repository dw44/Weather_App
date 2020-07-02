import initialize from './modules/initialize';
import getWeather from './modules/getWeather';
import display from './modules/display';
import unitConversion from './modules/unitConversion';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = pageLoad;

// Sets unit to display temperature. '1' for celsius, '2' for fahrenheit. Set to 1 by default
const temperatureUnit = 1; 

function pageLoad() {
  initialize().getLocation();
  getWeather().getFromCoordinates(localStorage.latitude, localStorage.longitude)
  .then(weather => {
    display().displayAll(weather, 1);
  })
  .catch(error => {
    console.log(error);
  });
}

function changeUnit() {
  if (temperatureUnit === 1) {
    temperatureUnit = 2;
  } else {
    temperatureUnit = 1;
  }
}