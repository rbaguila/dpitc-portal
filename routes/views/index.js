var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// Load the galleries by sortOrder
	view.query('slider', keystone.list('Slider').model.find().sort('sortOrder'));

	// Render the view
	view.render('index');
};
