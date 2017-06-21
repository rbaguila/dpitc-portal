var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

		var pageData = {
			title: 'Publications',
			navLinks: [
				{ text: 'Home', link: '/admin' },
				{ text: 'Posts', link: '#'},
				{ text: 'Contents', link: '#'},
				{ text: 'Pages', link: '#'},
				{ text: 'Users', link: '/admin/users'},
				{ text: 'Analytics', link: '/admin/community-views'},
				{ text: 'Community', link: '/admin/community'},
				{ text: 'Publications', link: '/admin/publication-settings'},
				{ text: 'Categories', link: '#'},
				{ text: 'ELearning', link: '/admin/learning-objects'}
			],
			breadcrumbs:[
				{ text: 'Publications Settings', link: '/admin/publication-settings'},
				{ text: 'Publications', link: '/admin/publications'},
				{ text: 'Publication Lines', link: '#'},
			]
  	};

	//init locals
	locals.section = 'users';
	locals.data = {
		publication_settings: [],
		publications: [],
		path:req.path,
	};

	// Load publication-settings
	view.on('init', function (next) {

		var u = keystone.list('publicationsSettings').model.find().sort({ name: 1 })

		u.exec(function (err, results) {
			locals.data.publication_settings = results;
			next(err);
		});

	});

	// Load publications
	view.on('init', function (next) {

		var u = keystone.list('Publication').model.find().sort({ title: 1 })

		u.exec(function (err, results) {
			locals.data.publications = results;
			next(err);
		});

	});

	view.render('admin/publications',pageData);
};
