export default function initialize () {
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoords, setDefaultCoords);
    } else {
      console.log('No Location Data');
    }
  }
  
  function getCoords(position) {
    localStorage.clear();
    localStorage.setItem('latitude', position.coords.latitude);
    localStorage.setItem('longitude', position.coords.longitude);
  }
  
  function setDefaultCoords() {
    localStorage.clear();
    localStorage.setItem('latitude', 43.653);
    localStorage.setItem('longitude', 79.383);
  }

  return {
    getLocation,
    getCoords,
    setDefaultCoords
  };
}

