const initialize = function init () {
  const getCoords = position => {
    localStorage.clear();
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
  }
  
  const setDefaultCoords = () => {
    // Sets default location to Toronto if user denies permission to use geolocation
    localStorage.clear();
    localStorage.setItem('latitude', 43.653);
    localStorage.setItem('longitude', 79.383);
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