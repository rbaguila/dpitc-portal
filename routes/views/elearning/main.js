var keystone = require('keystone');
var async = require('async');

var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('Chapter');
var LUser = keystone.list('LUser');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';
  locals.data = {
    courses: [],
    popularCourses: [],
    recommendedCourses: [],
    coursesTaken: [],

    chapters: [],
    learningObjects: [],
    popularLO: [],
    recommendedLO: [],
    learningObjectsTaken: [],
  };

  var tempRecommended = [];
  var tempCourses = [];
  var classifications = ["specificCommodity", "isp", "sector", "industry"];
  var counts = ["specCommCount", "ispCount", "sectorCount", "industryCount"];

  var userIds = [];

  /* select Courses */
  view.on('init', function(next){
    Course.model.find()
      .where('state', 'published')
      .sort('-PublishedAt')
      .limit(4)
      .exec(function(err, results){
        locals.data.courses = results;

        next(err);
      });
  });

  /* select Chapters */
  view.on('init', function(next){
    Chapter.model.find()
      .where('state', 'published')
      .sort('-PublishedAt')
      .limit(4)
      .exec(function(err, results){
        locals.data.chapters = results;

        next(err);
      });
  });

  /* select LearningObjects */
  view.on('init', function(next){
    LearningObject.model.find()
      .where('state', 'published')
      .sort('-PublishedAt')
      .limit(4)
      .exec(function(err, results){
        locals.data.learningObjects = results;

        next(err);
      });
  });

  // TO DO
  /* select popular Learning Objects */
  view.on('init', function(next){
    LearningObject.model.find()
      .where('state', 'published')
      .sort('-PublishedAt')
      .limit(8)
      .exec(function(err, results){
        locals.data.popularLO = results;

        // hold
        for(var i=0; i<4; i++){
          console.log(results[i].author.name);
          console.log(results[i].reactions);
          console.log(results[i].reactions.likes);
          console.log(results[i].reactions.likes.length);
        }
        next(err);
      });
  });  

  /*view.on('init', function(next){
    LearningObject.model.aggregate([])

    async.each(learningObjects, function(learningObject, next) {

    }, function(err) {
      next(err);
    });
  });
*/
  view.on('init', function(next){
    var q = Course.model.find();

    q.exec(function(err, results){
        tempCourses = results;
        next(err);
    });
  });

  view.on('init', function(next){
    var q = keystone.list('LUser').model.findOne();

    q.exec(function(err, result){
        
        locals.data.currentLearner = result;
        //console.log(locals.data.currentLearner);
        next(err);
    });
  });

  view.on('init', function(next){
    var q = keystone.list('Course').model.find().where('_id').in(locals.data.currentLearner.coursesTaken);

    q.exec(function(err, results){
        locals.data.coursesTaken = results;
        next(err);
    });
  });

  view.on('init', function(next){
    async.each(tempCourses, function (course, next) {
        if(notYetTaken(course, locals.data.coursesTaken)==0){
            next();
        }
        else{
            for(var j=0;j<classifications.length;j++){
                var count = 0;
                if(course[classifications[j]]!=null){
                    for(var i=0;i<locals.data.coursesTaken.length;i++){
                        if(locals.data.coursesTaken[i][classifications[j]]!=null&&course[classifications[j]]==locals.data.coursesTaken[i][classifications[j]]){
                            count++;
                        }
                    }
                }
                course[counts[j]] = count;
            }
            var score = (4 * (course.specCommCount)) + (3 * (course.ispCount)) + (2 * (course.sectorCount)) + (1 * (course.industryCount));
            if(score>0){//change this to change the threshold of score or compute for a just right threshold
                course.score = score;
                tempRecommended.push(course);
            }
            next();
        }
    }, function (err) {
        next(err);
    });
  });

  function notYetTaken(course, coursesTaken){
    var flag = 0;
    var courseId = course._id + "";
    for(var i=0;i<coursesTaken.length;i++){
        var coursesTakenId = coursesTaken[i]._id + "";
        if(courseId==coursesTakenId){
            flag = 1;
            return 0;
        }
    }
    if(flag==0) return 1;
  }

  view.on('init', function(next){
    tempRecommended.sort(function(a,b){
        return parseFloat(b.score) - parseFloat(a.score);
    });
    locals.data.recommendedCourses = tempRecommended.slice(0, 4);//temporary
    //locals.data.recommendedCourses = tempRecommended.slice(0, 36);//final, 36 recommended videos in youtube too
    /*for(var i=0;i<tempRecommended.length;i++){
        //console.log("SPECIFIC COMMODITY " + tempRecommended[i].specCommCount);
        //console.log("ISP " + tempRecommended[i].ispCount);
        //console.log("Sector " + tempRecommended[i].sectorCount);
        //console.log("Industry " + tempRecommended[i].industryCount);
        console.log("FINAL SCORE: " + tempRecommended[i].score);
    }*/
    next();
  });




  // Render the view
  view.render('elearning/main');

};