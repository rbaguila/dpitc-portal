var keystone = require('keystone');
var async = require('async');
var LearningObject = keystone.list('LearningObject');
var Course = keystone.list('Course');
var User = keystone.list('User');
var LOComment = keystone.list('LOComment');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  
  var pageData = {
    loginRedirect: '/elearning/learning-object/'+req.params.learningobjectslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
    ]
  }

  if(locals.user){
    if(locals.user.isAdmin){
      pageData.breadcrumbs.push({
        text: 'elearning analytics',
        link: '/elearning/analytics'
      });
    }
  }

  // Set locals

  locals.filters = {
    currentLO: req.params.learningobjectslug
  }

  locals.section = 'learning-object';
  locals.url = '/elearning/learning-object/'+req.params.learningobjectslug+'?';


  locals.data = {
    currLO: [],
    comments: [],
    otherLO: [],
    recommendedLO: [],
    learningObjectsTaken: [],
  };

  locals.formData = req.body || {};

  

  var tempRecommended = [];
  var tempLearningObjects = [];
  var classifications = ["specificCommodity", "isp", "sector", "industry"];
  var counts = ["specCommCount", "ispCount", "sectorCount", "industryCount"];


  // Load the currentLO
  view.on('init', function(next){

    LearningObject.model.findOne({
      slug: locals.filters.currentLO,
      state: 'published',
    })
    .populate('gallery video links files isp sector industry')
    .exec(function(err, result) {
      if (err) return next(err);
      if (result.length == 0) {
        return callback(res.status(404).send(keystone.wrapHTMLError('Sorry, LearningObject:' + req.params.learningobjectslug +' not found! (404)')));
      }

      locals.currentLO = result;
      locals.data.currLO = result;

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


  /* COMMENTS */
  // Load comments on the Learning Object
  view.on('init', function (next) {
    
    LOComment.model.find()
      .where('learningObject', locals.currentLO)
      .where('author').ne(null)
      .populate('author')
      .sort('publishedAt')
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
      author: locals.user.id,
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
        return res.redirect('/elearning/learning-object/' + locals.currentLO.slug + '#comment-id-' + newComment.id);
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
  //TO DO, check if nirefresh lang
  view.on('init', function(next){
    var currentUser = locals.user;
    if(currentUser){
      //check if the user viewed the Learning Object for 1 session (1 day threshold)
      Date.prototype.addHours = function(h) {    
        this.setTime(this.getTime() + (h*60*60*1000)); 
        return this;   
      }
      Date.prototype.subtractHours = function(h) {    
        this.setTime(this.getTime() - (h*60*60*1000)); 
        return this;   
      }
      var start = new Date().subtractHours(12);
      var end = new Date().addHours(12);
      if(req.query.type==undefined){
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
                learningObject: locals.data.currLO._id
              });
              newView.save(function(err) {
              });
            }
            next();
        });
      }
      else{
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
                typeOfView: 'recommended'
              });
              newView.save(function(err) {
                
              });
            }
            next();
        });
      }
    }
    else{
      next();
    }
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
    var q = LearningObject.model.find();

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
                        if(locals.data.learningObjectsTaken[i][classifications[j]]!=null){
                          var eachTakenClassId = locals.data.learningObjectsTaken[i][classifications[j]]._id + "";
                          if(learningObjectClassId==eachTakenClassId){
                              count++;
                          }
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
  view.render('elearning/learningObject', pageData);

};
