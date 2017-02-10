// dependencies

var Sequelize = require("sequelize");

var env;

	if (process.env.JAWSDB_URL)

	    env = "production";

	else {

	    env = 'development';

}

var config = require('./config')[env];

// creates mysql connection using sequelize

var sequelize;

if(config.use_env_variable) {

	sequelize = new Sequelize(process.env[config.use_env_variable]);

} else {

	sequelize = new Sequelize(config.database, config.username, config.password, {
		
		host: config.host,
		dialect: config.dialect

	});
}

module.exports = sequelize;