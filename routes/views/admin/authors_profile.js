var keystone = require('keystone');

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
			{ text: 'Publications', link: '/admin/publications'},
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
		path:req.path,
		authors:[],
	};

    //Load LOVideo
	view.on('init', function (next) {

		var u = keystone.list('Author').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.authors = results;
			next(err);
		});

	});

	view.on('post', {action: 'editAuthor'}, function(next){
			var u = keystone.list('Author').model.findOneAndUpdate(
				{ _id:locals.data.authors._id},
				{
					name:locals.formData.name,
					organization:locals.formData.organization,
				},
				function(err,results){
					if(err) return next(err);
					return res.redirect('/admin/authors');
					next();
				})

			var updater = locals.data.authors.getUpdateHandler(req);

			updater.process(req.body, {
			//fields: 'name',
			flashErrors: true,
			logErrors: true
			}, function (err, result) {
			if (err) {    
				locals.validationErrors = err.errors; 
				} else {
				req.flash('success', 'Author updated.');         
				return res.redirect('/admin/authors');
				}
				next();
			});
	});

	view.on('post', {action: 'deleteAuthor'}, function(next){
		var u = keystone.list('Author').model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){}
			else{
				req.flash('success','Author deleted');
				return res.redirect('/admin/authors');
			}
			
		})

	});

	view.render('admin/authors_profile',pageData);
};

