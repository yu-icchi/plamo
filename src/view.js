/**
 * @fileOverview View
 * @author yu-ichiko@gmail.com
 */

var $ = require('jquery');
var Handlebars = require('handlebars');
var propertyPath = require('property-path');

/**
 * Handlebarsのテンプレート
 * ※テンプレート情報はgulpでビルドして1つにまとめグローバルからアクセスできるようにしている。
 * @param {string} path - ファイル名
 * @param {Object} data - データ
 */
exports.render = function(path, data) {

  var template = propertyPath.get(global.views, path);

  var html;
  if (!template) {
    console.error('template error. path:', path);
    html = '<span>Template View Error</span>';
  } else {
    html = template(data);
  }

  $('#main').empty().html(html);
};

/**
 * 404
 */
exports.notFound = function() {
  $('#main').empty().text('not found!');
};
