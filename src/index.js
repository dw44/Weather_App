import initialize from './modules/initialize';
import unitConversion from './modules/unitConversion';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = initialize().getLocation;