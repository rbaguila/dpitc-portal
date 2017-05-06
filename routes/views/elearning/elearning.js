var keystone = require('keystone');
var http = require('http');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');

var helper = require('./helper');

var LearningContent = keystone.list('LearningContent');
var Course = keystone.list('Course');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');
var ELearningVisit = keystone.list('ELearningVisit');


exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'elearning';
  locals.url = '/elearning?';
  
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  6 : req.query.perPage;
  
  locals.formData = req.body || {};

  locals.searchSubmitted = false;
  locals.searchUrl = locals.url + 'action=elearning.search&search=';
  locals.searchResults = [];

  locals.data = {
    courses: [],
    recommendedLearningObjects: [],
    learningObjectsTaken: [],
    likedLO: [],
    happyLO: [],
    sadLO: []
  }
  
  locals.popularLO = [];

  var tempRecommended = [];
  var tempLearningObjects = [];

  var pageData = {
    loginRedirect: '/elearning', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
    ]
  }

  /* Search */
  view.on('get', { action: 'elearning.search' }, function (next) {
    
    locals.searchSubmitted = true;
    locals.searchUrl = locals.searchUrl+req.query.search+'&';

    LearningContent.model.find(
        { $text: { $search: req.query.search } },
        { score: { $meta: "textScore" } }
      )
      .sort( { score: { $meta: "textScore" } } )
      .exec( function(err, results) {
        if (err || !results.length){
          return next(err);
        }
        locals.searchResults = results;

        locals.paginatedSearchResults = helper.paginate(locals.searchResults, locals.page, locals.perPage);
        next(err);
      });

  });

  // Load LearningObjects
  view.query('learningObjects', keystone.list('LearningObject').model.find().sort('-PublishedAt').limit(4));

   // Load popular LearningObjects
  view.on('init', function(next) {
    var currentDate = moment().toDate();
    var startDate = moment().subtract(30, 'days').toDate();
    var pastLOviews = [];

    // Get all LOViews withing the past 30 days.
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

      }, function (err) {
        next(err);
      });

    });

  });

  view.on('init', function(next) {
    // Sort locals.popularLO[]
    locals.popularLO.sort( function (a, b) {
      return parseFloat(b.viewCount) - parseFloat(a.viewCount); 
    });

    for(var i=0; i<locals.popularLO; i++) {
      console.log(locals.popularLO[i].title);
    }

    // paginate locals.popularLO
    locals.paginatePopularLO = helper.paginate(locals.popularLO, locals.page, locals.perPage);
   
    next();
  });



  // Load Courses
  view.query('courses', keystone.list('Course').model.find().sort('-PublishedAt').limit(4));

  // Load recommended learning objects

  //get all the learning objects
  view.on('init', function(next){
    var q = keystone.list('LearningObject').model.find();

    q.exec(function(err, results){
        tempLearningObjects = results;
        next(err);
    });
  });

  //get the Learning Objects Taken by the current logged-in user
  view.on('init', function(next){
    var currentUser = locals.user;
    if(currentUser){
      var q = LearningObject.model.find().where('_id').in(currentUser.learningObjectsTaken).populate('isp sector industry');

      q.exec(function(err, results){
          if(results!=null||results.length>0){
            locals.data.learningObjectsTaken = results;
          }
          //console.log(locals.data.learningObjectsTaken.length);
          next(err);
      });
    }
    else{
      next();
    }
  });

  //get the liked Learning objects of the current user
  view.on('init', function (next) {
    if(locals.user){
      LearningObject.model.find({
        likes: { $elemMatch: { $eq: locals.user._id } }
      })
      .populate('isp sector industry')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.data.likedLO = results;
        next();

      });
    }
    else{
      next();
    }
  });

  //get the reacted (happy) Learning objects of the current user
  view.on('init', function (next) {
    if(locals.user){
      LearningObject.model.find({
        happy: { $elemMatch: { $eq: locals.user._id } }
      })
      .populate('isp sector industry')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.data.happyLO = results;
        next();

      });
    }
    else{
      next();
    }
  });

  //get the reacted (sad) Learning objects of the current user
  view.on('init', function (next) {
    if(locals.user){
      LearningObject.model.find({
        sad: { $elemMatch: { $eq: locals.user._id } }
      })
      .populate('isp sector industry')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.data.sadLO = results;
        next();

      });
    }
    else{
      next();
    }
  });

  //compute for the score of each learning objects based on the ISP, sector and industry tags of the learning objects taken by the logged-in user
  view.on('init', function(next){
    if(locals.data.learningObjectsTaken.length>0){
      async.each(tempLearningObjects, function (learningObject, next) {
          if(helper.notYetTaken(learningObject, locals.data.learningObjectsTaken)==0){
              next();
          }
          else{
              var learningObject = helper.getCountLOTaken(learningObject, locals.data.learningObjectsTaken);
              learningObject = helper.getCountLiked(learningObject, locals.data.likedLO);
              learningObject = helper.getCountHappy(learningObject, locals.data.happyLO);
              learningObject = helper.getCountSad(learningObject, locals.data.sadLO);
              var score = (4 * (learningObject.specCommCount)) + (3 * (learningObject.ispCount)) + (2 * (learningObject.sectorCount)) + (1 * (learningObject.industryCount));
              if(score>0){//change this to change the threshold of score or compute for a just right threshold
                  learningObject.score = score;
                  tempRecommended.push(learningObject);
              }
              next();
          }
      }, function (err) {
          next(err);
      });
    }
    else{
      next();
    }
  });

  //sort the learning objects based on their score then get the top N or top 3 learning objects
  view.on('init', function(next){
    locals.data.recommendedLearningObjects = [];
    if(tempRecommended.length>0){
      tempRecommended.sort(function(a,b){
          return parseFloat(b.score) - parseFloat(a.score);
      });
      locals.data.recommendedLearningObjects = tempRecommended.slice(0, 4);//temporary
      //locals.data.recommendedLearningObjects = tempRecommended.slice(0, 36);//final, 36 recommended videos in youtube too
      /*for(var i=0;i<tempRecommended.length;i++){
          //console.log("SPECIFIC COMMODITY " + tempRecommended[i].specCommCount);
          //console.log("ISP " + tempRecommended[i].ispCount);
          //console.log("Sector " + tempRecommended[i].sectorCount);
          //console.log("Industry " + tempRecommended[i].industryCount);
          console.log(tempRecommended[i].title + " - FINAL SCORE: " + tempRecommended[i].score);
      }*/
    }
    else{
      if(tempLearningObjects.length>0){
        locals.data.recommendedLearningObjects = tempLearningObjects.slice(0, 4);
      }
    }
    next();
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

  // TODO
  // Load Reaction Counts of all Learning Objects in a Course
  /*view.on('init', function(next) {
    
    async.series([

      // Load all courses
      function(callback){
        Course.model.find()
          .sort('-PublishedAt')
          .limit(4)
          .populate('outline')
          .exec(function(err, courses) {
            if (err || courses == null) {
              return callback(err);
            }
            locals.data.courses = courses;
            callback();
          });
      },
      // Load all chapters in each course


    ]);
  });*/

  /*view.on('init', function(next) {
    Course.model.find()
      .sort('-PublishedAt')
      .limit(4)
      .populate('outline')
      .exec(function(err, courses) {
        if (err || courses==null){
          return next(err);
        }
        locals.data.courses = courses;

        async.forEach(locals.data.courses, function(course, next) {
          console.log(course.outline.length);

          async.forEach(course.outline, function(chapter, next) {
            console.log(chapter.length);

            async.forEach(chapter, function(learningObject, next) {
              console.log(learningObject);

              next();

            }, function(err) {
              next(err);
            });

          }, function(err) {
            next(err);
          });
          
        }, function(err) {
          next(err);
        });

        next();
      });
  });
*/

  view.render('elearning/elearning', pageData);

}
