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
			{ text: 'Users', link: '#'},
			{ text: 'Analytics', link: '#'},
			{ text: 'Community', link: '#'},
			{ text: 'Publications', link: '#'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '#'}
		],
		breadcrumbs:[
			{ text: 'Posts', link: '/admin/posts'},
			{ text: 'Post-Categories', link: '/admin/posts-categories'}
		]
  	};

	//init locals
	locals.data = {
		posts: [],
		posts_categories:[],
		path:req.path,
	};
	
	view.render('admin/posts_categories',pageData);
};