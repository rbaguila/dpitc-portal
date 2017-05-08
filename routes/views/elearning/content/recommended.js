var keystone = require('keystone');
var async = require('async');
var http = require('http');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var ELearningVisit = keystone.list('ELearningVisit');
var Course = keystone.list('Course');
var LearningObject = keystone.list('LearningObject');
var LORating = keystone.list('LORating');
var ISP = keystone.list('ISP');
var LIndustry = keystone.list('LIndustry');
var LSector = keystone.list('LSector');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'elearning';
  locals.url = '/elearning/recommended?';

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  locals.formData = req.body || {};

  locals.data = {
    recommendedLearningObjects: [],
    learningObjectsTaken: [],
    likedLO: [],
    happyLO: [],
    sadLO: [],
    ratedLO: []
  }

  var tempRecommended = [];
  var tempLearningObjects = [];
  var ispArr = {};
  var sectorArr = {};
  var industryArr = {};

  var pageData = {
    loginRedirect: '/elearning/recommended?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'recommended', link: '/elearning/recommended?' },
    ]
  }

  /* Search */
  view.on('get', { action: 'elearning.search' }, function (next) {
    return res.redirect('/elearning/search?key='+req.query.search+'&from='+locals.url);
    next();

  });


  /* LOAD RECOMMENDED LEARNING OBJECTS */

  //get all the learning objects
  view.on('init', function(next){
    var q = LearningObject.model.find().populate('isp sector industry');

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

  //get the ratedLO of the current user
  view.on('init', function (next) {
    if (locals.user) {
      LORating.model.find().where('updatedBy', locals.user._id).populate('learningObject').lean().exec(function (err, results){
        if(err) return next(err);
        for(var i=0;i<results.length;i++){
          results[i].learningObject.rating = results[i].rating;
          locals.data.ratedLO.push(results[i].learningObject);
        }
        next();
      });  
    } else {
      next();
    }
  });

  //get each user ISP tag preferences, or score of each ISP tags by getting the average rating of user u for the specific tag
  view.on('init', function (next) {
    ISP.model.find().lean().exec(function (err, results){
      if(err) return next(err);
      async.each(results, function(eachisp, next){
        ispArr[eachisp.name] = helper.getISPTagAveRating(eachisp, locals.data.ratedLO);
        next();
      }, function (err){
        next(err);
      });
    });
  });

  view.on('init', function (next) {
    LSector.model.find().lean().exec(function (err, results){
      if(err) return next(err);
      async.each(results, function(eachsector, next){
        sectorArr[eachsector.name] = helper.getSectorTagAveRating(eachsector, locals.data.ratedLO);
        next();
      }, function (err){
        next(err);
      });
    });
  });

  view.on('init', function (next) {
    LIndustry.model.find().lean().exec(function (err, results){
      if(err) return next(err);
      async.each(results, function(eachindustry, next){
        industryArr[eachindustry.name] = helper.getIndTagAveRating(eachindustry, locals.data.ratedLO);
        next();
      }, function (err){
        next(err);
      });
    });
  });

  //compute for the score of each learning objects based on the ISP, sector and industry tags of the learning objects taken by the logged-in user
  view.on('init', function(next){
    if(locals.data.learningObjectsTaken.length>0){
      var total = locals.data.learningObjectsTaken.length+ locals.data.likedLO.length + locals.data.happyLO.length + locals.data.sadLO.length;
      var activityScore;
      var ratingScore;
      async.each(tempLearningObjects, function (learningObject, next) {
        activityScore = 0;
        ratingScore = 0;
          if(helper.notYetTaken(learningObject, locals.data.learningObjectsTaken)==0){
            learningObject.score = (-1 * locals.data.learningObjectsTaken.length);
            tempRecommended.push(learningObject);
          }
          else{
              var learningObject = helper.getCountLOTaken(learningObject, locals.data.learningObjectsTaken);
              learningObject = helper.getCountLiked(learningObject, locals.data.likedLO);
              learningObject = helper.getCountHappy(learningObject, locals.data.happyLO);
              learningObject = helper.getCountSad(learningObject, locals.data.sadLO);
              if(total>0){
                activityScore = (3 * (learningObject.ispCount/total)) + (2 * (learningObject.sectorCount)/total) + (1 * (learningObject.industryCount)/total);
              }
              ratingScore = (3 * ispArr[learningObject.isp.name]/2) + (2 * sectorArr[learningObject.sector.name]/2) +  (1 * industryArr[learningObject.industry.name]/2);
              //console.log("LOL" + ispArr[learningObject.isp.name]/3 + "," + sectorArr[learningObject.sector.name]/3 + "," + industryArr[learningObject.industry.name]/3);
              //console.log(activityScore);
              //console.log("LOL" + ratingScore);
              learningObject.score = activityScore + ratingScore;
              tempRecommended.push(learningObject);
          }
          next();
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
      locals.data.recommendedLearningObjects = tempRecommended.slice(0, 12);//temporary
      
      // paginate locals.recommendedLO
      locals.paginateRecommendedLO = helper.paginate(tempRecommended, locals.page, locals.perPage);

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
        locals.data.recommendedLearningObjects = tempLearningObjects.slice(0, 12);

        // paginate locals.recommendedLO
        locals.paginateRecommendedLO = helper.paginate(tempLearningObjects, locals.page, locals.perPage);

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

 
  view.render('elearning/content/recommended', pageData);
}
