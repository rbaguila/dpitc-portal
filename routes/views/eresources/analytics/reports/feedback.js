var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.redirect = '/eresources/reports/feedback';
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources' },
    { text: 'Reports', link: '/eresources/reports' },
    { text: 'Feedback', link: '/eresources/reports/feedback' }
  ];

  view.on('post', { action: 'download-all-totals' }, function(next) {
    var data = req.body;

    var url = '/api/publications/reports/feedback?pubID=' + data.publicationID + '&pubTitle=' + data.publicationTitle;

    return res.redirect(url);
  });

  view.on('post', { action: 'download-range' }, function(next) {
    var data = req.body;

    var url = '/api/publications/reports/feedback?pubID=' + data.pubID + '&pubTitle=' + data.pubTitle + '&start=' + data.start + '&end=' + data.end;

    return res.redirect(url);
  });


  view.query('publications', keystone.list('publications').model.find({}).populate('publicationLine'));

  view.render('eresources/analytics/reports/feedback');
}