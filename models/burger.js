// orm

var orm = require('../config/orm');

//

var burger = {

	all: function(callback) {

		orm.selectAll('burgers', function(res) {

			callback(res);

		})
	},

	create: function(cols, vals, callback) {

		orm.insertOne('burgers', cols, vals, function(res) {

			callback(results);

		})
	},

	update: function(objColVals, condition, callback) {

		orm.updateOne('burgers', objColVals, condition, function(res) {

			callback(results);
		})
	}

}

module.exports = burger;

