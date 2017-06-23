var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);

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

	view.render('admin/index',pageData);

};
<<<<<<< HEAD

=======
>>>>>>> 98c830dbac373d2c360d04f50d7c4febf807f439
