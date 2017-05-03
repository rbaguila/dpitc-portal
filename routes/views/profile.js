var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals; 

  var pageData = {
    loginRedirect: '/profile',
    breadcrumbs: [
      { text: 'Profile', link: '/profile' },
    ]
  }

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

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;
    if(currentUser){
      isLOUser = true;
    }
    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var reqData = http.request(options, function(res) {  
        res.setEncoding('utf8');    
        res.on('data', function (chunk) {  
            var obj = JSON.parse(chunk);
            var newVisit = new ELearningVisit.model({
              ip: obj.ip,
              country_code: obj.country_code,
              region: obj.region_name,
              city: obj.city,
              isUser: isLOUser
            });
            newVisit.save(function(err) {
              
            });
        });    
    });

    reqData.write('data\n');
    reqData.write('data\n');
    reqData.end();
    next();
  });

  view.render('profile', pageData);
};