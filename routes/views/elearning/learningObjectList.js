var keystone = require('keystone');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'learning objects';

  var pageData = {
    loginRedirect: '/elearning/learning-objects?',
    breadcrumbs: [
      { text: 'ELearning', link: '/elearning' },
      { text: 'Lessons', link: '/elearning/learning-objects' },
    ]
  }

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category

  view.on('init', function(next){
    
    LearningObject.paginate({
        page: req.query.page,
        perPage: 8,
        filters: { 'state': 'published' }
    })
    .sort('-PublishedAt')
    .exec(function(err, results){
      
      if (err) return next(err);
      locals.learningObjects = results;
      next();
    
    });
  
  });

  // Render the view
  view.render('elearning/learningObjectList', pageData);

};
