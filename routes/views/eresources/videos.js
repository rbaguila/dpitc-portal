var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'eresources';
  locals.redirect = '/eresources/videos/';

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    { text: 'Videos', link: '/eresources/videos'}
  ];

  locals.endpoint = '/eresources/videos';
  locals.query = '';
  locals.videos = [];

  var Videos = keystone.list('Video');
  Videos.paginate({
    page: req.query.page || 1,
    perPage: 12,
    maxPage: 10,
    filters: {}
  }).exec(function(err, results) {
    locals.videos = results;

    view.render('eresources/videos');
  });

}
