var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	var pageData = {
		navLinks: [
			{ text: 'Home', link: '/admin' },
			{ text: 'Posts', link: '/admin/posts'},
			{ text: 'Contents', link: '/admin/contents-fiesta'},
			{ text: 'Pages', link: '#'},
			{ text: 'Users', link: '/admin/users'},
			{ text: 'Analytics', link: '/admin/community-views'},
			{ text: 'Community', link: '/admin/community'},
			{ text: 'Publications', link: '/admin/publication-settings'},
			{ text: 'Categories', link: '#'},
			{ text: 'ELearning', link: '/admin/learning-objects'}
		],
		breadcrumbs:[
			{ text: 'Community Views', link: '/admin/community-views'},
			{ text: 'Discussion Views', link: '/admin/discussion-views'},
			{ text: 'Group Views', link: '/admin/group-views'},
			{ text: 'Report Views', link: '/admin/report-views'}
		]
  	};

	//init locals
	locals.data = {
		discussion_views:[],
		path:req.path,
	};

	// Load Discussion Views
	view.on('init', function (next) {

		var u = keystone.list('DiscussionView').model.findOne({_id: req.params.id})

		u.exec(function (err, results) {
			locals.data.discussion_views = results;
			next(err);
		});

	});

	view.on('post', {action: 'deleteDiscussionView'}, function(next){
		var u = keystone.list('DiscussionView').model.remove({_id: req.params.id});

		u.exec(function (err, results){
			if(err){}
			else{
				req.flash('success','Discussion View deleted');
				return res.redirect('/admin/discussion-views');
			}
			
		})

	});

	view.render('admin/discussionViews_profile',pageData);
};
