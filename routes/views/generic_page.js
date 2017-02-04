var keystone = require('keystone');

exports = module.exports = function(req, res) {
	var view = new keystone.View(req, res);
	console.log("pumasok dito! :))");
	view.render('generic_page');
};
