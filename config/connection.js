// dependencies

var Sequelize = require("sequelize");

var env;

	if (process.env.JAWSDB_URL)

	    env = "production";

	else {

	    env = 'development';

}

// creates mysql connection using sequelize

var sequelize = new Sequelize("burgers_db", "root", "2", {
  
  host: "localhost",
  dialect: "mysql",

});

module.exports = sequelize;