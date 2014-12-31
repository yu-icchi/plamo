/**
 * @fileOverview home
 * @author yu-ichiko@gmail.com
 */

var $ = require('jquery');
var template = require('../templates/home.hbs');

module.exports = function(ctx, next) {
  console.log('home');
  $('#main').empty().append(template({test:'home'}));
};
