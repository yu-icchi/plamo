/**
 * @fileOverview Application
 * @author yu-ichiko@gamil.com
 */

/*global window, location*/

var $ = require('jquery');
var _s = require('underscore.string');
var page = require('page');

var home = require('./scenes/home');
var user = require('./scenes/user');
var view = require('./view');

/**
 * location.hash change event
 */
function onHashChange() {
  var hash = _s.strRight(location.hash, '#!');
  // ハッシュ値先にリダイレクトをかける
  page.redirect(hash);
}

/**
 * Application Execute
 */
$(function() {

  // ルーティング設定
  page('/', home);
  page('/user', user);
  page('*', view.notFound);
  page.start({
    hashbang: true
  });

  // ハッシュチェンジイベント設定
  window.onhashchange = onHashChange;
});
