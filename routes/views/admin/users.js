var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
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
			{ text: 'Users', link: '/admin/users'}
		]
  	};

	//init locals
	locals.section = 'users';
	locals.data = {
		users: [],
		user: [],
		learning_objects:[],
		publications: [],
		path:req.path,
	};

	// Load users
	view.on('init', function (next) {

		var u = keystone.list('User').model.find().sort( { 'name.first': 1 } )

		u.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});
	
	});

	// Load user
	view.on('init', function (next) {

			var u = keystone.list('User').model.findOne({_id: req.params.id});

			u.exec(function (err, results) {
				locals.data.user = results;
				next(err);
			});
	});
	
	view.on('post', {action: 'editProfile'}, function(next){
			var u = keystone.list('User').model.findOneAndUpdate(
				{_id: locals.user._id},
				{
					name:{
						//first:(locals.formData.first ? locals.formData.first : locals.user.name.first),
					}
				},
				function(err,results){
					if (err) return next(err);
					return res.redirect('/admin/users/:id');
				}
			);

			var updater = locals.user.getUpdateHandler(req);

			console.log(locals.formData.first)
	});

	// Load LO
	view.on('init', function (next) {

		var u = keystone.list('LearningObject').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_objects = results;
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
	


	view.render('admin/users', pageData);
};
