import Vue from 'vue';
import Vuex from 'vuex';

import task from './modules/task';
import weather from './modules/weather';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    task,
    weather,
  },
});

export default store;
