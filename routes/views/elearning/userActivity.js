var keystone = require('keystone');
var async = require('async');

var User = keystone.list('User');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  
  locals.section = 'userActivity';

  var pageData = {
    loginRedirect: '/elearning/'+locals.user._id+'/user-activity', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'user activity', link: '/elearning/user-activity?'}
    ]
  };

  var viewPage = req.query.viewPage == undefined ? 1 : req.query.viewPage;
  var likePage = req.query.likePage == undefined ? 1 : req.query.likePage;
  

  // Load all LOViews by user
  view.on('init', function (next) {

    LOView.paginate({
        page: req.query.viewPage,
        perPage: 8,
        filters: { 'user': locals.user._id }
      })
      .sort('-dateViewed')
      .populate('learningObject')
      .exec(function (err, results) {

        if (err) return next(err);
        locals.user.loviews = results;
        next();

      });

  });

  // Load all learningObjects liked by User?
  view.on('init', function (next) {
    
    LearningObject.paginate({
        page: req.query.likePage,
        perPage: 8,
        filters: { 'likes': { $elemMatch: { $eq: locals.user._id } } }
      })
      .exec(function (err, results) {

        if (err) return next(err);
        locals.user.likedLO = results;
        next();

      });
  
  });

  view.render('elearning/userActivity', pageData);
}