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
			{ text: 'Community', link: '#'},
			{ text: 'Publications', link: '/admin/publication-settings'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'FIESTA', link: '/admin/contents-fiesta'},
			{ text: 'Technologies', link: '/admin/technologies'},
            { text: 'Sliders', link: '/admin/sliders'}
		]
  	};

	//init locals
	locals.data = {
		contents_fiesta: [],
		technologies:[],
        sliders: [],
		path:req.path,
	};
	
	view.render('admin/technologies',pageData);
};