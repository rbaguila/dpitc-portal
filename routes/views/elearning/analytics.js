var keystone = require('keystone');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analytics';

    locals.data = {
        maxReactionsLearningObject: [],
        minReactionsLearningObject: [],
        recentLOComment1: [],
        recentLOComment2: [],
        recentLOView1: [],
        recentLOView2: [],
    };
    
    var recentComment1;
    var recentComment2;
    var recentView1;
    var recentView2;

    view.on('init', function(next){

        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){
            var totalReactions= 0;
            for(var i=0;i<results.length;i++){
                totalReactions = 0;
                totalReactions += results[i].likes.length + results[i].happy.length + results[i].sad.length;
                results.reactions = totalReactions;
            }
            results.sort(function(a,b){
                return parseFloat(b.reactions) - parseFloat(a.reactions);
            });
            locals.data.maxReactionsLearningObject = results[0];
            locals.data.minReactionsLearningObject = results[(results.length-1)];
            
            next(err);
        });
    });

    //GET 2 Sample learning Object and show the graph for the number of comments
    //get the learning object wtih the most recent comment
    //TO DO
    //get the LO with the highest and lowest number of comments or LOs recently created instead of getting the learning object with the most recent comment

    view.on('init', function(next){

        var q = keystone.list('LOComment').model.find().sort('-dateCreated');

        q.exec(function(err, results){
            recentComment1 = results[0];
            recentComment2 = results[1];
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.find().where('_id', recentComment1.learningObject);

        q.exec(function(err, result){
            locals.data.recentLOComment1 = result[0];
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.find().where('_id', recentComment2.learningObject);

        q.exec(function(err, result){
            locals.data.recentLOComment2 = result[0];
            next(err);
        });
    });

    //GET 2 Sample learning Object and show the graph for the number of views
    //get the learning object wtih the most recent views
    //TO DO
    //get the LO with the highest and lowest number of views or LOs recently created instead of getting the learning object with the most recent views

    view.on('init', function(next){

        var q = keystone.list('LOView').model.find().sort('-dateViewed');

        q.exec(function(err, results){
            recentView1 = results[0];
            recentView2 = results[1];
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.find().where('_id', recentView1.learningObject);

        q.exec(function(err, result){
            locals.data.recentLOView1 = result[0];
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.find().where('_id', recentView2.learningObject);

        q.exec(function(err, result){
            locals.data.recentLOView2 = result[0];
            next(err);
        });
    });

    //Render the view
    view.render('elearning/analytics');

};