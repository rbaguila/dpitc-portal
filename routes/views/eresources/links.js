var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'eresources';
  locals.redirect = '/eresources/links/';

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    { text: 'Links', link: '/eresources/links'}
  ];

  locals.endpoint = '/eresources/links';
  locals.query = '';
  locals.links = [];

  var Links = keystone.list('Link');
  Links.paginate({
    page: req.query.page || 1,
    perPage: 10,
    maxPage: 10,
    filters: {}
  }).exec(function(err, results) {
    locals.links = results;

    view.render('eresources/links');
  });

}
