var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.redirect = '/eresources/reports';
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources' },
    { text: 'Reports', link: '/eresources/reports' }
  ]

  view.query('topDownloads', keystone.list('Publication').model.find({}).sort('-downloads').limit(5).populate('publicationLine'));
  view.query('latestReviews', keystone.list('PublicationFeedback').model.find({}).sort('-createdAt').populate('publication user'));

  view.render('eresources/analytics/dashboard');
}