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
	adminViews: importRoutes('./views/admin'),
	communityViews: importRoutes('./views/community'),
	eresourcesViews: importRoutes('./views/eresources'),
	elearningViews: importRoutes('./views/elearning'),
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


	//Admin
	app.get('/admin', middleware.requireUser, routes.adminViews.admin);
	
	//Admin analytics pages
	app.get('/admin/community-views', middleware.requireAnalyticsAdmin, routes.adminViews.analytics);
	app.get('/admin/community-views/:id',middleware.requireAnalyticsAdmin ,routes.adminViews.analytics_view);
	app.get('/admin/discussion-views', middleware.requireAnalyticsAdmin, routes.adminViews.analytics);
	app.get('/admin/group-views', middleware.requireAnalyticsAdmin, routes.adminViews.analytics);
	app.get('/admin/report-views', middleware.requireAnalyticsAdmin, routes.adminViews.analytics);

	app.get('/admin/users', middleware.requireUsersAdmin, routes.adminViews.users);
	app.get('/admin/users/:id', middleware.requireUsersAdmin ,routes.adminViews.users);
	//app.post('/admin/users/:id', routes.adminViews.users);
	
	//Admin community pages
	//app.get('/admin/community', routes.adminViews.community);
	
	//Admin publications
	app.get('/admin/publication-settings',middleware.requirePublicationsAdmin, routes.adminViews.publications);
	app.get('/admin/publications',middleware.requirePublicationsAdmin, routes.adminViews.publications);
	app.get('/admin/publications/:id', middleware.requirePublicationsAdmin, routes.adminViews.publication_view);
	app.get('/admin/publication-lines',middleware.requirePublicationsAdmin, routes.adminViews.publications);
	app.get('/admin/publication-feedback', middleware.requirePublicationsAdmin, routes.adminViews.publications);

	//Admin posts
	app.get('/admin/posts', routes.adminViews.posts);
	app.get('/admin/posts-categories', routes.adminViews.posts_categories);
	
	//Admin contents
	app.get('/admin/contents-fiesta', routes.adminViews.contents_fiesta);
	app.get('/admin/technologies', routes.adminViews.technologies);
	app.get('/admin/sliders', routes.adminViews.sliders);

	//Admin Elearning
	app.get('/admin/learning-objects', middleware.requireElearningAdmin,routes.adminViews.elearning);
	app.get('/admin/learning-objects/:id', middleware.requireElearningAdmin, routes.adminViews.elearning_view);
	app.get('/admin/courses', middleware.requireElearningAdmin, routes.adminViews.elearning);
	app.get('/admin/courses/:id',middleware.requireElearningAdmin, routes.adminViews.courses_view);
	app.get('/admin/learning-contents', middleware.requireElearningAdmin,routes.adminViews.elearning);
	app.get('/admin/learning-contents/:id',middleware.requireElearningAdmin, routes.adminViews.learning_content_view);

	// User

	// Signup Route
	app.get('/signup', routes.views.signup);
	app.post('/signup', routes.views.signup);


	// User-Elearning Routes
	app.get('/elearning/signup?', routes.elearningViews.user.signup);
	app.post('/elearning/signup?', routes.elearningViews.user.signup);
	app.get('/elearning/profile?', middleware.requireElearningUser, routes.elearningViews.user.profile);
	app.post('/elearning/profile?', middleware.requireElearningUser, routes.elearningViews.user.profile);
	app.get('/elearning/user-activity?', middleware.requireElearningUser, routes.elearningViews.user.userActivity);
	app.get('/elearning/user-activity/feedback', middleware.requireElearningUser, routes.elearningViews.user.feedback);


	// Elearning Routes
	app.get('/elearning/search?', routes.elearningViews.content.search);

	app.get('/elearning?', routes.elearningViews.content.elearning);
	app.get('/elearning/courses?', routes.elearningViews.content.courseList);
	app.get('/elearning/course/:courseslug?', routes.elearningViews.content.courseOutline);
	app.get('/elearning/learning-objects?', routes.elearningViews.content.learningObjectList);
	app.get('/elearning/learning-object/:learningobjectslug?', routes.elearningViews.content.learningObject);
	app.post('/elearning/learning-object/:learningobjectslug?', routes.elearningViews.content.learningObject);
	app.get('/elearning/learning-objects/popular?', routes.elearningViews.content.popular);
	app.get('/elearning/recommended?', middleware.requireElearningUser, routes.elearningViews.content.recommended);

	// Elearning Admin
	app.get('/elearning/analytics', middleware.requireElearningAdmin , routes.elearningViews.analytics.analytics);
	app.get('/elearning/analytics/recommendedViews', middleware.requireElearningAdmin , routes.elearningViews.analytics.analyticsRecommended);

	// Elearning File Uploads
	app.get('/api/elearning/fileupload/list', keystone.middleware.api, routes.api.elearning.fileupload.list);
	app.get('/api/elearning/fileupload/:id', keystone.middleware.api, routes.api.elearning.fileupload.get);
	app.all('/api/elearning/fileupload/:id/update', keystone.middleware.api, routes.api.elearning.fileupload.update);
	app.all('/api/elearning/fileupload/create', keystone.middleware.api, routes.api.elearning.fileupload.create);
	app.get('/api/elearning/fileupload/:id/remove', keystone.middleware.api, routes.api.elearning.fileupload.remove);



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
	app.get('/community/blogs', routes.communityViews.blog);
	app.get('/community/blogs/:category?', routes.communityViews.blog);
	app.get('/community/blogs/post/:post', routes.communityViews.post);
	app.get('/community/discussions', routes.communityViews.discussionList);
	app.get('/community/discussions/:category?', routes.communityViews.discussionList);
	app.get('/community/analytics', middleware.requireAdmin, routes.communityViews.analytics);

  //E Resources
  // app.get('/eresources', routes.eresourcesViews.eresources);
	app.get('/eresources', routes.eresourcesViews.publications);
	// app.get('/eresources/publications/:industry?', routes.eresourcesViews.publications);
  app.get('/eresources/page/:page', routes.eresourcesViews.publications);
  app.get('/eresources/publication/:publication', routes.eresourcesViews.publication);
	app.post('/eresources/publication/:publication', routes.eresourcesViews.publication);
  app.post('/eresources/feedback', routes.eresourcesViews.feedback);

  // E Resources Analytics/Reports
  app.get('/eresources/reports', middleware.requireAdmin, routes.eresourcesViews.analytics.dashboard);
  app.get('/eresources/reports/publications',middleware.requireAdmin, routes.eresourcesViews.analytics.reports.publications);
  app.post('/eresources/reports/publications', middleware.requireAdmin, routes.eresourcesViews.analytics.reports.publications);
  app.get('/eresources/reports/feedback',middleware.requireAdmin, routes.eresourcesViews.analytics.reports.feedback);
  app.post('/eresources/reports/feedback',middleware.requireAdmin, routes.eresourcesViews.analytics.reports.feedback);
  app.get('/eresources/reports/feedback-all', middleware.requireAdmin,routes.eresourcesViews.analytics.reports.feedbackAll)
  app.post('/eresources/reports/feedback-all', middleware.requireAdmin,routes.eresourcesViews.analytics.reports.feedbackAll)

	//Analytics Api Route
  app.get('/api/community/analytics/list', keystone.middleware.api, routes.api.communityAnalytics.list);
  app.get('/api/community/analytics/list/events', keystone.middleware.api, routes.api.communityAnalytics.listEvents);
  app.get('/api/community/analytics/list/reports', keystone.middleware.api, routes.api.communityAnalytics.listReports);
  app.get('/api/community/analytics/list/discussions', keystone.middleware.api, routes.api.communityAnalytics.listDiscussions);
  app.get('/api/community/analytics/list/groups', keystone.middleware.api, routes.api.communityAnalytics.listGroups);
  app.get('/api/community/analytics/list/view/events', keystone.middleware.api, routes.api.communityAnalytics.listEventViews);
  app.get('/api/community/analytics/list/view/reports', keystone.middleware.api, routes.api.communityAnalytics.listReportViews);
  app.get('/api/community/analytics/list/view/discussions', keystone.middleware.api, routes.api.communityAnalytics.listDiscussionViews);
  app.get('/api/community/analytics/list/view/groups', keystone.middleware.api, routes.api.communityAnalytics.listGroupViews);
  app.post('/api/community/analytics/community', keystone.middleware.api, routes.api.communityAnalytics.addCommView);
  app.post('/api/community/analytics/discussion', keystone.middleware.api, routes.api.communityAnalytics.addDiscView);
  app.post('/api/community/analytics/groups', keystone.middleware.api, routes.api.communityAnalytics.addGroupView);
  app.post('/api/community/analytics/event', keystone.middleware.api, routes.api.communityAnalytics.addEventView);
  app.post('/api/community/analytics/report', keystone.middleware.api, routes.api.communityAnalytics.addReportView);

	//File Upload Route
  app.get('/api/fileupload/list', keystone.middleware.api, routes.api.fileupload.list);
  app.get('/api/fileupload/:id', keystone.middleware.api, routes.api.fileupload.get);
  app.all('/api/fileupload/:id/update', keystone.middleware.api, routes.api.fileupload.update);
  app.all('/api/fileupload/create', keystone.middleware.api, routes.api.fileupload.create);
  app.get('/api/fileupload/:id/remove', keystone.middleware.api, routes.api.fileupload.remove);

	app.get('/:slug', page_router);

	app.get('/api/exhibits', routes.api.exhibit);

	app.get('/api/recommendedViews/:year', routes.api.recommendedViews);
	app.get('/elearning/api/uservisits', routes.api.elearning.uservisits);
	app.get('/elearning/api/uservisitsbyISP', routes.api.elearning.uservisitsbyISP);
	app.get('/elearning/api/reactionsbysector', routes.api.elearning.reactionsbysector);
	app.get('/elearning/api/uservisitsbyRegion', routes.api.elearning.uservisitsbyRegion);
	app.get('/elearning/api/userVisitsRatio', routes.api.elearning.userVisitsRatio);

  // Publications API
  app.get('/api/publications', keystone.middleware.api, routes.api.eresources.publications.getPublications);
  app.get('/api/publications/search/:searchKey', keystone.middleware.api, routes.api.eresources.publications.findPublication)
  app.get('/api/publications/reports/publications',keystone.middleware.api, routes.api.eresources.reports.publications);
  app.get('/api/publications/reports/feedback',keystone.middleware.api, routes.api.eresources.reports.feedback);

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
