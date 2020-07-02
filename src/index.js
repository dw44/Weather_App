import initialize from './modules/initialize';
import getWeather from './modules/getWeather';
import unitConversion from './modules/unitConversion';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = initialize().getLocation;

// Sets unit to display temperature. '1' for celsius, '2' for fahrenheit. Set to 1 by default
const temperatureUnit = 1; 

getWeather().getFromCoordinates(localStorage.latitude, localStorage.longitude);


//placeholder
document.getElementById('search').addEventListener('click', e => {
  e.preventDefault();
})