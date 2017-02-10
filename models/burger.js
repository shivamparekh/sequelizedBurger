// dependencies

// capital references the standard library

var Sequelize = require("sequelize");

// lowercase references the db.

var sequelize = require("../config/connection.js");

// model creation

var Burgers = sequelize.define('burgers', {
  
id: {

  type: Sequelize.INTEGER,
  autoIncrement: true,
  primaryKey: true

},
burger_name: {

  type: Sequelize.STRING(50),
  allowNull: false,

},
devoured: {

  type: Sequelize.BOOLEAN,
  defaultvalue: false,

}
},
 {

  timestamps: false

});

//sync the db

Burgers.sync();

var burger = {

  all: function(callback) {

    Burgers.findAll({}).then(function(res) {

      callback(res);

    });

  },

  create: function(burger_name, callback) {

    Burgers.create({

      burger_name: burger_name

    }).then(function() {

      callback();

    }).catch(function(err) {

      callback(err);

    });
  
  },

  update: function(id, callback) {

    Burgers.update({

      devoured: 0

    },
    {

      where: {id: id}

  }).then(function(){

    callback();

  });
}
};

module.exports = burger;