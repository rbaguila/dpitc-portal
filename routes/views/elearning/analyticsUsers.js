var keystone = require('keystone');
var User = keystone.list('User');
var LOView = keystone.list('LOView');
var LOComment = keystone.list('LOComment');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsUsers';

    locals.data = {
        currentUser: [],
        numLOTaken: [],
        numComments: []
    };

    var pageData = {
        loginRedirect: '/elearning', 
        breadcrumbs: [
          { text: 'elearning', link: '/elearning' },
          { text: 'elearning analytics', link: '/elearning/analytics'}
        ]
    }

    // Load the currentLO
    view.on('init', function(next){
        User.model.findOne({
          _id: req.params.userid,
          isAdmin: false
        })
        .exec(function(err, result) {
          if (err) return next(err);
          if (result.length == 0) {
            return callback(res.status(404).send(keystone.wrapHTMLError('Sorry, User:' + req.params.userid +' not found! (404)')));
          }
          locals.data.currentUser = result;
          locals.data.numLOTaken = result.learningObjectsTaken.length;
          next(err);
        });
    });

    view.on('init', function(next){
        LOComment.model.count()
        .where('author', locals.data.currentUser._id)
        .exec(function(err, count) {
          if (err) return next(err);
          if(count!=null){
            locals.data.numComments = count;
          }
          next(err);
        });
    });

    //Render the view
    view.render('elearning/analyticsUsers', pageData);

};