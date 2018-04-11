var mysql = require('mysql');

var connMysql = function() {
	return mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'assert123',
	    database: 'portal'
	});
};

module.exports = function () {
	return connMysql;
}


