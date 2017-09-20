var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'eresources';
  
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    { text: 'Galleries', link: '/eresources/galleries'}
  ];

  locals.redirect = '/eresources/galleries';

  var galleryId = req.params.galleryId;
  var Galleries = keystone.list('Gallery');

  if (galleryId) {
    // viewing specific gallery
    locals.redirect += '/' + galleryId;

    view.query('gallery', Galleries.model.findOne({ _id: galleryId }).populate('industry sector commodity'));

    view.render('eresources/gallery');
  }

  else {
    // viewing list of galleries
    locals.endpoint = '/eresources/galleries';
    locals.query = '';
    locals.galleries = [];
  
    
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
  
}
