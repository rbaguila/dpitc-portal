var keystone = require('keystone');  
var importRoutes = keystone.importer(__dirname);
var views = keystone.importer(__dirname)('./views');

var routes = {
	views: importRoutes('./views'),
};

exports = module.exports = function(req, res) {

	// var view = new keystone.View(req, res);  
	var locals = res.locals;
	var q = keystone.list('BasePage').model.findOne({
		slug: req.params.slug
	});
	console.log(req.params.slug);
	
	q.exec(function(err, results){
		if (!results) {
			// return res.status(404).send('Page Not Found!');
			res.status(404).render('errors/404');
		}
		locals.pages = results;
		console.log(results.constructor.view_name);
		if(results.constructor.view_name) {
			return routes.views[results.constructor.view_name](req, res);
			// view.render(results.constructor.view_name);
		} else {
			// view.render('standard_page');
			return routes.views.standard_page(req, res);
		}
	});
};
