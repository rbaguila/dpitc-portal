var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'eresources';
  locals.redirect = '/eresources/publication/' + req.params.publication;
  locals.toReview = req.params.publication;
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'}
  ];

  // Check if user needs to rate a previous download
  if (req.user) {
    var user = req.user;
    if (user.needsReviewing) {
      locals.needsReviewing = user.needsReviewing;
      locals.userID = user._id;
    }
  }

  var pubId = req.params.publication;

  view.on('post', { action: 'to-review'}, function(next) {
    console.log('POSTED to-review');

    Publication.model.findOne(
      { _id: pubId },
      function(error, publication) {
        // setTimeout('window.location = '', 5000);
        return res.redirect(locals.redirect);
      });

  });

  // view.on('render', function() {
  //   console.log('Rendering finished...');
  //   });

  view.query('publication', keystone.list('Publication').model.findOne({_id: pubId}).populate('industry sector commodity publicationLine'));

  view.render('eresources/publication');

}