var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
		title: 'Learning Objects',
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '/admin/posts'},
			{ text: 'Contents', link: '/admin/contents-fiesta'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '#'},
			{ text: 'Publications', link: '/admin/publications'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'Learning Objects', link: '/admin/learning-objects'},
			{ text: 'Courses', link: '/admin/courses'},
			{ text: 'Learning Contents', link: '/admin/learning-contents'},
			{ text: 'ISPs', link: '/admin/isps'},
			{ text: 'LIndustries', link: '/admin/lindustries'},
			{ text: 'LSectors', link: '/admin/lsectors'},
			{ text: 'LOFile Uploads', link: '/admin/lofile-uploads'},
			{ text: 'LGalleries', link: '/admin/logalleries'},
			{ text: 'LOLinks', link: '/admin/lolinks'},
			{ text: 'LOVideos', link: '/admin/lovideos'},
			{ text: 'Authors', link: '/admin/authors'},
			{ text: 'LOComments', link: '/admin/locomments'},
			{ text: 'LOFeedbacks', link: '/admin/lofeedbacks'},
			{ text: 'LORatings', link: '#'},
			{ text: 'LOViews', link: '#'},
			{ text: 'Elearning LORating', link: '#'},
			{ text: 'Elearning Visits', link: '#'},
		]
  	};

	//init locals
	locals.section = 'users';
	locals.data = {
		learning_objects: [],
		path:req.path,
	    courses: [],
		learning_contents:[],
		isps:[],
		lindustries:[],
		lsectors:[],
		lofile_uploads:[],
		logalleries:[],
		lolinks:[],
		lovideos:[],
		authors:[],
		locomments:[],
		lofeedbacks:[],
	};

	// Load courses
	view.on('init', function (next) {
		var u = keystone.list('Course').model.find().sort({ publishedAt: -1});

		u.exec(function (err, results) {
			locals.data.courses = results;
			next(err);
		});

	});

	// Load LO
	view.on('init', function (next) {

		var u = keystone.list('LearningObject').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_objects = results;
			next(err);
		});

	});

	// Load Learning contents
	view.on('init', function (next) {

		var u = keystone.list('LearningContent').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_contents = results;
			next(err);
		});

	});

	//Load ISPs
	view.on('init', function (next) {

		var u = keystone.list('ISP').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.isps = results;
			next(err);
		});

	});

	//Load LIndustries
	view.on('init', function (next) {

		var u = keystone.list('LIndustry').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lindustries = results;
			next(err);
		});

	});

	//Load LSectors
	view.on('init', function (next) {

		var u = keystone.list('LSector').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lsectors = results;
			next(err);
		});

	});

	//Load LOFile-upload
	view.on('init', function (next) {

		var u = keystone.list('LOFileUpload').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lofile_uploads = results;
			next(err);
		});

	});

	//Load LOGallery
	view.on('init', function (next) {

		var u = keystone.list('LOGallery').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.logalleries = results;
			next(err);
		});

	});

	//Load LOLink
	view.on('init', function (next) {

		var u = keystone.list('LOLink').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lolinks = results;
			next(err);
		});

	});

	//Load LOVideo
	view.on('init', function (next) {

		var u = keystone.list('LOVideo').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lovideos = results;
			next(err);
		});

	});

	//Load Author
	view.on('init', function (next) {

		var u = keystone.list('Author').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.authors = results;
			next(err);
		});

	});

	//Load LOComment
	view.on('init', function (next) {

		var u = keystone.list('LOComment').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.locomments = results;
			next(err);
		});

	});

		//Load LOFeedback
	view.on('init', function (next) {

		var u = keystone.list('LOFeedback').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lofeedbacks = results;
			next(err);
		});

	});


	view.render('admin/elearning',pageData);
};
