/**
 * @fileOverview Application
 * @author yu-ichiko@gamil.com
 */

var $ = require('jquery');
var async = require('async');

var hbs = require('./templates');

$(function() {
  var template = hbs.getIndex();
  var html = template('test!!');

  async.series([
    function(next) {
      console.log('test1');
      next();
    },
    function(next) {
      console.log('test2');
      next();
    }
  ], function() {
    $('#main').html(html);
  });
});
