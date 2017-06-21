var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
		title: 'Learning Objects',
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '#'},
			{ text: 'Contents', link: '#'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '/admin/community'},
			{ text: 'Publications', link: '/admin/publications'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'Learning Objects', link: '/admin/learning-objects'},
			{ text: 'Courses', link: '/admin/courses'},
			{ text: 'Learning Contents', link: '#'},
			{ text: 'ISPs', link: '#'},
			{ text: 'LIndustries', link: '#'},
			{ text: 'LSectors', link: '#'},
			{ text: 'LOFile Uploads', link: '#'},
			{ text: 'LGalleries', link: '#'},
			{ text: 'LOLinks', link: '#'},
			{ text: 'LOVideos', link: '#'},
			{ text: 'Authors', link: '#'},
			{ text: 'LOComments', link: '#'},
			{ text: 'LOFeedbacks', link: '#'},
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


	view.render('admin/elearning',pageData);
};
