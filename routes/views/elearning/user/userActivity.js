var keystone = require('keystone');
var async = require('async');
var http = require('http');

var helper = require('./../helper');

var ELearningVisit = keystone.list('ELearningVisit');
var User = keystone.list('User');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'user-activity';
  locals.nav = req.query.nav == undefined ? 'views' : req.query.nav;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;
  locals.learningObjects = [];
  locals.loviews = [];

  if(locals.nav == 'views') {
    locals.url = '/elearning/user-activity?nav=views&';
    locals.reactfilters = { 
      'user': locals.user._id 
    };
  } else if(locals.nav == 'likes') {
    locals.url = '/elearning/user-activity?nav=likes&';
    locals.reactfilters = { 
      'likes': { $elemMatch: 
        { $eq: locals.user._id } 
      } 
    };
  } else if(locals.nav == 'happy') {
    locals.url = '/elearning/user-activity?nav=happy&';
    locals.reactfilters = { 
      'happy': { $elemMatch: 
        { $eq: locals.user._id } 
      } 
    };
  } else if(locals.nav == 'sad') {
    locals.url = '/elearning/user-activity?nav=sad&';
    locals.reactfilters = { 
      'sad': { $elemMatch: 
        { $eq: locals.user._id } 
      } 
    };
  }
    

  var pageData = {
    loginRedirect: '/elearning/user-activity?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'user activity', link: '/elearning/user-activity?'}
    ]
  };

  

  // Load all LOViews by user
  view.on('init', function (next) {

    LOView.paginate({
        page: locals.page,
        perPage: 8,
        filters: locals.reactfilters,
      })
      .sort('-dateViewed')
      .populate('learningObject')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.loviews = results;
        
        next();

      });

  });

  // Load all learningObjects liked by User?
  view.on('init', function (next) {
    
    LearningObject.paginate({
        page: locals.page,
        perPage: 8,
        filters: locals.reactfilters,
      })
      .sort('-title')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.learningObjects = results;
        next();

      });
  
  });

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;//suburb = city/municipality, state = region

    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
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

  view.render('elearning/user/userActivity', pageData);
}