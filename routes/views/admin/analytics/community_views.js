var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	//init locals
	locals.section = 'users';
	locals.data = {
		community_views: [],
		discussion_views:[],
		group_view:[],
	};

	// Load Community Views
	view.on('init', function (next) {

		var u = keystone.list('CommunityView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.community_views = results;
			locals.data.path = req.path;
			next(err);
		});

	});	

	// Load Discussion Views
	view.on('init', function (next) {

		var u = keystone.list('DiscussionView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.discussion_views = results;
			next(err);
		});

	});

	// Load Group Views
	view.on('init', function (next) {

		var u = keystone.list('GroupView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.group_views = results;
			next(err);
		});

	});

	// Load Report Views
	view.on('init', function (next) {

		var u = keystone.list('ReportView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.report_views = results;
			next(err);
		});

	});

	view.render('admin/analytics/community_views',{path:req.path});
};
