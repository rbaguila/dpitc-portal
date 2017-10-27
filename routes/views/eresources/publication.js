var keystone = require('keystone');
var User = keystone.list('User');
var Publication = keystone.list('Publication');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  var pubId = req.params.publication;

  locals.section = 'eresources';
  locals.currentPublicationID = req.params.publication;
  locals.redirect = '/eresources/publication/' + req.params.publication;
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources' },
    { text: 'Publications', link: '/eresources/publications' }
  ];

  // Check if user needs to rate a previous download
  if (req.user) {
    var user = req.user;
    if (user.needsReviewing) {
      locals.needsReviewing = user.needsReviewing;
      locals.userID = user._id;
    }
  }

  view.on('post', { action: 'generate-download-link' }, function(next) {

    // Increment analytics
    Publication.model.findOneAndUpdate(
      { _id: req.body.toReview },
      { $inc: { downloads: 1 } },
      function(err, res) {
        if (err, res) {
          if (err) {
            console.log('Error incrementing download count');
          } else {
            console.log('Incremented download count');
          }
        }
      }
    )

    User.model.findOneAndUpdate(
      { _id: req.body.userID },
      { $set: { needsReviewing: req.body.toReview } },
      function(err, res) {
        if (err) { }
        else {
          locals.clearedToDownload = true;

          return next();
        }
      })
  });

  view.on('post', { action: 'download' }, function(next) {
    var url = '/api/publications/download?pubID=' + req.body.pubID;

    return res.redirect(url);
  });

  view.query('publication', keystone.list('Publication').model.findOne({_id: pubId}).populate('industry sector commodity publicationLine'));

  view.render('eresources/publication');

}
