var connection = require("./connection.js");

var orm = {

  selectAll: function(table, callback){

    var query = "SELECT * FROM ??;";

    connection.query(query, [table], function(err, result){
      if (err) {
        throw err;
      }

      callback(result);

    });

  },


  insertOne: function(table, column, value, callback){

    var query = "INSERT INTO " + table;
    query += " (" + column.toString() + ") ";
    query += "VALUES (?)";

    connection.query(query, [value], function(err, result){
      if (err){
        throw err;
      }

      callback(result);

    });
  },


  updateOne: function(table, column, value, addColumn, addValue, callback){

    var query = "UPDATE " + table;
    query += " SET " + column;
    query += " = ";
    query += value + " WHERE ";
    query += addColumn + " = ?";
    
    var addValue = parseInt(addValue);
    
    console.log(query);

    connection.query(query, [addValue], function(err, result){
      if (err){
        throw err;
      }

      callback(result);

    });
  }
};



module.exports = orm;