var connection = require("./connection.js");

var orm = {

    selectAll: function(table, callback){
        connection.query("SELECT * FROM ??", [table], function(err, results){
            if(err) throw err;
            callback(results);
        });
    },

    insertOne: function(table, name, callback){
        connection.query("INSERT INTO ?? (burger_name, devoured) VALUES (?, false)", [table, name], function(err, results){
            if(err) throw err;
            callback(results);
        });
    },

    updateOne: function(table, id, callback){
        connection.query("UPDATE ?? SET devoured=1 WHERE id = ?", [table, id], function(err, results){
            if(err) throw err;
            callback(results);
        });
    }

};

module.exports = orm;