var $ = require('jquery');
var template = require('../templates/user/index.hbs');

module.exports = function(ctx, next) {
  console.log('user');
  $('#main').empty().append(template('user'));
};
