var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//init locals
	locals.section = 'users';
	locals.data = {
        path:[],
		discussion_views: [],
	};

	// Load Discussion Views
	view.on('init', function (next) {

		var u = keystone.list('DiscussionView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.discussion_views = results;
			next(err);
		});

	});	


	view.render('admin/analytics/discussion_views');
};
