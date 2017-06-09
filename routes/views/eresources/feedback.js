var keystone = require('keystone');
var Types = keystone.Field.Types;
var Publication = keystone.list('Publication');
var Feedback = keystone.list('PublicationFeedback');


exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'}
  ];

  if (!req.body.userID  || !req.body.publicationID) {
    console.log('Nothing to Review!');
  }

  locals.formData = req.body || { userID: req.body.userID, publicationID: req.body.publicationID }
  // locals.userID = req.body.userID;
  // locals.publicationID = req.body.publicationID;
  locals.redirect = req.body.redirect;

  Publication.model.findOne(
    { _id: req.body.publicationID },
    'title',
    function(error, publication) {
      locals.title = publication.title;

      view.render('eresources/feedback');
    });

  view.on('post', { action: 'feedback' }, function(next) {
    // Create New Feedback
    var newFeedback = new Feedback.model({
      publication: locals.formData.publicationID,
      user: locals.formData.userID,
      content: locals.formData.content,
      usefulness: locals.formData.usefulness,
      design: locals.formData.design,
      responseTime: locals.formData.responseTime
    });

    console.log(newFeedback);

    var updater = newFeedback.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true,
      logErrors: true,
    }, function(err, result) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        // Delete needsReviewing from User Data

        // Redirect back to publication
        req.flash('success', 'Thank you for rating ' + locals.title);
        return res.redirect(locals.redirect);
      }
    }
    )

  })
}
