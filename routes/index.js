var app = require('express')();
var indexController = require('../controllers/indexController.js');

app.get('/', indexController.homepage);

module.exports = app;