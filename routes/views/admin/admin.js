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
			{ text: 'Users', link: '#'},
			{ text: 'Analytics', link: '#'},
			{ text: 'Community', link: '#'},
			{ text: 'Publications', link: '#'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '#'}
		],
		breadcrumbs:[]
  	};

	view.render('admin/index',pageData);
};