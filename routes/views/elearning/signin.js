var keystone = require('keystone');
var LUser = keystone.list('LUser');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  var pageData = {
    loginRedirect: '/elearning',
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      // still need breadcrumb for course
    ]
  }

  locals.formData = req.body || {};

  view.on('post', { action:'user.signin' }, function(next) {

    if (!req.body.signin_email || !req.body.signin_password) {
      req.flash('error', 'Please enter your username and password.');
    }

    var onSuccess = function(){
      if (req.query && req.query.from) {
        res.redirect(req.query.from);
      } else {
        res.redirect('/');
      }
    }

    var onFail = function() {
      req.flash('error', 'Your username or password were incorrect, please try again.');
      return next();
    }

    keystone.session.signin({ email: req.body.signin_email, password: req.body.signin_password }, req, res, onSuccess, onFail);
  })

  view.render('elearning/signin', pageData);
};
