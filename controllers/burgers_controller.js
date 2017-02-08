// packages
var express = require("express");
var router = express.Router();

var Burgers = require("../models/burger");

// get

router.get("/", function(req, res) {

  res.redirect("/burgers");

});

router.get("/burgers", function(req, res) {

  Burgers.findAll({}).then(function(data) {

    var hbsObj = { burgers: data};
    
    res.render('index', hbsObj);

  })

});

// post

router.post("/burgers/create", function(req, res) {

  Burgers.create({ burger_name: req.body.burger_name, 

  }).then(function(data){

    res.redirect('/');

  });

});

// put

router.put("/burgers/update", function(req, res) {

  Burgers.update({ devoured: 1 },

    {
      where: {id: req.params.id}

    }).then(function(data){

      res.redirect('/');
  })
});

module.exports = router;