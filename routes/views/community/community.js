//COMMUNITY IS STILL UNDER CONSTRUCTION

var exec = require('child_process').exec;
var keystone = require('keystone');
var moment = require('moment');
var util = require('util');
var User = keystone.list('User');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  locals.validationErrors = {};
  locals.category = {};

  view.on('init', function(next) {
    /* Has a daily limit */
    // var command = 'curl ipinfo.io/' + req.ips + '/geo';
    // var child = exec(command, function(err, stdout, stderr) {
    //   if(err) {
    //     console.log(err);
    //   }
    //
    //   console.log('stdout: ' + stdout);
    // });

    next();
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

  view.query('blogPosts', keystone.list('BlogPost').model.find().populate('author').sort('-publishedDate'));
  view.query('events', keystone.list('Event').model.find().sort('startDate'));
  view.query('trainings', keystone.list('Training').model.find());
  view.query('comments', keystone.list('DiscussionComment').model.find().populate('discussion', 'author'));
  view.query('discussionViews', keystone.list('DiscussionView').model.find().populate('discussion'));

  view.query('discussions', keystone.list('Discussion').model.find())
    .then(function(err, res, next) {
      if(err) return next(err);

      for(var i=0; i<res.length; i++) {
        res[i].comments = locals.comments.filter(function(comment) {
          return comment.discussion._id.equals(res[i]._id) &&
                 comment.commentState == 'published';
        });

        res[i].views = locals.discussionViews.filter(function(view) {
          return view.discussion._id.equals(res[i]._id);
        });
      }

      next(res);
    });

  view.render('community/community', {loginRedirect: '/community', section: 'community', breadcrumbs: [
      { text: 'community', link: '/community'},
    ]
  });
}
