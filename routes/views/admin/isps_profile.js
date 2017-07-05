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
			{ text: 'isps', link: '/admin/isps'},
			{ text: 'LOComments', link: '/admin/locomments'},
			{ text: 'LOFeedbacks', link: '/admin/lofeedbacks'},
			{ text: 'LORatings', link: '/admin/loratings'},
			{ text: 'LOViews', link: '/admin/loviews'},
			{ text: 'Elearning Log', link: '/admin/elearning-logs'},
			{ text: 'Elearning Visits', link: '/admin/elearning-visits'},
		]
  	};

	//init locals
	locals.formData = req.body || {};
	locals.validationErrors = {};
	locals.data = {
		path:req.path,
	    isps: [],
		lsectors:[]
	};

	// Load ISPs
	view.on('init', function (next) {
		var u = keystone.list('ISP').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.isps = results;
			next(err);
		});

	});

	view.on('init', function (next) {
		var u = keystone.list('LSector').model.find();

		u.exec(function (err, results) {
			locals.data.lsectors = results;
			next(err);
		});

	});

	view.on('post', {action: 'editISP'}, function(next){
			var u = keystone.list('ISP').model.updateOne(
				{ _id:locals.data.isps._id},
				{
					name:locals.formData.name,
					
				},
				function(err,results){
					if(err) return next(err);
					return res.redirect('/admin/isps');
				})

			var updater = locals.data.isps.getUpdateHandler(req);

			updater.process(req.body, {
			//fields: 'name',
			flashErrors: true,
			logErrors: true
			}, function (err, result) {
			if (err) {    
				locals.validationErrors = err.errors; 
			} else {
				req.flash('success', 'ISP updated.');         
				return res.redirect('/admin/isps');
				}
				next();
			});
	});

	view.on('post', {action: 'deleteISP'}, function(next){
		var u = keystone.list('ISP').model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){}
			else{
				req.flash('success','ISP deleted');
				return res.redirect('/admin/isps');
			}
			
		})

	});

	view.render('admin/isps_profile',pageData);
};
