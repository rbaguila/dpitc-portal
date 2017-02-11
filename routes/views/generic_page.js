var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	console.log("ROUTE: " + req.params.slug);
	var route = req.params.slug;

	view.query('slider', keystone.list('Slider').model.find({ "route": "/" + route }).sort('sortOrder'));
	view.render('generic_page');
};
