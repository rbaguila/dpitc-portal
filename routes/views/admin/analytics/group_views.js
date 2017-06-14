var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	//init locals
	locals.section = 'users';
	locals.data = {
		group_views: [],
	};

	// Load Group Views
	view.on('init', function (next) {

		var u = keystone.list('GroupView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.group_views = results;
			next(err);
		});

	});

	view.render('admin/analytics/group_views',{path:req.path});
};
