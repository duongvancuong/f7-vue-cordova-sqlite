class Sqlite {
  constructor(dbName, location = 'default') {
    this.dbName = dbName;
    this.location = location;
    this.db = window.sqlitePlugin.openDatabase({ name: this.dbName, location: this.location });
  }

  deleteDB() {
    window.sqlitePlugin.deleteDatabase({ name: this.dbName, location: this.location }, function() {
      console.log("Database is deleted successfully!");
    }, function(error){
      console.error(error);
    });
  }

  createTable(query) {
    this.db.transaction(function(transaction) {
      transaction.executeSql(query);
    }, function(error) {
      console.log(error.message);
    }, function() {
      console.log('transaction ok');
    });
  }

  insert(query, params) {
    return new Promise((resolve, reject) => {
      this.db.transaction(function (tx) {
        tx.executeSql(query, [...params], function(tx, res) {
          console.log("insertId: " + res.insertId + " -- probably 1");
          console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
          resolve(res);
        },
        function(tx, error) {
          console.log('INSERT error: ' + error.message);
          reject(error);
        });
      }, function(error) {
        console.log('transaction error: ' + error.message);
        reject(error);
      }, function() {
        console.log('transaction ok');
        this.db.close();
      });
    });
  }

  update(query, params) {
    return new Promise((resolve, reject) => {
      this.db.transaction(function(tx) {
        tx.executeSql(query, [...params], function(tx, res) {
          console.log("insertId: " + res.insertId);
          console.log("rowsAffected: " + res.rowsAffected);
          resolve(res);
        }, function(tx, error) {
          console.log('UPDATE error: ' + error.message);
          reject(error);
        });
      }, function(error) {
        console.log('transaction error: ' + error.message);
        reject(error);
      }, function() {
        console.log('transaction ok');
        this.db.close();
      });
    });
  }

  delete(query, params) {
    return new Promise((resolve, reject) => {
      this.db.transaction(function(tx) {
        tx.executeSql(query, [...params], function(tx, res) {
          console.log("removeId: " + res.insertId);
          console.log("rowsAffected: " + res.rowsAffected);
          resolve(res);
        }, function(tx, error) {
          console.log('DELETE error: ' + error.message);
          reject(error);
          this.db.close();
        });
      }, function (error) {
        console.log('transaction error: ' + error.message);
        reject(error);
        this.db.close();
      }, function () {
        console.log('transaction ok');
        this.db.close();
      });
    });
  }

  select(query, params) {
    return new Promise((resolve, reject) => {
      this.db.transaction(function (tx) {
        tx.executeSql(query, [...params], function (tx, resultSet) {
          resolve(resultSet);
        }, function(tx, error) {
          reject(error);
          console.log('SELECT error: ' + error.message);
        });
      }, function(error) {
        reject(error);
        console.log('transaction error: ' + error.message);
      }, function() {
        console.log('transaction ok');
        this.db.close();
      });
    });
  }
};

export default Sqlite;
