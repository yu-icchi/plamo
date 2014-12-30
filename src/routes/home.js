var view = require('../view');

module.exports = function(ctx, next) {
  console.log('home');
  view.render('home', 'yu-ichiko');
};