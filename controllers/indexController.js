/**
 * Created by TINO-DEV on 03/08/2016.
 */
var path = require('path');
var indexController = {
  homepage : function(req, res){
    console.log('action homepage du controller');
    res.render('index/index');
  }
};

module.exports = indexController;