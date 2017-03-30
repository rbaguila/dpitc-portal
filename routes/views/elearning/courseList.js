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

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category


  view.on('init', function(next){
        Course.paginate({
            page: req.query.page,
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
