var keystone = require('keystone');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');
var LOComment = keystone.list('LOComment');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsLO';

    locals.data = {
        currentLO: [],
        numViews: [],
        numComments: [],
        numReactions: []
    };

    // Load the currentLO
    view.on('init', function(next){
        LearningObject.model.findOne({
          slug: req.params.learningobjectslug
        })
        .populate('author')
        .exec(function(err, result) {
          if (err) return next(err);
          if (result.length == 0) {
            return callback(res.status(404).send(keystone.wrapHTMLError('Sorry, LearningObject:' + req.params.learningobjectslug +' not found! (404)')));
          }
          locals.data.currentLO = result;
          var totalReactions = 0;
          totalReactions += result.likes.length + result.happy.length + result.sad.length;
          locals.data.numReactions = totalReactions;
          next(err);
        });
    });

    view.on('init', function(next){
        LOView.model.count()
        .where('learningObject', locals.data.currentLO._id)
        .exec(function(err, count) {
          if (err) return next(err);
          if(count!=null){
            locals.data.numViews = count;
          }
          next(err);
        });
    });

    view.on('init', function(next){
        LOComment.model.count()
        .where('learningObject', locals.data.currentLO._id)
        .exec(function(err, count) {
          if (err) return next(err);
          if(count!=null){
            locals.data.numComments = count;
          }
          next(err);
        });
    });

    //Render the view
    view.render('elearning/analyticsLO');

};