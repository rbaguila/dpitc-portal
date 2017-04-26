var keystone = require('keystone');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set localss

  var pageData = {
    loginRedirect: '/elearning/'+req.params.courseslug+'/chapter/'+req.params.chapterslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.courseslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug },
      { text: req.params.chapterslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug+'/chapter/'+req.params.chapterslug }
    ]
  }

  locals.data = {
    currChapter: [],
  };

  locals.currslug = req.params.chapterslug;
  locals.viewStyle = req.query.view == undefined ? 'list' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category

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
        pageData.breadcrumbs.push(  { text: locals.data.currChapter.title, link: '/elearning/'+req.params.chapterslug } );
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Chapter:' + req.params.chapterslug +' not found! (404)'));
      }
      next(err);
    });
  });

  // Render the view
  view.render('elearning/chapterOutline', pageData);

};
