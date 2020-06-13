import geolocation from '../utils/geolocation.js';
import { weather }from '../api/weather.js';

const getWeatherByCoordinates = async () => {
  const position = await geolocation.getCurrentPosition({ maximumAge: 60000, timeout:120000, enableHighAccuracy: true });
  const params = Object.assign({}, { lat: position.coords.latitude, lon: position.coords.longitude });
  const response = await weather.getCurrentWeather(params);
  return response;
}

const getEssentialWeatherData = async () => {
  const position = await geolocation.getCurrentPosition({ maximumAge: 60000, timeout:120000, enableHighAccuracy: true });
  const params = Object.assign({}, { lat: position.coords.latitude, lon: position.coords.longitude });
  const response = await weather.getEssentialWeatherData(params);
  return response;
}

export default {
  getWeatherByCoordinates,
  getEssentialWeatherData,
};
