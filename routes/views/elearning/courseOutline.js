var keystone = require('keystone');
var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';

  locals.data = {
    currCourse: [],
    courses: [],
    chapters: [],
  };

  // Load the current course
  view.on('init', function(next){
    Course.model.findOne({
      slug: req.params.courseslug,
      state: 'published',
    })  
    .populate('author outline')
    .exec(function(err, result){
      if(result != null){
        locals.data.currCourse = result;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Course: '+ req.params.courseslug +' not found! (404)'));
      }
      next(err);
    });
  });

  // Render the view
  view.render('elearning/courseOutline');

};
