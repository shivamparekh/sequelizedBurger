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

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

// use handlebars

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// methodOverride

app.use(methodOverride("_method"));

// routes

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

// listener

app.listen(PORT, function() {
  console.log('We here ' + PORT);
});