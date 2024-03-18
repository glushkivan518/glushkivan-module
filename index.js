const sunCalc = require('suncalc');
const axios = require('axios');

/**
 * Function to calculate the sunrise and sunset times for a given location and date
 * @param {number} latitude - Latitude of the location
 * @param {number} longitude - Longitude of the location
 * @param {Date} date - Date for which to calculate sunrise and sunset
 * @returns {Object} - Object containing sunrise and sunset times
 */
function calculateSunTimes(latitude, longitude, date) {
  const sunTimes = sunCalc.getTimes(date, latitude, longitude);
  return {
    sunrise: sunTimes.sunrise,
    sunset: sunTimes.sunset
  };
}

/**
 * Function to fetch the current weather for a given location using OpenWeatherMap API
 * @param {string} apiKey - OpenWeatherMap API key
 * @param {string} cityName - Name of the city
 * @returns {Object} - Object containing current weather data
 */
async function getCurrentWeather(apiKey, cityName) {
  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
}

/**
 * Function to convert temperature from Kelvin to Celsius
 * @param {number} kelvin - Temperature in Kelvin
 * @returns {number} - Temperature in Celsius
 */
function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

module.exports = {
  calculateSunTimes,
  getCurrentWeather,
  kelvinToCelsius
};
