var keystone = require('keystone');
var Settings = keystone.list('Settings');
async = require('async');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
		title: 'Profile',
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
			{ text: 'Site Settings', link: '/admin/settings'}
		]
  	};

	//init locals
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.data = {
		settings: [],
	};

	// Load user
	view.on('init', function (next) {

			var u = Settings.model.findOne({_id: req.params.id});

			u.exec(function (err, results) {
				locals.data.settings = results;
				next(err);
			});
	});

	view.on('post', {action: 'deleteSetting'}, function(next){
		var u = Settings.model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){
				return res.send();
			}
			else{
				req.flash('success','Setting deleted');
				return res.redirect('/admin/settings');
			}
			
		})

	});



	view.render('admin/settings_profile',pageData);
};
