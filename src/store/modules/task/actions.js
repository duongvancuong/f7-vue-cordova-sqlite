import Tasks from '../../../models/tasks.js';

export default {
  async actionGetByStatus({ commit }, status) {
    console.log("---------Action GET TASK BY STATUS----------");

    commit('GET_BY_STATUS', { status: 'loading', tasks: [] });
    const _taskModel = new Tasks();
    const tasks = await _taskModel.byStatus(status);

    commit('GET_BY_STATUS', { status: 'done', tasks });

    console.log("-------END GET TASK BY STATUS---------------");
  },
  async actionFetch({ commit }) {
    console.log("---------Action FETCH----------");

    commit('FETCH_TASKS', { status: 'loading', tasks: [] });
    const _taskModel = new Tasks();
    const tasks = await _taskModel.getTasks();

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
    const _taskModel = new Tasks();
    const data = await _taskModel.addTask(task);
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
    const _taskModel = new Tasks();
    const id = await _taskModel.deleteTask(task.id);
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
    const _taskModel = new Tasks();
    const data = await _taskModel.updateTask(task);
    commit('EDIT_TASK', { status: 'done', task: data });

    console.log("-------END ACTION EDIT---------------");
  },
};
