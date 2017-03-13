var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  view.query('publications', keystone.list('Publication').model.find())

  view.render('community/eresources', {loginRedirect: '/eresources'});
}