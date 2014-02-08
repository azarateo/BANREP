createDB: function() {
    var msg = "createDB: Creando base de datos!";
    console.log(msg);
    var db = window.openDatabase("db", "1.0", "db", 3145728);
    db.transaction(app.populateDB, app.errorCB, app.successCB);
  },