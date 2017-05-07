var keystone = require('keystone');
var async = require('async');
var http = require('http');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var LearningObject = keystone.list('LearningObject');
var Course = keystone.list('Course');
var User = keystone.list('User');
var LOComment = keystone.list('LOComment');
var LOView = keystone.list('LOView');
var LORating = keystone.list('LORating');
var ISP = keystone.list('ISP');
var LIndustry = keystone.list('LIndustry');
var LSector = keystone.list('LSector');



exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;


  locals.section = 'learning-object';
  locals.url = '/elearning/learning-object/'+req.params.learningobjectslug+'?';

  locals.rating = LORating.fields.rating.ops;
  locals.validationErrors = {};

  locals.filters = {
    currentLO: req.params.learningobjectslug
  }  

  locals.data = {
    currLO: [],
    comments: [],
    otherLO: [],
    recommendedLO: [],
    learningObjectsTaken: [],
    likedLO: [],
    happyLO: [],
    sadLO: [],
    ratedLO: []
  };

  locals.formData = req.body || {};

  locals.searchSubmitted = false;
  locals.searchUrl = locals.url + 'action=elearning.search&search=';
  locals.searchResults = [];

  var tempRecommended = [];
  var tempLearningObjects = [];
  var ispArr = {};
  var sectorArr = {};
  var industryArr = {};

  var pageData = {
    loginRedirect: '/elearning/learning-object/'+req.params.learningobjectslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.learningobjectslug.replace(/-/g, ' ') , link: '/elearning/learning-object/'+req.params.learningobjectslug }
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
  
  // Load the currentLO
  view.on('init', function(next){

    LearningObject.model.findOne({
      slug: locals.filters.currentLO,
      state: 'published',
    })
    .populate('gallery video links files isp sector industry author')
    .exec(function(err, result) {
      if (err) return next(err);
      if (result.length == 0) {
        return callback(res.status(404).send(keystone.wrapHTMLError('Sorry, LearningObject:' + req.params.learningobjectslug +' not found! (404)')));
      }

      locals.currentLO = result;
      locals.data.currLO = result;

      // Load tags
      locals.currentLO.tags = [result.specificCommodity, result.industry, result.sector, result.isp];

      // Add currentLO to currentUser's learningObjectsTaken
      if(locals.user){
        User.model.findOneAndUpdate( 
          { _id: locals.user._id }, 
          { $addToSet: { 
            learningObjectsTaken: locals.currentLO._id 
            } 
          },
          function(err, res) {
            if (err) return next(err);
            next();  
          }
        ); 
        
      } else {
        next();
      }
    });
  });

  /* RATING */
  // Create a feedback on the Learning Object
  view.on('post', { action: 'reactions.rating' }, function (next) {
  
    var newRating = new LORating.model({
      learningObject: locals.currentLO.id,
    });
      
    var updater = newRating.getUpdateHandler(req);

    updater.process(req.body, {
      fields: 'rating',
      flashErrors: true,
      logErrors: true,
    }, function (err) {
      if (err) {
        validationErrors = err.errors;
      } else {
        req.flash('success', 'Your rating was submitted.');
        return res.redirect('/elearning/learning-object/'+locals.currentLO.slug);
      }
      next();
    });

  });


  /* COMMENTS */
  // Load comments on the Learning Object
  view.on('init', function (next) {
    
    LOComment.model.find()
      .where('learningObject', locals.currentLO)
      .populate('createdBy')
      .sort('createdAt')
      .exec(function (err, comments) {
        if (err) return res.err(err);
        if (!comments) return res.notfound('Learning Object Comments not found.');

        locals.comments = comments;
        next();
      });
  
  });

  // Create a comment on the Learning Object
  view.on('post', { action: 'comment.create' }, function (next) {

    var newComment = new LOComment.model({
      learningObject: locals.currentLO.id,
    });

    var updater = newComment.getUpdateHandler(req);

    updater.process(req.body, {
      fields: 'content',
      flashErrors: true,
      logErrors: true,
    }, function (err) {
      if (err) {
        validationErrors = err.errors;
      } else {
        req.flash('success', 'Your comment was added.');
        return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
      }
      next();
    });

  });


  /* REACTIONS */
  view.on('post', { action: 'reactions.addLike' }, function (next) {

    // Check if Learning Object has already been liked
    LearningObject.model.findOne({
        slug: locals.filters.currentLO,
        state: 'published',
        likes: { $in: [ locals.user._id ] }
    })
    .exec(function(err, isLiked){
      if (err) return next(err);

      // if LO is already liked, remove from array
      // else add to array
      if (isLiked) {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $pull: {
            likes: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      } else {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $addToSet: {
            likes: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      }
    });
        
  });

  view.on('post', { action: 'reactions.addHappy' }, function (next) {

    // Check if Learning Object is already in Happy
    LearningObject.model.findOne({
        slug: locals.filters.currentLO,
        state: 'published',
        happy: { $in: [ locals.user._id ] }
    })
    .exec(function(err, isHappy){
      if (err) return next(err);

      // if LO is already in Happy, remove from array
      // else add to array
      if (isHappy) {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $pull: {
            happy: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      } else {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $addToSet: {
            happy: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      }
    });

  });

  view.on('post', { action: 'reactions.addSad' }, function (next) {

    // Check if Learning Object is already in Sad
    LearningObject.model.findOne({
        slug: locals.filters.currentLO,
        state: 'published',
        sad: { $in: [ locals.user._id ] }
    })
    .exec(function(err, isSad){
      if (err) return next(err);

      // if LO is already in Sad, remove from array
      // else add to array
      if (isSad) {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $pull: {
            sad: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      } else {
        LearningObject.model.findOneAndUpdate(
          { _id: locals.currentLO._id }, 
          { $addToSet: {
            sad: locals.user._id
            }
          }, function (err, result) {
            if (err) {
              return next(err);
            } else {
              return res.redirect('/elearning/learning-object/' + locals.currentLO.slug);
            }
            next();
          }
        );

      }
    });

  });

  /* VIEWS */
  // Get the loview of current learning object
  view.on('init', function(next) {

    LOView.model.find({
      learningObject: locals.currentLO._id
    })
    .exec(function(err, results){
      if(err) next(err);
      locals.currentLO.loviews = results;
      next();
    });

  });

  // Insert LOView
  view.on('init', function(next){

    //check if the user viewed the Learning Object for 1 session (2 hrs threshold)
    Date.prototype.addHours = function(h) {    
      this.setTime(this.getTime() + (h*60*60*1000)); 
      return this;   
    }
    Date.prototype.subtractHours = function(h) {    
      this.setTime(this.getTime() - (h*60*60*1000)); 
      return this;   
    }
    var start = new Date().subtractHours(1);
    var end = new Date().addHours(1);
    var currentUser = locals.user;
    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var getGeoLocation = false;

    if(currentUser){
      if(currentUser.location.suburb!=null&&currentUser.location.state!=null){
        LOView.model.count({
          learningObject: locals.currentLO._id,
          user: currentUser._id,
          dateViewed: { $gte: start, $lt: end },
        })
        .exec(function(err, count){
          if(err){
            next(err)
          }
            if(count==0){
              var newView = new LOView.model({
                user: currentUser._id,
                learningObject: locals.data.currLO._id,
                typeOfView: req.query.type,
                country_code: 'PH',
                region: currentUser.location.state,
                city: currentUser.location.suburb
              });
              newView.save(function(err) {
              });
            }
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
              if(currentUser){
                LOView.model.count({
                  learningObject: locals.currentLO._id,
                  user: currentUser._id,
                  dateViewed: { $gte: start, $lt: end },
                })
                .exec(function(err, count){
                  if(err){
                    next(err)
                  }
                    if(count==0){
                      var newView = new LOView.model({
                        user: currentUser._id,
                        learningObject: locals.data.currLO._id,
                        typeOfView: req.query.type,
                        ip: obj.ip,
                        country_code: obj.country_code,
                        region: obj.region_name,
                        city: obj.city
                      });
                      newView.save(function(err) {
                      });
                    }
                });
              }
              else{
                LOView.model.count({
                  learningObject: locals.currentLO._id,
                  ip: obj.ip,
                  dateViewed: { $gte: start, $lt: end },
                })
                .exec(function(err, count){
                  if(err){
                    next(err)
                  }
                    if(count==0){
                      var newView = new LOView.model({
                        learningObject: locals.data.currLO._id,
                        ip: obj.ip,
                        country_code: obj.country_code,
                        region: obj.region_name,
                        city: obj.city
                      });
                      newView.save(function(err) {
                        
                      });
                    }
                });
              }
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
  // Load other learning objects besides current
  view.on('init', function(next){
    LearningObject.model.find({
      state: 'published',
    })
    .limit(6)
    .exec(function(err, results){
      if(results != null){
        locals.data.otherLO = results;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, There are no course found! (404)'));
      }
      next(err);
    });
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
          locals.data.learningObjectsTaken.push(locals.data.currLO);
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

    //TODO - add rating in the algorithm
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
    locals.data.recommendedLO = [];
    if(tempRecommended.length>0){
      tempRecommended.sort(function(a,b){
          return parseFloat(b.score) - parseFloat(a.score);
      });
      locals.data.recommendedLO = tempRecommended.slice(0, 3);//temporary
      //locals.data.recommendedLO = tempRecommended.slice(0, 36);//final, 36 recommended videos in youtube too
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
        locals.data.recommendedLO = tempLearningObjects.slice(0, 3);
      }
    }
    next();
  });

  // Render the view
  view.render('elearning/content/learningObject', pageData);

};
