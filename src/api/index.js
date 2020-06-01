import SqliteStorage from '../store/sqlite.js';

export const createTable = () => {
  const sqlite = new SqliteStorage();
const query = `CREATE TABLE IF NOT EXISTS Tasks (\
                  id INTEGER PRIMARY KEY,\
                  title TEXT NOT NULL,\
                  detail TEXT,\
                  startAt TEXT NOT NULL,\
                  endAt TEXT NOT NULL,\
                  status TEXT NOT NULL \
                )`;

  sqlite.createTable(query);
};

export const getTasks = async () => {
  const sqlite = new SqliteStorage();

  const query = "SELECT * from Tasks";
  let data = [];
  const results = await sqlite.select(query, []);

  for(var x = 0; x < results.rows.length; x++) {
    data.push(results.rows.item(x))
  }

  return data;
};

export const addTask = async (task) => {
  const sqlite = new SqliteStorage();
  const params = Object.values(task);
  console.log("---------SQLite Create-------");
  console.log(task);

  const query = "INSERT INTO Tasks(title, detail, startAt, endAt, status) VALUES (?,?,?,?,?)";
  const data = await sqlite.insert(query, [...params]);

  if (data.rowsAffected === 1) {
    return task;
  }

  return null;
  console.log("-------END SQLite--------");
};

export const updateTask = async (task) => {
  const sqlite = new SqliteStorage();
  console.log("---------SQLite Update-------");
  console.log(task);

  const query = "UPDATE Tasks SET title = ?, detail = ?, startAt = ?, endAt = ?, status = ? WHERE id = ?";
  const data = await sqlite.update(query, [
    task.title,
    task.detail,
    task.startAt,
    task.endAt,
    task.status,
    task.id,
  ]);

  if (data.rowsAffected === 1) {
    return task;
  }

  return null;
  console.log("-------END SQLite--------");
};

export const deleteTask = async (id) => {
  const sqlite = new SqliteStorage();
  console.log("---------SQLite Delete-------");
  const query = "DELETE FROM Tasks WHERE id = ?";
  const data = await sqlite.delete(query, [id]);

  if (data.rowsAffected === 1) {
    return id;
  }

  return null;
  console.log("-------END SQLite--------");
};
