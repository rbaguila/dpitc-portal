var keystone = require('keystone');
var ObjectId = require('mongodb').ObjectId;

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
			{ text: 'Elearning Log', link: '/admin/elearning-logs'},
			{ text: 'Elearning Visits', link: '/admin/elearning-visits'},
		]
  	};

	//init locals
	locals.section = 'users';
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.data = {
		learning_objects: [],
		path:req.path,
	    courses: [],
		learning_contents:[],
        author:[],
	};

	// Load courses
	view.on('init', function (next) {
		var u = keystone.list('Course').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.courses = results;
			next(err);
		});

	});

	// Load LO
	view.on('init', function (next) {

		var u = keystone.list('LearningObject').model.findOne({_id: req.params.id});
		u.exec(function (err, results) {
			locals.data.learning_objects = results;
			next(err);
		});

	});

	// Load Learning contents
	view.on('init', function (next) {

		var u = keystone.list('LearningContent').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.learning_contents = results;
			next(err);
		});

	});

	view.on('post', {action: 'editLearningObject'}, function(next){
			var u = keystone.list('LearningObject').model.findOneAndUpdate(
				{ _id:locals.data.learning_objects._id},
				{
					title:locals.formData.title,
					content:{
						brief:locals.formData.content.brief,
						extended:locals.formData.content.extended
					},
				},
				function(err,results){
					if(err) return next(err);
					return res.redirect('/admin/learning-objects');
					next();
				})

			var updater = locals.data.learning_objects.getUpdateHandler(req);

			updater.process(req.body, {
			//fields: 'name',
			flashErrors: true,
			logErrors: true
			}, function (err, result) {
			if (err) {    
				locals.validationErrors = err.errors; 
				} else {
				req.flash('success', 'Learning Object updated.');         
				return res.redirect('/admin/learning-objects');
				}
				next();
			});
	});


	view.render('admin/learningObjects_profile',pageData);
};
