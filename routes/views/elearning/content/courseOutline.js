var keystone = require('keystone');
var http = require('http');
var async = require('async');

var helper = require('./../helper');

var LearningObject = keystone.list('LearningObject');
var LearningContent = keystone.list('LearningContent');
var ELearningLog = keystone.list('ELearningLog');
var ELearningVisit = keystone.list('ELearningVisit');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';
  locals.url = '/elearning/course/'+req.params.courseslug+'?';

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;
  locals.sort = req.query.sort == undefined ? 'titleAZ' : req.query.sort;

  locals.formData = req.body || {};

  locals.currslug = req.params.courseslug;
  
  locals.tempOutline = [];
  locals.outline = [];
  locals.data = {
    courses: [],
    chapters: [],
  };

  var pageData = {
    loginRedirect: '/elearning/course/'+req.params.courseslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.courseslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug },
    ]
  }

  /* Search */
  view.on('get', { action: 'elearning.search' }, function (next) {
    return res.redirect('/elearning/search?key='+req.query.search+'&from='+locals.url);
    next();

  });

  
  // Load the current course
  view.on('init', function(next){
    Course.model.findOne({
      slug: req.params.courseslug,
      state: 'published',
    })  
    .populate('outline')
    .exec(function(err, result){
      if(result != null){
        locals.currentCourse = result;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Course: '+ req.params.courseslug +' not found! (404)'));
      }
      next(err);
    });
  });

  // Populate LearningObject Videos
  view.on('init', function(next) {
    //console.log(locals.currentCourse.outline);
    async.each(locals.currentCourse.outline, function(learningObject, next) {
      LearningObject.model.findOne({
          _id: learningObject._id
        })
        .populate('video author')
        .exec(function(err, result) {
          if (err) return next(err);
  //        console.log(result);
 //         learningObject = result;
          locals.outline.push(result);
          next();
        });
    }, function (err) {
      next(err);
    });

  });

  view.on('init', function(next) {


    locals.outline.sort( function (a, b) {
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


  // Render the view
  view.render('elearning/content/courseOutline', pageData);

};
