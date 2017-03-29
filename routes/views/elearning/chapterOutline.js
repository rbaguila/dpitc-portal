var keystone = require('keystone');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals

  locals.data = {
    currChapter: [],
  };

  // Load the current chapter
  view.on('init', function(next){
    Chapter.model.findOne({
      slug: req.params.chapterslug,
      state: 'published',
    })  
    .populate('author outline')
    .exec(function(err, result){
      if(result != null){
        locals.data.currChapter = result;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Chapter:' + req.params.chapterslug +' not found! (404)'));
      }
      next(err);
    });
  });

  // Render the view
  view.render('elearning/chapterOutline');

};
