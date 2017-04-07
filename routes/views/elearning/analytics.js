var keystone = require('keystone');
var fs = require('fs');
//var d3 = require("d3");
//var jsdom = require("jsdom");

//var document = jsdom.jsdom();
//var svg = d3.select(document.body).append("svg");

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analytics';

    locals.data = {
        maxReactionsLearningObject: [],
        minReactionsLearningObject: []
    };
   
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
    //Render the view
    view.render('elearning/analytics');

};