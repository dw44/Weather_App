async function getFromCoordinates(latitude, longitude) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${Number(latitude).toFixed(3)}&lon=${Number(longitude).toFixed(3)}&appid=46330e55c3e301b385d0d4571604500f`;
}

async function getFromCityName(city) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=46330e55c3e301b385d0d4571604500f`;
  try {
    let x = await loadJson(url);
    console.table(x);
  } catch(error) {
    console.log(error);
  }
}
getFromCityName('Toronsadsdto');

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    let json = await response.json();
    // console.log(json);
    return json;
  }
  throw new Error (response.status);
}

