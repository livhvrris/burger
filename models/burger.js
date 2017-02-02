var orm = require("../config/orm.js");


var burger = {

  selectAll: function(callback){

    orm.selectAll("burgers", function(result){
      callback(result);
    });

  },


  insertOne: function(value, callback){

    orm.insertOne("burgers", "burger_name", value, function(result){
      callback(result);
    });

  },


  updateOne: function(addValue, callback){

    orm.updateOne("burgers", "devoured", 1, "id", addValue, function(result){
      callback(result);
    });
    
  }

};


module.exports = burger;