var view = require('../view');

module.exports = function(ctx, next) {
  console.log('user', ctx.params.id);
  view.render('user.index', 'user');
};
