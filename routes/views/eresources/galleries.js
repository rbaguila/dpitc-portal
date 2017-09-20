var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'eresources';
  locals.redirect = '/eresources/galleries/';

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    { text: 'Galleries', link: '/eresources/galleries'}
  ];

  locals.endpoint = '/eresources/galleries';
  locals.query = '';
  locals.galleries = [];

  var Galleries = keystone.list('Gallery');
  Galleries.paginate({
    page: req.query.page || 1,
    perPage: 10,
    maxPage: 10,
    filters: {}
  }).exec(function(err, results) {
    locals.galleries = results;

    view.render('eresources/galleries');
  });
}
