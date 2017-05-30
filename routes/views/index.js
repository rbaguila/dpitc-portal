var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load the galleries by sortOrder
	// view.query('slider', keystone.list('Slider').model.find({ "route": "/" }).sort('sortOrder'));
	view.query('posts', keystone.list('Post').model.find().sort('sortOrder'));

	view.query('fiesta', keystone.list('Fiesta').model.find().sort('sortOrder'));

	view.query('technologies', keystone.list('Technology').model.find().sort('sortOrder'));
	// Render the view
	view.render('index');
};
