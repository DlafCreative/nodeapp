/**
 * Created by TINO-DEV on 02/08/2016.
 */
var app = require('express')();
var usersController = require('../controllers/usersController');

app
  .get( '/subscribe', usersController.subscribeForm)
  .post('/subscribe', usersController.doSubscribe)
  .get( '/',          usersController.index);

module.exports = app;