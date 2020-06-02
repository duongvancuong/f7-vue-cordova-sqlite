import Vue from 'vue';
import Vuex from 'vuex';

import task from './modules/task';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
   task,
  },
});

export default store;
