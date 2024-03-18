# glushkivan-module

A collection of utilities for astronomy calculations and weather fetching.

## Installation

You can install this module via npm: `npm install glushkivan-module`


## Usage

```javascript
const astroUtils = require('astro-utils');

// Example usage
const latitude = 51.5074; // Latitude of London
const longitude = -0.1278; // Longitude of London
const date = new Date(); // Current date

const sunTimes = astroUtils.calculateSunTimes(latitude, longitude, date);
console.log('Sunrise:', sunTimes.sunrise);
console.log('Sunset:', sunTimes.sunset);

const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const cityName = 'London';
astroUtils.getCurrentWeather(apiKey, cityName)
  .then(weatherData => {
    console.log('Current Temperature (Celsius):', astroUtils.kelvinToCelsius(weatherData.main.temp));
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
```

