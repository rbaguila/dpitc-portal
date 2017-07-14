var keystone = require('keystone');
var PublicationsSetting = keystone.list('publicationsSettings');
var Publication = keystone.list('Publication');
var PublicationLine = keystone.list('PublicationLine');

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
	locals.formData = req.body;
	locals.data = {
		publication_settings: [] ,
		publications: [] ,
		publication_lines:[] ,
		publication_feedbacks:[],
		path:req.path,
	};

	// Load publication-settings
	view.on('init', function (next) {

		var u = PublicationsSetting.model.find().sort({ name: 1 })

		u.exec(function (err, results) {
			locals.data.publication_settings = results;
			next(err);
		});

	});

	// Create Publication Setting function
	view.on('post',{action: 'createPublicationSetting'}, function (next) {
		var newPub = new PublicationsSetting.model({
			title:locals.formData.title
		});

		var updater = newPub.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newPub);
          		req.flash('success', 'Publication Setting created');         
          		return res.redirect('/admin/publication-settings');
       	 	}
        next();
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

	view.on('post',{action: 'createPublication'}, function (next) {
		var newPub = new Publication.model({
			name:locals.formData.name
		});

		var updater = newPub.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newPub);
          		req.flash('success', 'Publication created');         
          		return res.redirect('/admin/publications');
       	 	}
        next();
    	});
	});

	// Load publication-lines
	view.on('init', function (next) {

		var u = PublicationLine.model.find().sort({ name: 1 })

		u.exec(function (err, results) {
			locals.data.publication_lines = results;
			next(err);
		});

	});

	view.on('post',{action: 'createPublicationLine'}, function (next) {
		var newPub = new PublicationLine.model({
			name:locals.formData.name
		});

		var updater = newPub.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newPub);
          		req.flash('success', 'Publication Line created');         
          		return res.redirect('/admin/publication-lines');
       	 	}
        next();
    	});
	});

	// Load publication-feedback
	view.on('init', function (next) {

		var u = keystone.list('PublicationFeedback').model.find().sort({ title: 1 })

		u.exec(function (err, results) {
			locals.data.publication_feedbacks = results;
			next(err);
		});

	});


	view.render('admin/publications',pageData);
};
