var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  var galleryId = req.params.gallery;

  locals.section = 'eresources';
  locals.redirect = '/eresources/gallery?gallery=' + galleryId;

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    { text: 'Galleries', link: '/eresources/galleries'}
  ];

  // view.query('gallery', keystone.list('Gallery').model.findOne({ _id: galleryId }).populate('industry sector commodity'));

  view.render('eresources/gallery');

}
