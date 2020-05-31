import Vue from 'vue';
import Vuex from 'vuex';

import { getTodos, addTask, updateTask, deleteTask } from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
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
    deleteTask(state, id) {
      const index = state.todos.findIndex(t => t.id === id);
      state.todos.splice(index, 1);
    },
    editTask(state, task) {
      console.log(task);
      const index = state.todos.findIndex(t => t.id === task.id);
      state.todos[index] = task;
    },
    fetchTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      console.log('Action: Trying to fetch Todos');
      const data = await getTodos();
      commit('fetchTodos', data);
    },
    async addTodo({ commit }, todo) {
      console.log('Action: Trying to add Todo');
      if ( !todo || !todo.title) {
        console.error('Action: Add to invalid!');
        return;
      }
      const data = await addTask(todo);
      commit('addTodo', data);
    },
    async deleteTask({ commit }, task) {
      console.log('Action: Trying to remove task');
      if (!task) {
        console.error('Action: Remove task invalid!');
        return;
      }
      const id = await deleteTask(task.id);
      commit('deleteTask', id);
    },
    async editTask({ commit }, task) {
      console.log('Actions: Trying to Edit Task');
      if (!task) {
        console.error('Action: Edit task invalid!');
        return;
      }
      const data = await updateTask(task);
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
