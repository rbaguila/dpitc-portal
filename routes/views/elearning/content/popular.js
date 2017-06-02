var keystone = require('keystone');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');
var http = require('http');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var Course = keystone.list('Course');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');
var ELearningVisit = keystone.list('ELearningVisit');
var ELearningLog = keystone.list('ELearningLog');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'elearning';
  locals.url = '/elearning/learning-objects/popular?';    
  
  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.duration = req.query.duration == undefined ? 'month': req.query.duration; 
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;
  locals.sort = req.query.sort == undefined ? 'titleAZ' : req.query.sort;

  

  locals.formData = req.body || {};

  var tempPopularLO = [];
  locals.popularLO = [];
  var pastLOviews = [];

  var pageData = {
    loginRedirect: '/elearning/learning-objects/popular?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'popular', link: '/elearning/learning-objects/popular?' },
    ]
  }

  /* Search */
  view.on('get', { action: 'elearning.search' }, function (next) {
    return res.redirect('/elearning/search?key='+req.query.search+'&from='+locals.url);
    next();

  });


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

  // Populate LearningObject Videos
  view.on('init', function(next) {
    async.each(locals.popularLO, function(learningObject, next) {
      LearningObject.model.findOne({
          _id: learningObject._id
        })
        .populate('author video')
        .exec(function(err, result) {
          if (err) return next(err);
        //  console.log(result);

          tempPopularLO.push(result);
          next();
        });
    }, function (err) {
      next(err);
    });

  });

  view.on('init', function(next) {

    tempPopularLO.sort( function (a, b) {
      switch(locals.sort) {
        case 'titleAZ':
          return a.title.localeCompare(b.title);
          break;
        case 'titleZA':
          return b.title.localeCompare(a.title);
          break;
        case 'authorAZ':
          return a.author.name.localeCompare(b.author.name);
          break;
        case 'authorZA':
          return b.author.name.localeCompare(a.author.name);
          break;
        case 'dateNew':
          return new Date(b.publishedAt) - new Date(a.publishedAt);
          break;
        case 'dateOld':
          return new Date(a.publishedAt) - new Date(b.publishedAt);
          break;
        default:
          return a.title - b.title;
      }
    //  return parseFloat(b.viewCount) - parseFloat(a.viewCount); 
    });


    // paginate locals.popularLO
    locals.paginatePopularLO = helper.paginate(tempPopularLO, locals.page, locals.perPage);
    next();
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

          var newLog = new ELearningLog.model({
                //ip: obj.ip,
                user: currentUser.email,
                event: 'VISITED '+ locals.url,
              });
              newLog.save(function(err) {
                console.log(newLog.user + ' ' + newLog.event);
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

              var newLog = new ELearningLog.model({
                user: obj.ip,
                event: 'VISITED '+ locals.url,
              });
              newLog.save(function(err) {
                console.log(newLog.user + ' ' + newLog.event);
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

  
  view.render('elearning/content/popular', pageData);
}
