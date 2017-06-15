var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;

	//init locals
	locals.section = 'users';
	locals.data = {
		learning_objects: [],
        author:[],
	};

	// Load LO
	view.on('init', function (next) {

		var u = keystone.list('LearningObject').model.find().sort({ publishedAt: 1 })

		u.exec(function (err, results) {
			locals.data.learning_objects = results;
			next(err);
		});

	});

    view.on('init', function (next) {

		var u = keystone.list('Author').model.find().sort({ publishedAt: 1 })

		u.exec(function (err, results) {
			locals.data.author = results;
			next(err);
		});

	});


	view.render('admin/elearning/learning_objects');
};
