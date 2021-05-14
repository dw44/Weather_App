const getWeather = function weather () { 
  const loadJson = async url => {
    let response = await fetch(url);
    if (response.status === 200) {
      let json = await response.json();
      return json;
    }
    throw new Error (response.status);
  }

  const getFromCityName = async city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46330e55c3e301b385d0d4571604500f`;
    try {
      let x = await loadJson(url);
       return x;
    } catch(error) {
      // console.log(error);
    }
  } 

  const getFromCoordinates = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Number(latitude).toFixed(3)}&lon=${Number(longitude).toFixed(3)}&appid=46330e55c3e301b385d0d4571604500f`;
    try {
      let x = await loadJson(url);
      return x;
    } catch(error) {
      // console.log(error);
    }
  }

  return {
    getFromCoordinates,
    getFromCityName,
  };
}  

export default getWeather;