var keystone = require('keystone');
var User = keystone.list('User');
var Publication = keystone.list('Publication');
var LearningObject = keystone.list('LearningObject');
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
			{ text: 'Users', link: '/admin/users'}
		]
  	};

	//init locals
	locals.section = 'users_profile';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.data = {
		user: [],
		learning_objects:[],
		publications: [],
	};

	// Load user
	view.on('init', function (next) {

			var u = User.model.findOne({_id: req.params.id});

			u.exec(function (err, results) {
				locals.data.user = results;
				next(err);
			});
	});
	
	view.on('post', {action: 'editUser'}, function(next){
			var u = User.model.update(
				{ _id:locals.data.user._id},
				{
					name: { 
						first: (locals.formData.first ? locals.formData.first : locals.data.user.name.first),
						last: (locals.formData.last ? locals.formData.last : locals.data.user.name.last),  
					},
					email: locals.formData.email,
					location: {
						suburb: locals.formData.suburb,
						state: locals.formData.state,
						country: (locals.formData.country ? locals.formData.country : locals.data.user.location.country),
					}, 
					consumerType: locals.formData.consumerType,
					birthday: locals.formData.birthday,
					agencyAffiliation: locals.formData.agencyAffiliation,
					sex: locals.formData.sex,
					contantNumber: locals.formData.contactNumber
				},
				function(err,results){
					if(err){
						locals.validationErrors = err.errors;
					}else{
						req.flash('success','User updated')
						return res.redirect('/admin/users');
					}
					
					next();
				})

			var updater = locals.data.user.getUpdateHandler(req);

			updater.process(req.body, {
			//fields: 'name',
			flashErrors: true,
			logErrors: true
			}, function (err, result) {
			if (err) {    
				locals.validationErrors = err.errors; 
			} else {
				req.flash('success', 'Account updated.');         
				return res.redirect('/admin/users');
			}
				next();
			});
	});

	// Load LO
	view.on('init', function (next) {

		var u = LearningObject.model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_objects = results;
			next(err);
		});

	});

	// Load publications
	view.on('init', function (next) {

		var u = Publication.model.find().sort({ title: 1 })

		u.exec(function (err, results) {
			locals.data.publications = results;
			next(err);
		});

	});
	
	view.on('post', {action: 'deleteUser'}, function(next){
		var u = User.model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){
				return res.send();
			}
			else{
				req.flash('success','User deleted');
				return res.redirect('/admin/users');
			}
			
		})

	});



	view.render('admin/user_profile',pageData);
};
