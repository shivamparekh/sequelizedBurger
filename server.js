// packages

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// port

var PORT = process.env.PORT || 3000;

// create the app

var app = express();

app.use(express.static(__dirname + 'public'));


// use bodyParser

app.use(bodyParser.urlencoded({ extended: false }));


// use handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// methodOverride

app.use(methodOverride("_method"));

// routes

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use("/update", routes);
app.use("/create", routes);

// listener

app.listen(PORT, function() {
  console.log('We here ' + PORT);
});