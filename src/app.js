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
$(function() {

  // Handlebarsのヘルパーのセットアップ
  require('./helper');

  // URIルーティング
  var router = new Router(route);
  router.configure({
    notfound: view.notFound
  });
  router.init('/'); // base root

  // ヘッダーを生成する
  view.createHeader();
  // メニューバーを生成する
  view.createMenu();
});
