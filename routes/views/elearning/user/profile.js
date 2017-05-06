var keystone = require('keystone');
var http = require('http');

var helper = require('./../helper');

var ELearningVisit = keystone.list('ELearningVisit');
var User = keystone.list('User');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals; 

  locals.section = 'profile';
  locals.nav = req.query.nav == undefined ? 'view' : req.query.nav;
  
  locals.sexTypes = User.fields.sex.ops;
  locals.suburbs = helper.cities;
  locals.states = helper.regions;

  locals.formData = req.body || {};
  locals.validationErrors = {};
  
  var pageData = {
    loginRedirect: '/elearning/profile',
    breadcrumbs: [
      { text: 'Elearning', link: '/elearning' },
      { text: 'Profile', link: '/elearning/profile' },
      
    ]
  }

  view.on('post', { action: 'user.editProfile' }, function (next) {

    User.model.findOneAndUpdate( 
      { _id: locals.user._id }, 
      { 
        name: { 
          first: (locals.formData.first ? locals.formData.first : locals.user.name.first),
          last: (locals.formData.last ? locals.formData.last : locals.user.name.last),  
        },
        location: {
          suburb: locals.formData.suburb,
          state: locals.formData.state,
          country: (locals.formData.country ? locals.formData.country : locals.user.location.country),
        }, 
      },
      function(err, results) {
        if (err) return next(err);
        return res.redirect('/elearning/profile');
        next();  
      }
    );

    var updater = locals.user.getUpdateHandler(req);

    updater.process(req.body, {
      //fields: 'name',
      flashErrors: true,
      logErrors: true
    }, function (err, result) {
      if (err) {    
          locals.validationErrors = err.errors; 
        } else {
          console.log(locals.user);
          req.flash('success', 'Account updated.');         
          return res.redirect('/elearning/profile');
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
        locals.validationErrors = err.errors; 
      } else {
        req.flash('success', 'Password changed.');         
        return res.redirect('/elearning/profile');
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
        locals.validationErrors = err.errors; 
      } else {
        req.flash('success', 'Photo changed.');         
        return res.redirect('/elearning/profile');
      }
      next();
    });
  
  });

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;//suburb = city/municipality, state = region

    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var getGeoLocation = false;
    if(currentUser){
      isLOUser = true;
      if(currentUser.location.suburb!=null&&currentUser.location.state!=null){
         var newVisit = new ELearningVisit.model({
            country_code: 'PH',
            region: currentUser.location.state,
            city: currentUser.location.suburb,
            isUser: isLOUser
          });
          newVisit.save(function(err) {
          });
      }
      else{
        getGeoLocation = true;
      }
    }
    else{
      getGeoLocation = true;
    }
    if(getGeoLocation==true){
      var reqData = http.request(options, function(res) {
        if (('' + res.statusCode).match(/^2\d\d$/)) {
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
                console.log("success in inserting geolocation");
              });
          });
        }
        else if (('' + res.statusCode).match(/^5\d\d$/)){

        }
      });
      reqData.on('error', function (e) {
        console.log('error getting geolocation');
      });
      reqData.write('data\n');
      reqData.write('data\n');
      reqData.end();
    }
    next();
  });

  view.render('elearning/user/profile', pageData);
};