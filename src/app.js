/**
 * @fileOverview Application
 * @author yu-ichiko@gamil.com
 */

var $ = require('jquery');
var page = require('page');

var view = require('./view');
var home = require('./routes/home');
var user = require('./routes/user');

/**
 * Application Start
 */
$(function() {

  page('/', home);
  page('/user', user);
  page('/user/:id', user);
  page('*', view.notFound);

  page.start({
    dispatch: true,
    hashbang: true
  });
});
