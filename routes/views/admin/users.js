var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
		title: 'Users',
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '#'},
			{ text: 'Contents', link: '#'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '/admin/community'},
			{ text: 'Publications', link: '/admin/publications'},
			{ text: 'Categorie', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'Users', link: '/admin/users'}
		]
  	};

	//init locals
	locals.section = 'users';
	locals.data = {
		users: [],
	};

	// Load users
	view.on('init', function (next) {

		var u = keystone.list('User').model.find().sort({ 'name.first': 1 })

		u.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});

	});

	//view.on('get',)

	view.render('admin/users', pageData);
};
