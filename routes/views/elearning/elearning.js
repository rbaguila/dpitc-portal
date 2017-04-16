var keystone = require('keystone');
var async = require('async');
var moment = require('moment');

var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');


exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'elearning';

  locals.data = {
    courses: [],
    recommendedLearningObjects: [],
    learningObjectsTaken: [],
  }

  var pageData = {
    loginRedirect: '/elearning', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
    ]
  }

  locals.popularLO = [];

  var tempRecommended = [];
  var tempLearningObjects = [];
  var classifications = ["specificCommodity", "isp", "sector", "industry"];
  var counts = ["specCommCount", "ispCount", "sectorCount", "industryCount"];

  // Load LearningObjects
  view.query('learningObjects', keystone.list('LearningObject').model.find().sort('-PublishedAt').limit(4));

  // Load popular LearningObjects
  view.on('init', function(next) {
    var currentDate = moment().toDate();
    var startDate = moment().subtract(30, 'days').toDate();

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

        locals.popularLOViews = results;
        
        // Add each LearningObject from popularLOViews to popularLO array
        async.each(locals.popularLOViews, function(loview, next) {

          if(locals.popularLO.indexOf(loview.learningObject) === -1){
            locals.popularLO.push(loview.learningObject);  
          }
          
        }, function(err) {
          next(err);
        })

        next();
      });
  });


  // Load Courses
  view.query('courses', keystone.list('Course').model.find().sort('-PublishedAt').limit(4));

  // TODO
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
      var q = keystone.list('LearningObject').model.find().where('_id').in(currentUser.learningObjectsTaken);

      q.exec(function(err, results){
          locals.data.learningObjectsTaken = results;
          console.log(locals.data.learningObjectsTaken.length);
          next(err);
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
          if(notYetTaken(learningObject, locals.data.learningObjectsTaken)==0){
              next();
          }
          else{
              for(var j=0;j<classifications.length;j++){
                  var count = 0; 
                  if(learningObject[classifications[j]]!=null){
                    var learningObjectClassId = learningObject[classifications[j]] + "";
                      for(var i=0;i<locals.data.learningObjectsTaken.length;i++){
                          var eachTakenClassId = locals.data.learningObjectsTaken[i][classifications[j]] + "";
                          if(eachTakenClassId!=null&&learningObjectClassId==eachTakenClassId){
                              count++;
                          }
                      }
                  }
                  learningObject[counts[j]] = count;
              }
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
      //TO DO
      /*
      if(locals.data.learningObjectsTaken.length==0){
        var q = keystone.list('LearningObject').model.find().where('ISP').in(locals.data.currentLearner.preference);

        q.exec(function(err, results){
            locals.data.preferredISPs = results;
            next(err);
        });
      }
      */
      //get the preferred ISPS here for the initial recommended learning materials
      next();
    }
  });

  //function for checking if the specific course was already taken by the logged in user
  function notYetTaken(learningObject, learningObjectsTaken){
    var flag = 0;
    var learningObjectId = learningObject._id + "";
    for(var i=0;i<learningObjectsTaken.length;i++){
        var learningObjectsTakenId = learningObjectsTaken[i]._id + "";
        if(learningObjectId==learningObjectsTakenId){
            flag = 1;
            return 0;
        }
    }
    if(flag==0) return 1;
  }

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
          console.log("FINAL SCORE: " + tempRecommended[i].score);
      }*/
    }
    else{
      locals.data.recommendedLearningObjects = tempLearningObjects.slice(0, 4);
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
