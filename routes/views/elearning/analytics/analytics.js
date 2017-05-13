var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    locals.section = 'admin';

    locals.data = {
        mostPopularLO: [],
        mostCommentedLO: [],
        mostReactedLO: [],
        numCourses: [],
        numLO: [],
        numUsers: [],
        numViews: [],
        numComments: [],
        numReactions: [],
        numPageVisits: [],
        topTopicsbyRatings: []
    };

    var pageData = {
        loginRedirect: '/elearning', 
        breadcrumbs: [
          { text: 'elearning', link: '/elearning' },
          { text: 'analytics', link: '/elearning/analytics'}
        ]
    }

    var tempLearningObjects = [];
    var tempLearningObjects2 = [];
    var tempLearningObjects3 = [];

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){
            if(results!=null){
                var totalReactions= 0;
                var total = 0;
                for(var i=0;i<results.length;i++){
                    totalReactions = 0;
                    totalReactions += results[i].likes.length + results[i].happy.length + results[i].sad.length;
                    total+=totalReactions;
                    results[i].reactions = totalReactions;
                }
                results.sort(function(a,b){
                    return parseFloat(b.reactions) - parseFloat(a.reactions);
                });
                locals.data.mostReactedLO = results.slice(0, 5);
                locals.data.numReactions = total;
            }
            next(err);
        });
    });

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){

            if (err || !results.length) {
                return next(err);
            }
            tempLearningObjects = results;

            async.each(tempLearningObjects, function (learningObject, next) {
                keystone.list('LOView').model.count().where('learningObject', learningObject._id).exec(function (err, count) {
                    learningObject.viewCount = count;
                    next(err);
                });
            }, function (err) {
                next(err);
            });
        });
    });

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){

            if (err || !results.length) {
                return next(err);
            }
            tempLearningObjects2 = results;

            async.each(tempLearningObjects2, function (learningObject, next) {
                keystone.list('LOComment').model.count().where('learningObject', learningObject._id).exec(function (err, count) {
                    learningObject.commentCount = count;
                    next(err);
                });
            }, function (err) {
                next(err);
            });
        });
    });

    view.on('init', function(next){
        var q = keystone.list('Course').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numCourses = count;
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numLO = count;
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('User').model.count().where('isElearningUser', true);

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numUsers = count;
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LOView').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numViews = count;
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LOComment').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numComments = count;
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LOComment').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numComments = count;
            next(err);
        });
    });

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){

            if (err || !results.length) {
                return next(err);
            }
            tempLearningObjects3 = results;
            async.each(tempLearningObjects3, function (learningObject, next) {
                keystone.list('LORating').model.find().where('learningObject', learningObject._id).exec(function (err, r) {
                    if(r.length>0){
                        var temp = 0;
                        for(var i=0;i<r.length;i++){
                            temp+=parseInt(r[i].rating);
                        }
                        learningObject.rating = (temp/r.length);
                    }
                    else{
                        learningObject.rating = 0;
                    }
                    next(err);
                });
            }, function (err) {
                next(err);
            });
        });
    });

    view.on('init', function(next){
        tempLearningObjects.sort(function(a,b){
          return parseFloat(b.viewCount) - parseFloat(a.viewCount);
        });
        locals.data.mostPopularLO = tempLearningObjects.slice(0, 5);

        tempLearningObjects2.sort(function(a,b){
          return parseFloat(b.commentCount) - parseFloat(a.commentCount);
        });
        locals.data.mostCommentedLO = tempLearningObjects2.slice(0, 5);

        tempLearningObjects3.sort(function(a,b){
          return parseFloat(b.rating) - parseFloat(a.rating);
        });
        locals.data.topTopicsbyRatings = tempLearningObjects3.slice(0, 5);
        next();
    });

    view.on('init', function(next){
        var q = keystone.list('ELearningVisit').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numPageVisits = count + locals.data.numViews;
            next(err);
        });
    });
    //Render the view
    view.render('elearning/analytics/analytics', pageData);

};