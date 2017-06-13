var keystone = require('keystone');
var Types = keystone.Field.Types;
var Publication = keystone.list('Publication');
var Feedback = keystone.list('PublicationFeedback');
var User = keystone.list('User');


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

  locals.formData = {
    publicationID: req.body.publicationID ? req.body.publicationID : '',
    userID: req.body.userID ? req.body.userID : '',
    content: req.body.content ? req.body.content : '',
    usefulness: req.body.usefulness ? req.body.usefulness : '',
    design: req.body.design ? req.body.design : '',
    response: req.body.response ? req.body.response : '',
    comments: req.body.comments ? req.body.comments : '',
  }

  locals.formData.userID = req.body.userID;
  locals.formData.publicationID = req.body.publicationID;
  locals.redirect = req.body.redirect;

  Publication.model.findOne(
    { _id: req.body.publicationID },
    'title',
    function(error, publication) {
      locals.title = publication.title;

      view.render('eresources/feedback');
    });

  view.on('post', { action: 'submit-feedback' }, function(next) {
    // Create New Feedback
    var newFeedback = new Feedback.model({
      // publication: locals.formData.publicationID,
      publication: locals.formData.publicationID,
      user: locals.formData.userID,
      content: locals.formData.content,
      usefulness: locals.formData.usefulness,
      design: locals.formData.design,
      responseTime: locals.formData.response,
      comments: locals.formData.comments
    });

    // Save new feedback
    newFeedback.save(function(err) {
      if (err) {
        // Warning message
        req.flash('warning', 'Unable to submit feedback at this time. Please try again later.');
        return res.redirect(locals.redirect);
      } else {
        // Delete needsReviewing from User Data
        User.model.findOneAndUpdate(
          { _id: locals.formData.userID },
          { $unset: { needsReviewing: 1 } },
          function(err, res) {
            if (err) { }
            else {
              console.log('Successfully deleted needsReviewing');
            }
          }
        );

        req.flash('success', 'Thank you for rating ' + locals.title);
        return res.redirect(locals.redirect);
      }
    });

  })
}
