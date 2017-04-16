/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var page_router = require('./page_router');

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	communityViews: importRoutes('./views/community'),
	eresourcesViews: importRoutes('./views/eresources'),
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.get('/fiesta', routes.views.fiesta);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/exhibit', routes.views.fiesta);
	app.get('/exhibit/:exhibit', routes.views.exhibit);
	app.get('/gallery', routes.views.gallery);
	
	// User
	app.get('/signup?', routes.views.signup);
	app.post('/signup?', routes.views.signup);
	app.get('/profile?', routes.views.profile);
	app.post('/profile?', routes.views.profile);

	// Elearning Routes
	app.get('/elearning', routes.views.elearning.elearning);
	app.get('/elearning/courses?', routes.views.elearning.courseList);
	app.get('/elearning/course/:courseslug?', routes.views.elearning.courseOutline);
	app.get('/elearning/chapter/:chapterslug?', routes.views.elearning.chapterOutline);
	app.get('/elearning/learning-object/:learningobjectslug', routes.views.elearning.learningObject);
	app.post('/elearning/learning-object/:learningobjectslug', routes.views.elearning.learningObject);
	app.get('/elearning/analytics', middleware.requireAdmin , routes.views.elearning.analytics);
	app.get('/elearning/analytics/users?', middleware.requireAdmin , routes.views.elearning.analyticsUsersList);
	app.get('/elearning/analytics/users/:userid?', middleware.requireAdmin , routes.views.elearning.analyticsUsers);
	app.get('/elearning/analytics/:learningobjectslug?', middleware.requireAdmin , routes.views.elearning.analyticsLO);
	app.get('/elearning/analytics/learning-objects/:industry?', middleware.requireAdmin , routes.views.elearning.analyticsLOList);
	
	app.get('/elearning/popular?', routes.views.elearning.popular);
	app.get('/elearning/:userid/recommended?', routes.views.elearning.recommended);

	app.get('/search/', function(req,res){
		var searchKey = req.query.searchKey;
		res.writeHead(301,
		  {Location: 'https://pcaarrd-km.herokuapp.com/#/result/all?searchKey='+searchKey}
		);
		res.end();
	});

	// app.all('/contact', routes.views.contact);

	//Community
	app.get('/community', routes.communityViews.community);
	app.get('/eresources', routes.eresourcesViews.eresources);
	app.get('/eresources/publications', routes.eresourcesViews.publications); //Redundant
	app.get('/eresources/publications/:page', routes.eresourcesViews.publications);
	app.get('/eresources/publication/:publication', routes.eresourcesViews.publication);

	//File Upload Route
  app.get('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
  app.get('/api/fileupload/:id', keystone.middleware.api, routes.api.fileupload.get);
  app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
  app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
  app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);

	app.get('/:slug', page_router);

	app.get('/api/exhibits', routes.api.exhibit);

	app.get('/api/LOReactions', routes.api.LOReactions);
	app.get('/api/LOComments/:year', routes.api.LOComments);
	app.get('/api/LOViews/:year', routes.api.LOViews);
	app.get('/api/views/:key/:year', routes.api.eachLOViews);
	app.get('/api/comments/:key/:year', routes.api.eachLOComments);
	app.get('/api/reactions/:key', routes.api.eachLOReactions);
	app.get('/api/userviews/:id/:year', routes.api.eachUserViews);
	app.get('/api/usercomments/:id/:year', routes.api.eachUserComments);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
