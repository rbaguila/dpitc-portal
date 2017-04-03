//COMMUNITY IS STILL UNDER CONSTRUCTION

var keystone = require('keystone');
var moment = require('moment');
var User = keystone.list('User');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  locals.validationErrors = {};

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
  view.query('discussions', keystone.list('Discussion').model.find());
  view.query('trainings', keystone.list('Training').model.find());

  view.render('community/community', {loginRedirect: '/community', section: 'community', breadcrumbs: [
      { text: 'community', link: '/community'},
    ]
  });
}
