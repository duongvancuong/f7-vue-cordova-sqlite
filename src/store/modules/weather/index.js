import actions from './actions';
import mutations from './mutations';

const state = {
  status: 'done', // loading->done | create->doen | update->done | delete->done
  data: {},
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
