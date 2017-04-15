var keystone = require('keystone');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsLO';

    locals.data = {
        currentLO: []
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
          next(err);
        });
    });

    //Render the view
    view.render('elearning/analyticsLO');

};