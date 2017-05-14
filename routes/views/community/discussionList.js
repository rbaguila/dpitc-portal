var keystone = require('keystone');
var moment = require('moment');
var http = require('http');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  locals.filters = {
		category: req.params.category,
	};
  locals.data = {
		posts: [],
		categories: [],
	};
  locals.config = {
    host: 'http://pcaarrd-km-community.herokuapp.com/',
    apiUrl: 'http://pcaarrd-km-community.herokuapp.com/api/posts'
  }

  view.on('init', function(next) {
    http.get(locals.config.apiUrl, function(response) {

      var bodyChunks = [];
      response.on('data', function(chunk) {
        bodyChunks += chunk;
      }).on('end', function() {
        var body = JSON.parse(bodyChunks);

        body.posts = body.posts.filter(function(post) {
          return post.showPublic == true &&
                  post.category == 'question';
        })

        body.posts.sort(function(a, b) {
          a = moment(a.datePosted, 'MMMM Do YYYY, h:mm:SS a');
          b = moment(b.datePosted, 'MMMM Do YYYY, h:mm:SS a');
          return a>b ? -1 : a<b ? 1 : 0;
        });

        locals.data.posts = body.posts;

        next();
      });
    }).on('error', function(err) {
      next(err);
    });

  });


  var pageData = {
    loginRedirect: '/community/discussions',
    breadcrumbs: [
      { text: 'Community', link: '/community'},
      { text: 'Discussions', link: '/community/discussions'},
    ]
  }

  // Render the view
  view.render('community/discussion-list', pageData);
}
