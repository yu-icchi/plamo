
var $ = require('jquery');

var menu = require('./templates/menu.hbs');
var header = require('./templates/header.hbs');

exports.notFound = function() {
  $('#main').empty().text('not found!');
};

exports.createMenu = function() {
  $('#menu').empty().append(menu());
};

exports.createHeader = function() {
  $('#header').empty().append(header());
};
