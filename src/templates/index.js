/**
 * @fileOverview Handlebars
 * @author yu-ichiko@gmail.com
 */

var fs = require('fs');
var Handlebars = require('handlebars');

module.exports.getIndex = function() {
  var source = fs.readFileSync(__dirname + '/' + 'index' + '.hbs', 'utf8');
  return Handlebars.compile(source);
};
