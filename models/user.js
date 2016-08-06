/**
 * Created by TINO-DEV on 06/08/2016.
 */
var mongoose = require('mongoose');

var user = mongoose.model('User', {
  username: String
});

module.exports = user;