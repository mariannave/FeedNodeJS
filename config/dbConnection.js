var mysql = require('mysql');

var connMySQL = function(){
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'assert123',
        database: 'portal'
    });
}

module.exports = function(){
    return connMySQL;
}