var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals; 

  locals.data = {
    validationErrors: [],
  };

  locals.formData = req.body || {};

  view.on('post', { action: 'user.editProfile' }, function (next) {

    User.model.findOneAndUpdate( 
      { _id: locals.user._id }, 
      { name: { 
        first: (locals.formData.first ? locals.formData.first : locals.user.name.first),
        last: (locals.formData.last ? locals.formData.last : locals.user.name.last),  
        } 
      },
      function(err, results) {
        if (err) return next(err);
        return res.redirect('/profile');
        next();  
      }
    );

    var updater = locals.user.getUpdateHandler(req);

    updater.process(req.body, {
      fields: 'name, photo',
      flashErrors: true,
      logErrors: true
    }, function (err, result) {
      if (err) {    
          locals.data.validationErrors = err.errors; 
        } else {
          req.flash('success', 'Account updated.');         
          return res.redirect('/profile');
        }
        next();
    });

  });

  view.on('post', { action: 'profile.editPassword' }, function(next) {
  
    if (!req.body.password || !req.body.password_confirm) {
      req.flash('error', 'Please enter a password.');
      return next();
    }
  
    var updater = locals.user.getUpdateHandler(req);

    updater.process(req.body, {
      fields: 'password',
      flashErrors: true,
      logErrors: true
    }, function (err, result) {
      if (err) {    
        locals.data.validationErrors = err.errors; 
      } else {
        req.flash('success', 'Password changed.');         
        return res.redirect('/profile');
      }
      next();
    });
  
  });

  // TODO got stuck here, Photo is invalid error
  view.on('post', { action: 'profile.uploadPhoto' }, function(next) {
  
    if (!req.body.photo) {
      req.flash('error', 'Please select an image.');
      return next();
    }
  
    var updater = locals.user.getUpdateHandler(req);

    updater.process(req.body, {
      fields: 'photo',
      flashErrors: true,
      logErrors: true
    }, function (err, result) {
      if (err) {    
        locals.data.validationErrors = err.errors; 
      } else {
        req.flash('success', 'Photo changed.');         
        return res.redirect('/profile');
      }
      next();
    });
  
  });


  view.render('profile');
};