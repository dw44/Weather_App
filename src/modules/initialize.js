import getWeather from './getWeather';
import display from './display';
import showDefault from '../index';

const initialize = function init () {
  let weather = {};

  // const showDefault = () => {
  //   getWeather().getFromCoordinates(localStorage.latitude, localStorage.longitude)
  //   .then(weatherData => {
  //     display().displayAll(weatherData, 1);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // }

  const getCoords = position => {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
    showDefault();
    console.log('Get Coords');
    console.log(localStorage);
  }
  
  const setDefaultCoords = () => {
    // Sets default location to Toronto if user denies permission to use geolocation
    localStorage.setItem('latitude', 43.651);
    localStorage.setItem('longitude', -79.347);
    showDefault();
    console.log('Set Default Coords');
    console.log(localStorage);
  }


  const getLocation = () => {
    console.log('Running from initialize.getLocation');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, setDefaultCoords);
    } else {
      console.log('No Location Data');
    }
  }
  
  return {
    getLocation,
    getCoords,
    setDefaultCoords,
    weather
  };
}

export default initialize;