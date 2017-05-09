var keystone = require('keystone');
var LOFeedback = keystone.list('LOFeedback');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.url = '/elearning/user-activity/feedback';
  locals.section = 'user-activity';
  locals.feedbackTypes = LOFeedback.fields.feedbackType.ops;
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.feedbackSubmitted = false;

  var pageData = {
    loginRedirect: locals.url, 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'feedback', link: locals.url },
    ]
  }

  view.on('post', { action: 'contact' }, function (next) {

    var application = new LOFeedback.model();
    var updater = application.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        req.flash('success', 'Feedback Submitted.');
        return res.redirect(locals.url);
      }
      next();
    });

  });

  view.render('elearning/user/feedback', pageData);

}
