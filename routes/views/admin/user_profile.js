var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//init locals
	locals.section = 'users';
	locals.data = {
		user: [],
	};

	// Load user
	view.on('init', function (next) {

		var u = keystone.list('User').model.findOne( { _id: req.query._id } )

		u.exec(function (err, results) {
			locals.data.user = results;
			next(err);
		});

	});
	console.log("hi");
	console.log(locals.data.user);

	view.render('admin/user-profile');
};
