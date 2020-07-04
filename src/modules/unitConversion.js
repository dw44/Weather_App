const unitConversion = function conversion () {
  const kelvinToCelsius = kelvin => kelvin - 273.15;
  const kelvinToFahrenheit = kelvin => kelvin * 1.8 - 459.67;
  return {
    kelvinToCelsius,
    kelvinToFahrenheit,
  };
}

export default unitConversion;
