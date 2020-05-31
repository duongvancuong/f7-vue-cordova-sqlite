import { guid } from '../js/utils.js';
import { deleteTodo, saveTodo, fetchTodos } from '../api';

export const createTodo = ({ commit }, data) => {
  let id = guid();
  let account = Object.assign({ id: id }, data);
  commit('CREATE_TODO', {account: account});
  saveAccount(account).then((value) => {
  // todo somethings
  });
};
