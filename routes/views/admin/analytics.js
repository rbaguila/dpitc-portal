var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	var pageData = {
		title: 'Community Views',
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '/admin/posts'},
			{ text: 'Contents', link: '/admin/contents-fiesta'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '#'},
			{ text: 'Publications', link: '/admin/publication-settings'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'Community Views', link: '/admin/community-views'},
			{ text: 'Discussion Views', link: '/admin/discussion-views'},
			{ text: 'Group Views', link: '/admin/group-views'},
			{ text: 'Report Views', link: '/admin/report-views'}
		]
  	};

	//init locals
	locals.data = {
		community_views: [],
		discussion_views:[],
		group_views:[],
		report_views:[],
		path:req.path,
	};

	// Load Community Views
	view.on('init', function (next) {

		var u = keystone.list('CommunityView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.community_views = results;
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

	view.render('admin/analytics',pageData);
};
