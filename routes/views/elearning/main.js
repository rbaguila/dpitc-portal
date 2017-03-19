var keystone = require('keystone');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';
  locals.data = {
    courses: [],
    popularCourses: [],
    recommendedCourses: [],
  };

  view.on('init', function(next){
   var q = keystone.list('Course').model.find().where('state', 'published')
    .sort('-PublishedAt')
    .limit(4)
    .exec(function(err, results){
      locals.data.courses = results;

      next(err);
    });
  });

  view.on('init', function(next){
   var q = keystone.list('Course').model.find().where('state', 'published')
    .sort('-PublishedAt')
    .limit(4)
    .exec(function(err, results){
      locals.data.recommendedCourses = results;

      next(err);
    });
  });

  view.on('init', function(next){
   var q = keystone.list('Course').model.find().where('state', 'published')
    .sort('-PublishedAt')
    .limit(4)
    .exec(function(err, results){
      locals.data.popularCourses = results;

      next(err);
    });
  });  


  // Render the view
  view.render('elearning/main');

};