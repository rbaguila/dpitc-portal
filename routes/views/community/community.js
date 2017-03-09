var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  
  view.query('trainings', keystone.list('Training').model.find());
  view.query('events', keystone.list('Event').model.find());

  view.render('community/community');
}