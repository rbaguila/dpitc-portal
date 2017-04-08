var keystone = require('keystone');
var async = require('async');

var User = keystone.list('User');
var LUser = keystone.list('LUser');

exports = module.exports = function (req, res) {

  if (req.user) {
    return res.redirect('/profile');
  }

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'session';

  locals.formData = req.body || {};

  view.on('post', { action: 'signin' }, function (next) {
      if (!req.body.signin_email || !req.body.signin_password) {
        req.flash('error', 'Please enter your username and password.');
        return next();
      }

      var onSuccess = function() {
        if (req.query && req.query.from) {
          res.redirect(req.query.from);
        } else {
          res.redirect('/');
        }
      }

      var onFail = function() {
        req.flash('error', 'Your username or password were incorrect. Please try again.');
        return next();
      }

      keystone.session.signin({ 
        email: req.body.signin_email, 
        password: req.body.signin_password
      }, req, res, onSuccess, onFail);
    });

  // Render the view
  view.render('signin');

};