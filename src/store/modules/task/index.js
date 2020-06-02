import actions from './actions';
import mutations from './mutations';

const state = {
  status: 'done', // loading->done | create->doen | update->done | delete->done
  tasks: [],
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
