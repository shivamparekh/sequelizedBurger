// packages

var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Routes for Express

router.get('/', function(req, res){

  res.redirect('/index');

});

router.get('/burgers', function (req, res) {

  burger.all(function (data) {

    var hbsObj = { burgers: data };
    res.render('index', hbsObj);

  });
});

router.post('/burgers/create', function (req, res) {

  burger.create(req.body.burger_name, function (result) {

    res.redirect('/burgers');

  });
});

router.put('/burgers/update/', function (req, res) {

  burger.update(req.params.id, function (result) {''

    res.redirect('/burgers');

  });
});

//Router for server.js

module.exports = router;