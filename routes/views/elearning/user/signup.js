var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;  

  locals.sexTypes = User.fields.sex.ops;
  locals.formData = req.body || {};
  locals.validationErrors = {};
  

  var pageData = {
    loginRedirect: '/elearning',
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      // still need breadcrumb for course
    ]
  };

  view.on('post', { action: 'user.signup' }, function(next) {
      console.log(locals.formData.first);
      var newUser = new User.model({
        name: {
          first: locals.formData.first,
          last: locals.formData.last
        },
        location: {
          state: locals.formData.state,
          country: locals.formData.country
        },
        isElearningUser: true,
      });

      var updater = newUser.getUpdateHandler(req);

      updater.process(req.body, {
        fields: 'email, password, birthday',
        flashErrors: true,
        logErrors: true
      }, function(err,result) {
        if (err) {    
          locals.validationErrors = err.errors;
        } else {
          console.log(newUser);
          req.flash('success', 'Account created. Please sign in.');         
          return res.redirect('/keystone/signin');
        }
        next();
      });

    });

  view.render('elearning/user/signup', pageData);
};
