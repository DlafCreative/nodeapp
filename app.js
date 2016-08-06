/**
 * Created by TINO-DEV on 02/08/2016.
 */
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodeapp');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/** Define routes **/
var indexRoutes = require('./routes/index.js');
var usersRoutes = require('./routes/users.js');
app.use('/', indexRoutes);
app.use('/users', usersRoutes);

/** Define client stuff **/
/** Dev : convert less files to css on the fly **/
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));

/** Define view engine **/
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.listen(8080);