var express = require('express');
var consign = require('consign');

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');


// Load Routes and Load Database Connection
consign().include('app/routes').then('config/dbConnection.js').into(app);
module.exports = app;