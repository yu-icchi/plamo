/**
 * @fileOverview Application
 * @author yu-ichiko@gamil.com
 */

var $ = require('jquery');
var Router = require('director').Router;

var route = require('./route');
var view = require('./view');

/**
 * Application Execute
 */
$(document).ready(function() {

  // Handlebarsのヘルパーのセットアップ
  require('./helper');

  // URIルーティング
  var router = new Router(route);
  router.configure({
    notfound: view.notFound
  });
  router.init('/'); // base root

  // ヘッダーを生成する
  // view.createHeader();
  // メニューバーを生成する
  view.createMenu();

  $('#main').on('click', '#submit', function() {

    $('.form-control').each(function() {
      var id = $(this).attr('id');
      var val = $(this).val();
      console.log(id, val);
    });

  });
});

//$(document).on('click', '#submit', function(e) {
//  console.log('form');
//});
