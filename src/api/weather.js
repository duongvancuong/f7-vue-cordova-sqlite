import { Base } from './base';

class Weather extends Base {
  getCurrentWeather(query) {
    return this.client.get('/data/2.5/weather', { params: Object.assign(this.client.defaults.params, query) });
  }

  getEssentialWeatherData(query) {
    return this.client.get('/data/2.5/onecall', { params: Object.assign(this.client.defaults.params, query) });
  }
}

export const weather = new Weather({
  baseURL: process.env.VUE_APP_WEATHER_URL,
  params: {
    appid: process.env.VUE_APP_WEATHER_API_KEY,
  },
});
