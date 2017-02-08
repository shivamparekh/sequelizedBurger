// dependencies

var Sequelize = require("sequelize");

// creates mysql connection using sequelize

var sequelize = new Sequelize("burgers_db", "root", "", {
  
  host: "localhost",
  dialect: "mysql",

});

module.exports = sequelize;