
var $ = require('jquery');

var serialize = require('./serialize');

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

exports.createForm = function(specs) {
  var main = $('#main');

  main.on('click', '#submit', function(e) {
    e.preventDefault();

    var data = $('#form-specs');
    console.log('------------');
    console.log(serialize(data));
    console.log('------------');

    return false;
  });

  main.on('click', '.array_add_btn', function(e) {

    console.log('array_add_btn');

    return false;
  });
};
