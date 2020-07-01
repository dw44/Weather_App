import initialize from './modules/initialize';

// Prompt for permission to use location. set to toronto if denied. save to localstorage
window.onload = initialize().getLocation;