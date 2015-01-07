var home = require('./scenes/home');
var user = require('./scenes/user');
var form = require('./scenes/form');

// ルーティング設定
module.exports = {
  '/': home.render,
  '/user': user.render,
  '/user/:id': user.render,
  '/user/:id/#form': form.render,
  '/form': form.render
};
