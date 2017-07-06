var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
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
			{ text: 'Users', link: '/admin/users'}
		]
  	};

	//init locals
	locals.section = 'users';
	locals.formData = req.body;
	locals.data = {
		users: [],
		learning_objects:[],
		publications: [],
		path:req.path,
	};

	// Load users
	view.on('init', function (next) {

		var u = User.model.find().sort( { 'name.first': 1 } )

		u.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});
	
	});

	view.on('post', { action: 'createUser' }, function(next) {
		var newUser = new User.model({
			name: {
				first: req.body.first,
				last: req.body.last,
			},
			email: locals.formData.email,
			password: locals.formData.password,
			birthday: locals.formData.birthday,
			consumerType: locals.formData.consumerType,
			contactNumber: locals.formData.contactNumber
		});

		var updater = newUser.getUpdateHandler(req);		
		
		updater.process(req.body, {
        fields: 'email, password, birthday',
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newUser);
          		req.flash('success', 'User created');         
          		return res.redirect('/admin/users');
       	 	}
        next();
      	});
		
	});



	view.render('admin/users', pageData);
};
