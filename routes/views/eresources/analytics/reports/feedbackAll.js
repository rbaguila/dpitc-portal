var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.redirect = '/eresources/reports/feedback-all';
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources' },
    { text: 'Reports', link: '/eresources/reports' },
    { text: 'Feedback-All', link: '/eresources/reports/feedback-all' }
  ];

  view.on('post', { action: 'download-all' }, function(next) {
    var url = '/api/publications/reports/feedback';

    return res.redirect(url);
  });

  view.on('post', { action: 'download-range' }, function(next) {
    var data = req.body;

    if (data.start && data.end) {
      var url = '/api/publications/reports/feedback?start=' + data.start + '&end=' + data.end;

      return res.redirect(url);
    }

    else {
      return res.redirect(locals.redirect);
    }
  });

  view.render('eresources/analytics/reports/feedback-all');

}