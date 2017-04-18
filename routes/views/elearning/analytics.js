var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analytics';

    locals.data = {
        mostPopularLO: [],
        mostCommentedLO: [],
        mostReactedLO: [],
        numCourses: [],
        numLO: [],
        numUsers: []
    };

    var pageData = {
        loginRedirect: '/elearning', 
        breadcrumbs: [
          { text: 'elearning', link: '/elearning' },
          { text: 'elearning analytics', link: '/elearning/analytics'}
        ]
    }

    var tempLearningObjects = [];
    var tempLearningObjects2 = [];

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){
            if(results!=null){
                var totalReactions= 0;
                for(var i=0;i<results.length;i++){
                    totalReactions = 0;
                    totalReactions += results[i].likes.length + results[i].happy.length + results[i].sad.length;
                    results.reactions = totalReactions;
                }
                results.sort(function(a,b){
                    return parseFloat(b.reactions) - parseFloat(a.reactions);
                });
                locals.data.mostReactedLO = results[0];
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
        tempLearningObjects.sort(function(a,b){
          return parseFloat(b.viewCount) - parseFloat(a.viewCount);
        });
        locals.data.mostPopularLO = tempLearningObjects[0];

        tempLearningObjects2.sort(function(a,b){
          return parseFloat(b.commentCount) - parseFloat(a.commentCount);
        });
        locals.data.mostCommentedLO = tempLearningObjects2[0];
        next();
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
        var q = keystone.list('User').model.count();

        q.exec(function(err, count){
            if (err || count==null) {
                return next(err);
            }
            locals.data.numUsers = count;
            next(err);
        });
    });

    //Render the view
    view.render('elearning/analytics', pageData);

};