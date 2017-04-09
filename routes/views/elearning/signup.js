var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  

  locals.data = {
    validationErrors: [],
  };

  locals.formData = req.body || {};

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
        }
      });

      var updater = newUser.getUpdateHandler(req);

      updater.process(req.body, {
        fields: 'email, password',
        flashErrors: true,
        logErrors: true
      }, function(err,result) {
        if (err) {    
          locals.data.validationErrors = err.errors; 
        } else {
          req.flash('success', 'Account created. Please sign in.');         
          return res.redirect('/keystone/signin');
        }
        next();
      });

    });

  view.render('elearning/signup', pageData);
};
