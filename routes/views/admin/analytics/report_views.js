var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var path;

	//init locals
	locals.section = 'users';
	locals.data = {
		report_views: [],
	};

	// Load Report Views
	view.on('init', function (next) {

		var u = keystone.list('ReportView').model.find().sort('-time')

		u.exec(function (err, results) {
			locals.data.report_views = results;
			next(err);
		});

	});

	view.render('admin/analytics/report_views',{path:req.path});
};