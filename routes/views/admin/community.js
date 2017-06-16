var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	
	var pageData = {
		title: 'Blog Posts',
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
			{ text: 'Blog Posts', link: '/admin/community'},
			{ text: 'Trainings', link: '#'},
			{ text: 'Events', link: '#'},
			{ text: 'Discussions', link: '#'},
			{ text: 'Discussion Comments', link: '#'},
			{ text: 'Links', link: '#'},
			{ text: 'Galleries', link: '#'},
			{ text: 'Videos', link: '#'},
			{ text: 'Memos', link: '#'}
		]
  	};
	
	view.render('admin/community',pageData);
};
