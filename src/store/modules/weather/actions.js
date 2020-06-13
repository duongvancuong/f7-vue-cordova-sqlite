import { weather }from '../../../api/weather.js';
import weatherService from '../../../services/weatherService.js';

export default {
  async actionGetCurrentWeather({ commit }) {
    console.log("---------Action ADD_CURRENT_WEATHER----------");

    commit('ADD_CURRENT_WEATHER', { status: 'loading' });
    const response = await weatherService.getWeatherByCoordinates();
    console.log(response)

    commit('ADD_CURRENT_WEATHER', { status: 'done', data: response.data });

    console.log("-------END ADD_CURRENT_WEATHER---------------");
  },
  async actionGetEssentialWeatherData({ commit }) {
    console.log("---------Action ADD_ESSENTIAL_WEATHER----------");

    commit('ADD_ESSENTIAL_WEATHER', { status: 'loading' });
    const response = await weatherService.getEssentialWeatherData();
    // const response = await weather.getEssentialWeatherData({ lat: 16.0544, lon: 108.2022 });
    console.log(response)

    commit('ADD_ESSENTIAL_WEATHER', { status: 'done', data: response.data });

    console.log("-------END ADD_ESSENTIAL_WEATHER---------------");
  },
};
