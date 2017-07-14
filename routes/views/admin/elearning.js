var keystone = require('keystone');
var Course = keystone.list('Course');
var LearningObject = keystone.list('LearningObject');
var LearningContent = keystone.list('LearningContent');
var ISP = keystone.list('ISP');
var LIndustry = keystone.list('LIndustry');
var LSector = keystone.list('LSector');
var LOFileUpload = keystone.list('LOFileUpload');
var LOGallery = keystone.list('LOGallery');
var LOLink = keystone.list('LOLink');
var LOVideo = keystone.list('LOVideo');
var Author = keystone.list('Author');
var LOComment = keystone.list('LOComment');
var LOFeedback = keystone.list('LOFeedback');
var LORating = keystone.list('LORating');
var LOView = keystone.list('LOView');
var ELearningLog = keystone.list('ELearningLog');
var ELearningVisit = keystone.list('ELearningVisit');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	var pageData = {
		title: 'Learning Objects',
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
			{ text: 'Learning Objects', link: '/admin/learning-objects'},
			{ text: 'Courses', link: '/admin/courses'},
			{ text: 'Learning Contents', link: '/admin/learning-contents'},
			{ text: 'ISPs', link: '/admin/isps'},
			{ text: 'LIndustries', link: '/admin/lindustries'},
			{ text: 'LSectors', link: '/admin/lsectors'},
			{ text: 'LOFile Uploads', link: '/admin/lofile-uploads'},
			{ text: 'LGalleries', link: '/admin/logalleries'},
			{ text: 'LOLinks', link: '/admin/lolinks'},
			{ text: 'LOVideos', link: '/admin/lovideos'},
			{ text: 'Authors', link: '/admin/authors'},
			{ text: 'LOComments', link: '/admin/locomments'},
			{ text: 'LOFeedbacks', link: '/admin/lofeedbacks'},
			{ text: 'LORatings', link: '/admin/loratings'},
			{ text: 'LOViews', link: '/admin/loviews'},
			{ text: 'ELearning Logs', link: '/admin/elearning-logs'},
			{ text: 'ELearning Visits', link: '/admin/elearning-visits'},
		]
  	};

	//init locals
	locals.section = 'users';
	locals.formData = req.body;
	locals.data = {
		learning_objects: [],
		path:req.path,
	    courses: [],
		learning_contents:[],
		isps:[],
		lindustries:[],
		lsectors:[],
		lofile_uploads:[],
		logalleries:[],
		lolinks:[],
		lovideos:[],
		authors:[],
		locomments:[],
		lofeedbacks:[],
		loratings:[],
		loviews:[],
		elearning_logs:[],
		elearning_visits:[]
	};

	// Load courses
	view.on('init', function (next) {
		var u = Course.model.find().sort({ publishedAt: -1});

		u.exec(function (err, results) {
			locals.data.courses = results;
			next(err);
		});

	});

	view.on('post', { action: 'createCourse' }, function(next) {
		var newDocument = new Course.model({
			title:locals.formData.title,
			createdBy: locals.user,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'Course created');         
          		return res.redirect('/admin/courses');
       	 	}
        next();
      	});
		
	});

	// Load LObjects
	view.on('init', function (next) {

		var u = LearningObject.model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_objects = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLearningObject' }, function(next) {
		var newDocument = new LearningObject.model({
			title:locals.formData.title,
			createdBy: locals.user,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'Learning Object created');         
          		return res.redirect('/admin/learning-objects');
       	 	}
        next();
      	});
		
	});

	// Load Learning contents
	view.on('init', function (next) {

		var u = LearningContent.model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.learning_contents = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLearningContent' }, function(next) {
		var newDocument = new LearningContent.model({
			title:locals.formData.title,
			createdBy: locals.user,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'Learning Content created');         
          		return res.redirect('/admin/learning-contents');
       	 	}
        next();
      	});
		
	});

	//Load ISPs
	view.on('init', function (next) {

		var u = ISP.model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.isps = results;
			next(err);
		});

	});

	view.on('post', { action: 'createISP' }, function(next) {
		var newDocument = new ISP.model({
			title:locals.formData.title,
			createdBy: locals.user,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'ISP created');         
          		return res.redirect('/admin/isps');
       	 	}
        next();
      	});
		
	});

	//Load LIndustries
	view.on('init', function (next) {

		var u = keystone.list('LIndustry').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lindustries = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLIndustry' }, function(next) {
		var newDocument = new LIndustry.model({
			name: locals.formData.name,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LIndustry created');         
          		return res.redirect('/admin/lindustries');
       	 	}
        next();
      	});
		
	});

	//Load LSectors
	view.on('init', function (next) {

		var u = keystone.list('LSector').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lsectors = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLSector' }, function(next) {
		var newDocument = new LSector.model({
			name: locals.formData.name,
			industry: locals.formData.industry
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LSector created');         
          		return res.redirect('/admin/lsectors');
       	 	}
        next();
      	});
		
	});

	//Load LOFile-upload
	view.on('init', function (next) {

		var u = keystone.list('LOFileUpload').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lofile_uploads = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLOFileUpload' }, function(next) {
		var newDocument = new LOFileUpload.model({
			name: locals.formData.name,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LOFile Upload created');         
          		return res.redirect('/admin/lofile-uploads');
       	 	}
        next();
      	});
		
	});

	//Load LOGallery
	view.on('init', function (next) {

		var u = keystone.list('LOGallery').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.logalleries = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLOGallery' }, function(next) {
		var newDocument = new LOGallery.model({
			name: locals.formData.name,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LOGallery created');         
          		return res.redirect('/admin/logalleries');
       	 	}
        next();
      	});
		
	});

	//Load LOLink
	view.on('init', function (next) {

		var u = keystone.list('LOLink').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lolinks = results;
			next(err);
		});

	});

	view.on('post', { action: 'createLOLink' }, function(next) {
		var newDocument = new LOLink.model({
			name: locals.formData.name,
			url: locals.formData.url
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LOLink created');         
          		return res.redirect('/admin/lolinks');
       	 	}
        next();
      	});
		
	});

	//Load LOVideo
	view.on('init', function (next) {

		var u = keystone.list('LOVideo').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lovideos = results;
			next(err);
		});

	});
	
	view.on('post', { action: 'createLOVideo' }, function(next) {
		var newDocument = new LOVideo.model({
			name: locals.formData.name,
			url: locals.formData.url
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'LOVideo created');         
          		return res.redirect('/admin/lovideos');
       	 	}
        next();
      	});
		
	});

	//Load Author
	view.on('init', function (next) {

		var u = keystone.list('Author').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.authors = results;
			next(err);
		});

	});

	view.on('post', { action: 'createAuthor' }, function(next) {
		var newDocument = new Author.model({
			name: locals.formData.name,
		});

		var updater = newDocument.getUpdateHandler(req);		
		
		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newDocument);
          		req.flash('success', 'Author created');         
          		return res.redirect('/admin/authors');
       	 	}
        next();
      	});
		
	});


	//Load LOComment
	view.on('init', function (next) {

		var u = keystone.list('LOComment').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.locomments = results;
			next(err);
		});

	});

	//Load LOFeedback
	view.on('init', function (next) {

		var u = keystone.list('LOFeedback').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.lofeedbacks = results;
			next(err);
		});

	});

	//Load LORating
	view.on('init', function (next) {

		var u = keystone.list('LORating').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.loratings = results;
			next(err);
		});

	});

	//Load LOView
	view.on('init', function (next) {

		var u = keystone.list('LOView').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.loviews = results;
			next(err);
		});

	});

	//Load Elearning Log
	view.on('init', function (next) {

		var u = keystone.list('ELearningLog').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.elearning_logs = results;
			next(err);
		});

	});

	//Load Elearning Visit
	view.on('init', function (next) {

		var u = keystone.list('ELearningVisit').model.find().sort({ publishedAt: -1})

		u.exec(function (err, results) {
			locals.data.elearning_visits = results;
			next(err);
		});

	});


	view.render('admin/elearning',pageData);
};
