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
	view.query('settings', keystone.list('Settings').model.findOne({key: 'dpitc'}));
	// Render the view
	view.render('index');
};
