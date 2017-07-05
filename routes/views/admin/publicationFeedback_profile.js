var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

		var pageData = {
			title: 'Publications',
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
				{ text: 'Publications Settings', link: '/admin/publication-settings'},
				{ text: 'Publications', link: '/admin/publications'},
				{ text: 'Publication Lines', link: '/admin/publication-lines'},
				{ text: 'Feedback', link: '/admin/publication-feedbacks'}
			]
  	};

	//init locals
	locals.section = 'users';
	locals.data = {
		publication_feedbacks: [] ,
		path:req.path,
	};

	// Load publications
	view.on('init', function (next) {

		var u = keystone.list('PublicationLine').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.publication_feedbacks = results;
			next(err);
		});

	});

	view.render('admin/publicationFeedback_profile',pageData);
};
