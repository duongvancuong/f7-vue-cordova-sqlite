import Sqlite from '../store/sqlite.js';

export const getTodos = async () => {
  const sqlite = new Sqlite();

  const query = "SELECT * from Todos";
  let data = [];
  const results = await sqlite.select(query, []);

  for(var x = 0; x < results.rows.length; x++) {
    data.push(results.rows.item(x))
  }

  return data;
};

export const addTask = async (todo) => {
  const sqlite = new Sqlite();
  const params = Object.values(todo);

  const query = "INSERT INTO Todos VALUES (?,?,?)";
  const data = await sqlite.insert(query, [...params]);

  if (data.rowsAffected === 1) {
    return todo;
  }

  return null;
};

export const updateTask = async (todo) => {
  const sqlite = new Sqlite();
  const params = Object.values(todo);

  const query = "UPDATE Todos SET title = ?, status = ? WHERE id = ?";
  const data = await sqlite.update(query, [...params]);

  if (data.rowsAffected === 1) {
    return todo;
  }

  return null;
};

export const deleteTask = async (id) => {
  const sqlite = new Sqlite();
  const query = "DELETE FROM Todos WHERE id = ?";
  const data = await sqlite.delete(query, [id]);

  if (data.rowsAffected === 1) {
    return id;
  }

  return null;
};
