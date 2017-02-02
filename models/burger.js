var orm = require("../config/orm.js");

var burger = {

    all: function(callback){

        orm.selectAll("burgers", function(res){
            callback(res);
        });
        
    },


    create: function(name, callback) {

        orm.insertOne("burgers", name, function(res) {
          callback(res);
        });

    },
    

    devour: function(id, callback){         // update

        orm.updateOne("burgers", id, function(res){
            callback(res);
        });

    }

};

module.exports = burger;