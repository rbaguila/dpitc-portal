var keystone = require('keystone');

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
	locals.data = {
		path:req.path,
		elearning_logs:[],
	};

    //Load ELearning Log
	view.on('init', function (next) {

		var u = keystone.list('ELearningLog').model.findOne({_id: req.params.id});

		u.exec(function (err, results) {
			locals.data.elearning_logs = results;
			next(err);
		});

	});

	view.on('post', {action: 'deleteELearningLog'}, function(next){
		var u = keystone.list('ELearningLog').model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){}
			else{
				req.flash('success','ELearning Log deleted');
				return res.redirect('/admin/elearning-logs');
			}
			
		})

	});


	view.render('admin/elearningLog_profile',pageData);
};

