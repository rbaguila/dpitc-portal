var keystone = require('keystone');
var CommunityView = keystone.list('CommunityView');
var DiscussionView = keystone.list('DiscussionView');
var GroupView = keystone.list('GroupView');
var ReportView = keystone.list('ReportView');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	var pageData = {
		title: 'Community Views',
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
			{ text: 'Community Views', link: '/admin/community-views'},
			{ text: 'Discussion Views', link: '/admin/discussion-views'},
			{ text: 'Group Views', link: '/admin/group-views'},
			{ text: 'Report Views', link: '/admin/report-views'}
		]
  	};

	//init locals
	locals.data = {
		community_views: [],
		discussion_views:[],
		group_views:[],
		report_views:[],
		path:req.path,
	};

	// Load Community Views
	view.on('init', function (next) {

		var u = CommunityView.model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.community_views = results;
			next(err);
		});

	});

	view.on('post',{action: 'createCommunityView'}, function (next) {
		var newView = new CommunityView.model();

		var updater = newView.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newView);
          		req.flash('success', 'Community View created');         
          		return res.redirect('/admin/community-views');
       	 	}
        next();
      	});
	});	

	// Load Discussion Views
	view.on('init', function (next) {

		var u = DiscussionView.model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.discussion_views = results;
			next(err);
		});

	});

	view.on('post',{action: 'createDiscussionView'}, function (next) {
		var newView = new DiscussionView.model();

		var updater = newView.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newView);
          		req.flash('success', 'Discussion View created');         
          		return res.redirect('/admin/discussion-views');
       	 	}
        next();
      	});
	});	

	// Load Group Views
	view.on('init', function (next) {

		var u = GroupView.model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.group_views = results;
			next(err);
		});

	});

	view.on('post',{action: 'createGroupView'}, function (next) {
		var newView = new GroupView.model();

		var updater = newView.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newView);
          		req.flash('success', 'Group View created');         
          		return res.redirect('/admin/group-views');
       	 	}
        next();
    	});
	});	

	// Load Report Views
	view.on('init', function (next) {

		var u = ReportView.model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.report_views = results;
			next(err);
		});

	});

	view.on('post',{action: 'createReportView'}, function (next) {
		var newView = new ReportView.model();

		var updater = newView.getUpdateHandler(req);

		updater.process(req.body, {
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newView);
          		req.flash('success', 'Report View created');         
          		return res.redirect('/admin/report-views');
       	 	}
        next();
    	});
	});	

	view.render('admin/analytics',pageData);
};
