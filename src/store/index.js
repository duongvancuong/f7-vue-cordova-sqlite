import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: 'The task is doing',
        status: 'doing',
        id: '1',
      },
      {
        title: 'The task is done',
        status: 'done',
        id: '2',
      },
      {
        title: 'The task is todo',
        status: 'todo',
        id: '3',
      },
    ],
    user: {
      name: 'Cuong',
      title: 'Developer',
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      console.log('Mutaion: Todo added!');
    },
    deleteTask(state, task) {
      console.log(task);
      const index = state.todos.findIndex(t => t.id === task.id);
      state.todos.splice(index, 1);
    },
    editTask(state, task) {
      console.log(task);
      const index = state.todos.findIndex(t => t.id === task.id);
      state.todos[index] = task;
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      console.log('Action: Trying to add Todo');
      if ( !todo || !todo.title) {
        console.error('Action: Add to invalid!');
        return;
      }
      commit('addTodo', todo);
    },
    deleteTask({ commit }, task) {
      console.log('Action: Trying to remove task');
      if (!task) {
        console.error('Action: Remove task invalid!');
        return;
      }
      commit('deleteTask', task);
    },
    editTask({ commit }, task) {
      console.log('Actions: Trying to Edit Task');
      if (!task) {
        console.error('Action: Edit task invalid!');
        return;
      }
      commit('editTask', task);
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getUser(state) {
      return state.user;
    },
  },
});
