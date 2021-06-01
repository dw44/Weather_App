const getWeather = function weather() {
  const loadJson = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
      const json = await response.json();
      return json;
    }
    throw new Error(response.status);
  };

  const getFromCityName = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`;
    try {
      const x = await loadJson(url);
      return x;
    } catch (error) {
      // console.log(error);
    }
  };

  const getFromCoordinates = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Number(latitude).toFixed(3)}&lon=${Number(longitude).toFixed(3)}&appid=${process.env.API_KEY}`;
    try {
      const x = await loadJson(url);
      return x;
    } catch (error) {
      // console.log(error);
    }
  };

  return {
    getFromCoordinates,
    getFromCityName,
  };
};

export default getWeather;
