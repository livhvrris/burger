var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){

  burger.selectAll(function(data){
    var hbsObject = {
      burger: data
    };

    console.log(hbsObject);

    res.render("index", hbsObject);

  });
});


router.post("/", function(req, res){

  burger.insertOne(req.body.name, function() {
    res.redirect("/");
  });

});


router.put("/:id", function(req, res){

  burger.updateOne(req.params.id, function(){
    res.redirect("/");
  });

})


module.exports = router;