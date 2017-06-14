var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//init locals
	locals.section = 'users';
	locals.data = {
		user: [],
	};

	// Load users
	view.on('init', function (next) {

		var u = keystone.list('User').model.findOne()

		u.exec(function (err, results) {
			locals.data.users = results;
			next(err);
		});

	});


	view.render('admin/users');
};
