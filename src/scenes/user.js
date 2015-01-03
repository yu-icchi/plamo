var $ = require('jquery');
var template = require('../templates/user/index.hbs');

exports.render = function(ctx) {
  console.log('user', ctx);
  $('#main').empty().append(template('user'));
};
