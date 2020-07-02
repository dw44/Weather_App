const unitConversion = function conversion () {
  const kelvinToCelsius = kelvin => kelvin - 273.15;
  const celsiusToFahrenheit = celsius => celsius * 1.8 + 32;
  const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5 / 9;
  const kelvinToFahrenheit = kelvin => celsiusToFahrenheit(kelvinToCelsius(kelvin));
  return {
    kelvinToCelsius,
    celsiusToFahrenheit,
    fahrenheitToCelsius,
    kelvinToFahrenheit
  };
}

export default unitConversion;
