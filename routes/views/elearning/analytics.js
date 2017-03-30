var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analytics';

    locals.data = {
        eachReactionsLO: [],
        eachLikesLO: [],
        eachHappyLO: [],
        eachSadLO: [],
        eachCommentsLO: [],
        //eachViewsLO: [],
        totalReactionsLO: [],
        totalLikesLO: [],
        totalHappyLO: [],
        totalSadLO: [],
        totalCommentsLO: [],
        //totalViewsLO: [],

        /*eachReactionsISP: [],
        eachLikesISP: [],
        eachHappyISP: [],
        eachSadISP: [],
        //eachViewsISP: [],
        totalReactionsISP: [],
        totalLikesISP: [],
        totalHappyISP: [],
        totalSadISP: [],
        //totalViewsISP: [],

        eachReactionsSector: [],
        eachLikesSector: [],
        eachHappySector: [],
        eachSadSector: [],
        //eachViewsSector: [],
        totalReactionsSector: [],
        totalLikesSector: [],
        totalHappySector: [],
        totalSadSector: [],
        //totalViewsSector: [],

        eachReactionsIndustry: [],
        eachLikesIndustry: [],
        eachHappyIndustry: [],
        eachSadIndustry: [],
        //eachViewsIndustry: [],
        totalReactionsIndustry: [],
        totalLikesIndustry: [],
        totalHappyIndustry: [],
        totalSadIndustry: [],
        //totalViewsIndustry: []
        */
    };
    var learningObjects = [];
    /*var isps = [];
    var sectors = [];
    var industries = [];*/
    //var tempTotalLikesLO = 0, tempTotalHappyLO = 0, tempTotalSadLO = 0, tempTotalCommentsLO = 0, tempTotalViewsLO = 0, tempTotalReactionsLO = 0;
    view.on('init', function(next){
        var q = keystone.list('LearningObject').model.find();

        q.exec(function(err, results){
            learningObjects = results;
            for(var i=0;i<learningObjects.length;i++){
                var temp = learningObjects[i].likes.length + learningObjects[i].happy.length + learningObjects[i].sad.length;
                locals.data.eachReactionsLO.push(temp);
                locals.data.totalReactionsLO += temp;

                locals.data.eachLikesLO.push(learningObjects[i].likes.length);
                locals.data.totalLikesLO += learningObjects[i].likes.length;

                locals.data.eachHappyLO.push(learningObjects[i].happy.length);
                locals.data.totalHappyLO += learningObjects[i].happy.length;

                locals.data.eachSadLO.push(learningObjects[i].sad.length);
                locals.data.totalSadLO += learningObjects[i].sad.length;

                locals.data.eachCommentsLO.push(learningObjects[i].comments.length);
                locals.data.totalCommentsLO += learningObjects[i].comments.length;

                //locals.data.eachViewsLO.push(learningObjects[i].views.length);
                //locals.data.totalViewsLO += learningObjects[i].views.length;
            }
            next(err);
        });
    });

    /*view.on('init', function(next){
        var q = keystone.list('ISP').model.find();

        q.exec(function(err, results){
            isps = results;
            for(var i=0;i<isps.length;i++){
                var temp = isps[i].likes.length + isps[i].happy.length + isps[i].sad.length;
                locals.data.eachReactionsISP.push(temp);
                locals.data.totalReactionsISP += temp;

                locals.data.eachLikesISP.push(isps[i].likes.length);
                locals.data.totalLikesISP += isps[i].likes.length;

                locals.data.eachHappyISP.push(isps[i].happy.length);
                locals.data.totalHappyISP += isps[i].happy.length;

                locals.data.eachSadISP.push(isps[i].sad.length);
                locals.data.totalSadISP += isps[i].sad.length;

                //locals.data.eachViewsISP.push(isps[i].views.length);
                //locals.data.totalViewsISP += isps[i].views.length;
            }
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LSector').model.find();

        q.exec(function(err, results){
            sectors = results;
            for(var i=0;i<sectors.length;i++){
                var temp = sectors[i].likes.length + sectors[i].happy.length + sectors[i].sad.length;
                locals.data.eachReactionsSector.push(temp);
                locals.data.totalReactionsSector += temp;

                locals.data.eachLikesSector.push(sectors[i].likes.length);
                locals.data.totalLikesSector += sectors[i].likes.length;

                locals.data.eachHappySector.push(sectors[i].happy.length);
                locals.data.totalHappySector += sectors[i].happy.length;

                locals.data.eachSadSector.push(sectors[i].sad.length);
                locals.data.totalSadSector += sectors[i].sad.length;

                //locals.data.eachViewsSector.push(sectors[i].views.length);
                //locals.data.totalViewsSector += sectors[i].views.length;
            }
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('LIndustry').model.find();

        q.exec(function(err, results){
            industries = results;
            for(var i=0;i<industries.length;i++){
                var temp = industries[i].likes.length + industries[i].happy.length + industries[i].sad.length;
                locals.data.eachReactionsIndustry.push(temp);
                locals.data.totalReactionsIndustry += temp;

                locals.data.eachLikesIndustry.push(industries[i].likes.length);
                locals.data.totalLikesIndustry += industries[i].likes.length;

                locals.data.eachHappyIndustry.push(industries[i].happy.length);
                locals.data.totalHappyIndustry += industries[i].happy.length;

                locals.data.eachSadIndustry.push(industries[i].sad.length);
                locals.data.totalSadIndustry += industries[i].sad.length;

                //locals.data.eachViewsIndustry.push(industries[i].views.length);
                //locals.data.totalViewsIndustry += industries[i].views.length;
            }
            next(err);
        });
    });*/

    //Render the view
    view.render('elearning/analytics');

};