var keystone = require('keystone');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');
var http = require('http');

var helper = require('./helper');

var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');
var ELearningVisit = keystone.list('ELearningVisit');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'elearning';
  locals.url = '/elearning/learning-objects/popular?';

  var pageData = {
    loginRedirect: '/elearning/popular?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'popular', link: '/elearning/learning-objects/popular?' },
    ]
  }

  locals.popularLO = [];

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.duration = req.query.duration == undefined ? 'month': req.query.duration; 
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  var pastLOviews = [];

  // Get all LOViews withing the past 30 days.
  view.on('init', function (next) {

    var currentDate = moment().toDate();
    var startDate;

    if (locals.duration=='day') 
      startDate = currentDate
    else if (locals.duration=='week')
      startDate = moment().subtract(7, 'days').toDate();
    else if (locals.duration=='month')
      startDate = moment().subtract(30, 'days').toDate();

    LOView.model.find({
      dateViewed: { 
        $gte: startDate, 
        $lt: currentDate
      }
      })
      .populate('learningObject')
      .sort('-dateViewed')
      .exec(function(err, results) {
        if(err) return next(err);

        pastLOviews = results;

        // Get loview.count of all same learningObjects
        async.each(pastLOviews, function(loview, next) {
          //console.log(loview.learningObject);

          LOView.model.find({
            dateViewed: {
              $gte: startDate,
              $lt: currentDate
            },
            learningObject: loview.learningObject._id
           })
          .count()
          .exec(function (err, count) {
            
            if (err) return next(err);
            
            loview.learningObject.viewCount = count;
            
            // Uniquely push to locals.popularLO[]
            if (locals.popularLO.indexOf(loview.learningObject) === -1) {
              locals.popularLO.push(loview.learningObject);
            }            

            next();
          })
        
        }, function(err) {
          next(err);
        });
        
      });
      
  });

  view.on('init', function(next) {
    // Sort locals.popularLO[]
    locals.popularLO.sort( function (a, b) {
      return parseFloat(b.viewCount) - parseFloat(a.viewCount); 
    });

    // paginate locals.popularLO
    locals.paginatePopularLO = helper.paginate(locals.popularLO, locals.page, locals.perPage);
   
    next();
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
  
  view.render('elearning/popular', pageData);
}
