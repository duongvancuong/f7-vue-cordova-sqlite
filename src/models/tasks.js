import SqliteStorage from '../store/sqlite.js';

class Tasks {
  constructor() {
    this.db = new SqliteStorage(process.env.VUE_APP_DB_NAME);
  }

  createTable() {
    const query = `CREATE TABLE IF NOT EXISTS Tasks (\
                                          id INTEGER PRIMARY KEY,\
                                          title TEXT NOT NULL,\
                                          detail TEXT,\
                                          startAt TEXT NOT NULL,\
                                          endAt TEXT NOT NULL,\
                                          status TEXT NOT NULL \
                                          )`;

    this.db.createTable(query);
  }

  async getTasks() {
    const query = "SELECT * from Tasks";
    let data = [];
    const results = await this.db.select(query, []);

    for(var x = 0; x < results.rows.length; x++) {
      data.push(results.rows.item(x))
    }

    return data;
  }

  async addTask(task) {
    const params = Object.values(task);
    console.log("---------SQLite Create-------");
    console.log(task);

    const query = "INSERT INTO Tasks(title, detail, startAt, endAt, status) VALUES (?,?,?,?,?)";
    const data = await this.db.insert(query, [...params]);

    if (data.rowsAffected === 1) {
      return task;
    }

    return null;
    console.log("-------END SQLite--------");
  }

  async updateTask(task) {
    console.log("---------SQLite Update-------");
    console.log(task);

    const query = "UPDATE Tasks SET title = ?, detail = ?, startAt = ?, endAt = ?, status = ? WHERE id = ?";
    const data = await this.db.update(query, [
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
  }

  async deleteTask(id) {
    console.log("---------SQLite Delete-------");
    const query = "DELETE FROM Tasks WHERE id = ?";
    const data = await this.db.delete(query, [id]);

    if (data.rowsAffected === 1) {
      return id;
    }

    return null;
    console.log("-------END SQLite--------");
  }
};

export default Tasks;
