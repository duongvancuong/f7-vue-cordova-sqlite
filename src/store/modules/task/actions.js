import {
  getTasks,
  addTask,
  updateTask,
  deleteTask,
} from '../../../api';

export default {
  async actionFetch({ commit }) {
    console.log("---------Action FETCH----------");

    commit('FETCH_TASKS', { status: 'loading', tasks: [] });
    const tasks = await getTasks();
    commit('FETCH_TASKS', { status: 'done', tasks });

    console.log("-------END FETCH---------------");
  },
  async actionAdd({ commit }, task) {
    console.log("---------Action CREATE----------");

    if ( !task ) {
      console.error('Action: Add to invalid!');
      return;
    }
    commit('ADD_TASK', { status: 'create' });
    const data = await addTask(task);
    commit('ADD_TASK', { status: 'done', task: data });

    console.log("-------END CREATE---------------");
  },
  async actionDelete({ commit }, task) {
    console.log("---------ACTION DELETE----------");
    if (!task) {
      console.error('Action: Remove task invalid!');
      return;
    }

    commit('DELETE_TASK', { status: 'delete' });
    const id = await deleteTask(task.id);
    commit('DELETE_TASK', { status: 'done', id: task.id });

    console.log("-------END ACTION DELETE---------------");
  },
  async actionEdit({ commit }, task) {
    console.log("---------ACTION EDIT----------");
    if (!task) {
      console.error('Action: Edit task invalid!');
      return;
    }
    commit('EDIT_TASK', { status: 'update' });
    const data = await updateTask(task);
    commit('EDIT_TASK', { status: 'done', task: data });

    console.log("-------END ACTION EDIT---------------");
  },
};
