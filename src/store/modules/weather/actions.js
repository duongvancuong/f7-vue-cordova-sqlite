import { weather }from '../../../api/weather';

export default {
  async actionGetCurrentWeather({ commit }) {
    console.log("---------Action ADD_CURRENT_WEATHER----------");

    commit('ADD_CURRENT_WEATHER', { status: 'loading' });
    const response = await weather.getCurrentWeather({ q: 'Danang' });
    console.log(response)

    commit('ADD_CURRENT_WEATHER', { status: 'done', data: response.data });

    console.log("-------END ADD_CURRENT_WEATHER---------------");
  },
};
