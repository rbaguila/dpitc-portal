var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//init locals
	locals.section = 'users';
	locals.data = {
		publications: [],
	};

	// Load publications settings
	view.on('init', function (next) {

		var u = keystone.list('Publication').model.find().sort({ title: 1 })

		u.exec(function (err, results) {
			locals.data.publications = results;
			next(err);
		});

	});

	view.render('admin/publications/publications');
};
