//COMMUNITY IS STILL UNDER CONSTRUCTION

var exec = require('child_process').exec;
var keystone = require('keystone');
var moment = require('moment');
var http = require('http');
var util = require('util');
var User = keystone.list('User');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  locals.validationErrors = {};
  locals.category = {};
  locals.config = {};
  locals.data = {
    discussionViews: [],
    industries: [],
    posts: []
  };

  if(keystone.get('env') === 'development') {
    locals.config = {
      host: 'http://localhost:8080',
      listPost: 'http://localhost:8080/api/posts',
      listGroup: 'http://localhost:8080/api/groups',
      userApi: 'http://localhost:8080/api/users'
    }

    console.log(locals.config.userApi);
  }
  /*** Deployed route for JC's community ***/
  else {
    locals.config = {
      host: 'http://localhost:8080',
      listPost: 'http://localhost:8080/api/posts',
      listGroup: 'http://localhost:8080/api/groups'
    }
  }

  view.on('init', function(next) {
    /* Has a daily limit */
    // var command = 'curl ipinfo.io/' + req.ips + '/geo';
    // var child = exec(command, function(err, data, stderr) {
    //   if(err) {
    //     console.log(err);
    //   }
    //
    //   var CommunityView = keystone.list('CommunityView');
    //   var item = new CommunityView.model({
    //     ip: data.ip,
    //     city: data.city,
    //     region: data.region,
    //     country: data.country,
    //     loc: data.loc
    //   });
    //
    //   item.save(function(err, view) {
    //     if (err) return res.apiError('database error', err);
    //   })
    // });

    next();
  });

  view.on('init', function(next) {
    keystone.list('Industry').model.find().sort('name').exec(function (err, results) {

			if (err || !results.length) {
				return next(err);
			}

			locals.data.industries = results;
      next();
    });
  });

  view.on('init', function(next) {
    keystone.list('PostCategory').model.findOne({ key: 'community' })
      .exec(function(err, res) {
        locals.category.community = res;
        next(err);
      });
  });

  view.on('init', function(next) {
    var q = keystone.list('Post').model.findOne()
      .populate('author categories')
      .where('state', 'published')
      .where('categories').nin([locals.category.community])
      .sort('-publishedDate');

    q.exec(function (err, results) {
      if(err) return next(err);
			locals.news = results;
		});

    var q2 = keystone.list('Post').model.find()
      .populate('author categories')
      .where('state', 'published')
      .where('categories').in([locals.category.community])
      .sort('-publishedDate')
      .limit(2);

    q2.exec(function (err, results) {
      if(err) return next(err);
			locals.commNews = results;
		});

    next();
  });

  view.on('init', function(next) {
    keystone.list('DiscussionView').model.find()
      .exec(function(err, res) {
        locals.data.discussionViews = res;
        next(err);
      });
  });

  // Load all posts
  view.on('init', function(next) {
    http.get(locals.config.listPost, function(response) {

      var bodyChunks = [];
      response.on('data', function(chunk) {
        bodyChunks += chunk;
      }).on('end', function() {
        var body = JSON.parse(bodyChunks);

        locals.data.posts = body.posts;

        next();
      });
    });

  });

  // Filter Posts by Questions
  view.on('init', function(next) {
    var body = {
      posts: []
    }

    body.posts = locals.data.posts.filter(function(post) {
      return post.showPublic == true &&
              post.category == 'question';
    })

    body.posts.sort(function(a, b) {
      a = moment(a.datePosted, 'MMMM Do YYYY, h:mm:SS a');
      b = moment(b.datePosted, 'MMMM Do YYYY, h:mm:SS a');
      return a>b ? -1 : a<b ? 1 : 0;
    });

    locals.discussions = body.posts.slice(0, 10);

    for(var i=0; i<locals.discussions.length; i++) {
      var views = locals.data.discussionViews.filter(function(view) {
        return locals.discussions[i]._id == view.discussionID;
      });

      locals.discussions[i]['views'] = views;
    }

    next();
  });

  // Filter Posts by Event
  view.on('init', function(next) {
    var body = {
      posts: []
    }

    body.posts = locals.data.posts.filter(function(post) {
      return post.showPublic == true &&
              post.category == 'event';
    })

    body.posts.sort(function(a, b) {
      a = moment(a.startDateTime, 'MMMM Do YYYY, h:mm:SS A');
      b = moment(b.startDateTime, 'MMMM Do YYYY, h:mm:SS A');
      return a>b ? -1 : a<b ? 1 : 0;
    });

    locals.events = body.posts.slice(0, 10);

    for(var i=0; i<locals.events.length; i++) {
      var d = new Date(locals.events[i]['startDateTime']);
      var dateObj = {
        month: d.toLocaleString("en-us", { month: "short" }),
        date: d.getDate()
      };

      locals.events[i]['startDateTime'] = dateObj;
    }

    next();
  });

  // Load all Incident Reports
  view.on('init', function(next) {
    var body = {
      posts: []
    }

    body.posts = locals.data.posts.filter(function(post) {
      return post.showPublic == true &&
              post.category == 'report';
    })

    body.posts.sort(function(a, b) {
      a = moment(a.datePosted, 'MMMM Do YYYY, h:mm:SS a');
      b = moment(b.datePosted, 'MMMM Do YYYY, h:mm:SS a');
      return a>b ? -1 : a<b ? 1 : 0;
    });

    locals.blogPosts = body.posts.slice(0, 10);

    for(var i=0; i<locals.blogPosts.length; i++) {
      var datePosted = locals.blogPosts[i].datePosted;

      locals.blogPosts[i].datePosted = moment(datePosted, 'MMMM Do YYYY, h:mm:SS a').fromNow();
    //   http.get(locals.config.userApi+'/'+locals.blogPosts.postedBy._id, function(response) {
    //
    //     var bodyChunks = [];
    //     response.on('data', function(chunk) {
    //       bodyChunks += chunk;
    //     }).on('end', function() {
    //       var body = JSON.parse(bodyChunks);
    //
    //       console.log()
    //
    //       next();
    //     });
    //   });
    //   console.log(locals.blogPosts[i].postedBy.name);
    }

    next();
  });

  view.on('init', function(next) {
    http.get(locals.config.listGroup, function(response) {

      var bodyChunks = [];
      response.on('data', function(chunk) {
        bodyChunks += chunk;
      }).on('end', function() {
        var body = JSON.parse(bodyChunks);

        locals.groups = [];
        for(var i=0; i<locals.data.industries.length; i++) {
          var groups = body.groups.filter(function(group) {
            return locals.data.industries[i].name == group.classification.industry
          });

          groups.sort(function(a, b) {
            a = (a.membersCount*0.8) + (a.postsCount.total*0.2);
            b = (b.membersCount*0.8) + (b.postsCount.total*0.2);
            return a < b ? 1 : -1;
          });

          locals.groups.push(groups.slice(0,4));
        }

        next();
      });
    });

  });

  view.on('post', {action: 'sign-up'}, function(next) {
    var newUser = new User.model();
    var updater = newUser.getUpdateHandler(req);

    var data = {
      name: {
        first: req.body.fname,
        last: req.body.lname
      },
      email: req.body.email,
      password: req.body.password,
      location: {
        street1: req.body.street1,
        suburb: req.body.suburb,
        state: req.body.state
      },
      sex: req.body.sex
    }

    data.birthday = moment(req.body.byear+'-'+req.body.bmonth+'-'+req.body.bday, 'YYYY-MMM-DD');
    updater.process(data, function(err) {
      if (err) {
        locals.validationErrors = err.detail;
        console.log(err);
      }

      next();
    })
  });

  // view.query('blogPosts', keystone.list('BlogPost').model.find().populate('author').sort('-publishedDate'));
  // view.query('events', keystone.list('Event').model.find().sort('startDate'));
  view.query('trainings', keystone.list('Training').model.find());
  view.query('comments', keystone.list('DiscussionComment').model.find().populate('discussion', 'author'));
  view.query('discussionViews', keystone.list('DiscussionView').model.find());

  // view.query('discussions', keystone.list('Discussion').model.find())
  //   .then(function(err, res, next) {
  //     if(err) return next(err);
  //
  //     for(var i=0; i<res.length; i++) {
  //       res[i].comments = locals.comments.filter(function(comment) {
  //         return comment.discussion._id.equals(res[i]._id) &&
  //                comment.commentState == 'published';
  //       });
  //
  //       res[i].views = locals.discussionViews.filter(function(view) {
  //         return view.discussion._id.equals(res[i]._id);
  //       });
  //     }
  //
  //     next(res);
  //   });

  view.render('community/community', {loginRedirect: '/community', section: 'community', breadcrumbs: [
      { text: 'community', link: '/community'},
    ]
  });
}
