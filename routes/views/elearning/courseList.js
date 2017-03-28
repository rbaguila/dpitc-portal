var keystone = require('keystone');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';

  locals.data = {
        courses: [],
    };

  view.on('init', function(next){
        Course.paginate({
            page: req.query.page || 1,
            perPage: 8,
            maxPages: 10,
        })
        .where('state', 'published')
        .sort('-PublishedAt')
        .exec(function(err, results){
            locals.data.courses = results;
            
            next(err);
        });
    });

  // Render the view
  view.render('elearning/courseList');

};
