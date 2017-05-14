var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  console.log("Slug: " + req.params.post);
  // Set locals
  locals.section = 'community';
  locals.filters = {
    post: req.params.post,
  };
  locals.data = {
    posts: [],
  };

  // Load the current post
  view.on('init', function (next) {

    var q = keystone.list('BlogPost').model.findOne({
      state: 'published',
      slug: locals.filters.post,
    }).populate('author categories');

    q.exec(function (err, result) {
      locals.data.post = result;
      next(err);
    });

  });

  // Load other posts
  view.on('init', function (next) {

    var q = keystone.list('BlogPost').model.find().where('state', 'published').sort('-publishedDate').populate('author').limit('4');

    q.exec(function (err, results) {
      locals.data.posts = results;
      next(err);
    });

  });

	var pageData = {
    loginRedirect: '/community/blogs',
    breadcrumbs: [
      { text: 'Community', link: '/community'},
      { text: 'Blogs', link: '/community/blogs'},
    ]
  }

  // Render the view
  view.render('community/post', pageData);
};
