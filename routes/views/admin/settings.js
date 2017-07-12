var keystone = require('keystone');
var Settings = keystone.list('Settings');

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
			{ text: 'Site Settings', link: '/admin/settings'}
		]
  	};

	//init locals
	locals.formData = req.body;
	locals.data = {
		settings: [],
		path:req.path,
	};

	// Load users
	view.on('init', function (next) {

		var u = Settings.model.find().sort( { 'name.first': 1 } )

		u.exec(function (err, results) {
			locals.data.settings = results;
			next(err);
		});
	
	});

	view.on('post', { action: 'createSetting' }, function(next) {
		var newSetting = new Settings.model({
			name: locals.formData.name,
		});

		var updater = newSetting.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newSetting);
          		req.flash('success', 'Setting created');         
          		return res.redirect('/admin/settings');
       	 	}
        next();
      	});
		
	});



	view.render('admin/settings', pageData);
};
