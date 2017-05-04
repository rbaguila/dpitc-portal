var keystone = require('keystone');
var async = require('async');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');

var User = keystone.list('User');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'userActivity';
  locals.nav = locals.nav ? 'views' : locals.nav;

  var pageData = {
    loginRedirect: '/elearning/user-activity?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'user activity', link: '/elearning/user-activity?'}
    ]
  };

  var viewPage = req.query.viewPage == undefined ? 1 : req.query.viewPage;
  var likePage = req.query.likePage == undefined ? 1 : req.query.likePage;
  

  // Load all LOViews by user
  view.on('init', function (next) {

    LOView.paginate({
        page: req.query.viewPage,
        perPage: 8,
        filters: { 'user': locals.user._id }
      })
      .sort('-dateViewed')
      .populate('learningObject')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.user.loviews = results;
        next();

      });

  });

  // Load all learningObjects liked by User?
  view.on('init', function (next) {
    
    LearningObject.paginate({
        page: req.query.likePage,
        perPage: 8,
        filters: { 'likes': { $elemMatch: { $eq: locals.user._id } } }
      })
      .exec(function (err, results) {

        if (err) return next(err);
        locals.user.likedLO = results;
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
      // General error, i.e.
      //  - ECONNRESET - server closed the socket unexpectedly
      //  - ECONNREFUSED - server did not listen
      //  - HPE_INVALID_VERSION
      //  - HPE_INVALID_STATUS
      //  - ... (other HPE_* codes) - server returned garbage
      console.log('error getting geolocation');
    });
    reqData.write('data\n');
    reqData.write('data\n');
    reqData.end();
    next();
  });

  view.render('elearning/user/userActivity', pageData);
}