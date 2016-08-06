/**
 * Created by TINO-DEV on 03/08/2016.
 */
var User = require('../models/user');

var usersController = {
  index     : function(req, res){
    User.find({}, function(err, results){
      res.render('users/index', { users: results });
    });
  },
  subscribeForm : function(req, res){
    res.render('users/subscribe');
  },
  doSubscribe : function(req, res){
    var user = new User(req.body);
    user.save(function(err, result){
      res.send({ redirect: '/' });
    });
  }
};

module.exports = usersController;