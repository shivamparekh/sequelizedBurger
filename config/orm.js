//recquire mysql connection.js

var connection = require("../config/connection.js");

// helper functions for SQL syntax (Given to us in Mvc Example)

function printQuestionMarks(num) {

  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");

  }

  return arr.toString();

}

function objToSql(ob) {

  var arr = [];

  for (var key in ob) {

    if (Object.hasOwnProperty.call(ob, key)) {

      arr.push(key + "=" + ob[key]);

    }

  }

  return arr.toString();

}

// orm

var orm = {

	selectAll: function(table, callback) {

		var queryString = "SELECT * FROM " + table;

		connection.query(queryString, function(err, res) {

			if (err) throw err;

			callback(res);

		});
	},

	insertOne: function(table, cols, vals, callback) {

		var queryString = "INSERT INTO" + table;

		queryString += 

	},
	
	updateOne: function(table, objColVals, condition, callback) {


	}
};

module.exports = orm;