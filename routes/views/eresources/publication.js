var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  // locals.data = {

  // }

  locals.redirect = '/eresources';
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'}
  ];

  // Check if user needs to accomplish a form
  if (req.user) {
    var user = req.user
    if (user.needsReviewing) {
      locals.needsReviewing = user.needsReviewing
    }
  }


  var pubId = req.params.publication;

  view.query('publication', keystone.list('Publication').model.findOne({_id: pubId}).populate('industry sector commodity publicationLine'));

  view.render('eresources/publication');

}