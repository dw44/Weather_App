import showDefault from '../index';

const initialize = function init () {
  const getCoords = position => {
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
    showDefault();
  }
  
  const setDefaultCoords = () => {
    // Sets default location to Toronto if user denies permission to use geolocation
    localStorage.setItem('latitude', 43.6548);
    localStorage.setItem('longitude', -79.3883);
    showDefault();
  }


  const getLocation = () => {
      navigator.geolocation.getCurrentPosition(getCoords, setDefaultCoords);
  }
  
  return {
    getLocation,
  };
}

export default initialize;