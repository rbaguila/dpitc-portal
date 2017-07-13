var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	var pageData = {
		title:'Admin Dashboard',
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '/admin/posts'},
			{ text: 'Contents', link: '/admin/contents-fiesta'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '/admin/community'},
			{ text: 'Publications', link: '/admin/publication-settings'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[]
  	};

	locals.data = {
		settings_count:0,

		users_count:0,

		communityViews_count:0,
		discussionViews_count:0,
		groupViews_count:0,
		reportViews_count:0,

		publicationSetting_count:0,
		publications_count:0,
		publicationLines_count:0,
		publicationFeedbacks_count:0,

		learningObjects_count: 0,
		courses_count:0,
		learningContents_count:0,
		isps_count:0,
		lindustries_count:0,
		lsectors_count:0,
		lofileUploads_count:0,
		logalleries_count:0,
		lolinks_count:0,
		lovideos_count:0,
		authors_count:0,
		locomments_count:0,
		lofeedbacks_count:0,
		loratings_count:0,
		loviews_count:0,
		elearningLogs_count:0,
		elearningVisits_count:0,
		path:req.path,
	};

	view.on('init', function (next) {

		var u = keystone.list('Settings').model.count();

		u.exec(function (err, results) {
			locals.data.settings_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('CommunityView').model.count();

		u.exec(function (err, results) {
			locals.data.communityViews_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('DiscussionView').model.count();

		u.exec(function (err, results) {
			locals.data.discussionViews_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('GroupView').model.count();

		u.exec(function (err, results) {
			locals.data.groupViews_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('ReportView').model.count();

		u.exec(function (err, results) {
			locals.data.reportViews_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('User').model.count();

		u.exec(function (err, results) {
			locals.data.users_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('publicationsSettings').model.count();

		u.exec(function (err, results) {
			locals.data.publicationSetting_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('Publication').model.count();

		u.exec(function (err, results) {
			locals.data.publications_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('PublicationLine').model.count();

		u.exec(function (err, results) {
			locals.data.publicationLine_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {

		var u = keystone.list('PublicationFeedback').model.count();

		u.exec(function (err, results) {
			locals.data.publicationFeedbacks_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LearningObject').model.count();

		u.exec(function (err, results) {
			locals.data.learningObjects_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('Course').model.count();

		u.exec(function (err, results) {
			locals.data.courses_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LearningContent').model.count();

		u.exec(function (err, results) {
			locals.data.learningContents_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('ISP').model.count();

		u.exec(function (err, results) {
			locals.data.isps_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LIndustry').model.count();

		u.exec(function (err, results) {
			locals.data.lindustries_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LSector').model.count();

		u.exec(function (err, results) {
			locals.data.lsectors_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOFileUpload').model.count();

		u.exec(function (err, results) {
			locals.data.lofileUploads_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOGallery').model.count();

		u.exec(function (err, results) {
			locals.data.logalleries_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOLink').model.count();

		u.exec(function (err, results) {
			locals.data.lolinks_count = results;
			next(err);
		});

	});
	
	view.on('init', function (next) {
		var u = keystone.list('LOVideo').model.count();

		u.exec(function (err, results) {
			locals.data.lovideos_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('Author').model.count();

		u.exec(function (err, results) {
			locals.data.authors_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOComment').model.count();

		u.exec(function (err, results) {
			locals.data.locomments_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOFeedback').model.count();

		u.exec(function (err, results) {
			locals.data.lofeedbacks_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LORating').model.count();

		u.exec(function (err, results) {
			locals.data.loratings_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LOView').model.count();

		u.exec(function (err, results) {
			locals.data.loviews_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('ELearningLog').model.count();

		u.exec(function (err, results) {
			locals.data.elearningLogs_count = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('ELearningVisit').model.count();

		u.exec(function (err, results) {
			locals.data.elearningVisits_count = results;
			next(err);
		});

	});

	view.render('admin/index',pageData);

};

