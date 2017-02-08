// dependencies

// capital references the standard library

var Sequelize = require("sequelize");

// lowercase references the db.

var sequelize = require("../config/connection.js");

// model creation

var Burger = sequelize.define("burgers", {

  id: {

    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true

  },

  burger_name: {

    type: Sequelize.STRING,
    allowNull: false,

  },

  devoured: {

    type: Sequelize.BOOLEAN

  },

  fecha: {

    type: Sequelize.DATE
  }

}, {

  timestamps: false

});


module.exports = Burger;
