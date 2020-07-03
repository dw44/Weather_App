import showDefault from '../index';

const initialize = function init () {
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
    setDefaultCoords
  };
}

export default initialize;