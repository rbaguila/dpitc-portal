/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');
var keystone = require('keystone');

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	// NavLinks = keystone.list('NavLink');
	res.locals.navLinks = 
	[
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'FIESTA', key: 'fiesta', href: 'http://128.199.180.28/fiesta' },
		{ label: 'Technology', key: 'tech', href: 'https://pcaarrd-km.herokuapp.com/#/' },
		{ label: 'Community', key: 'community', href: '/community' },
		{ label: 'eResources', key: 'eresources', href: '/eresources' },
		// { label: 'Home', key: 'home', href: '/' },
		// { label: 'Blog', key: 'blog', href: '/blog' },
		// { label: 'Gallery', key: 'gallery', href: '/gallery' },
		// { label: 'Contact', key: 'contact', href: '/contact' },
	];
	res.locals.user = req.user;
	// res.locals.logo = keystone.list('Settings').model.findOne({key: 'dpitc'});
	
	keystone.list('Settings').model.findOne({key: 'dpitc'}).exec(function (err, result) {
		res.locals.settings = result;
		console.log(result);
		// next(err);
	});

	// console.log(keystone.list('Settings').model.findOne({key: 'dpitc'}));
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

/**
	Prevents people from accessing protected pages when they're not the admin
 */
exports.requireAdmin = function (req, res, next) {
	if (!req.user) {
		//req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		if(!req.user.isAdmin){
			//req.flash('error', 'You are not authorized to view this page.');
			res.redirect('/keystone/signin');
		}
		else{
			next();
		}
	}
};


/*
	Elearning Permissions
*/
exports.requireElearningAdmin = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		if(!req.user.isElearningAdmin){
			req.flash('error', 'You are not authorized to view this page.');
			res.redirect('/keystone/signin');
		}
		else{
			next();
		}
	}
}

exports.requireElearningUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		if(!req.user.isElearningUser){
		///	req.flash('error', 'You are not authorized to view this page.');
			res.redirect('/keystone/signin');
		}
		else{
			next();
		}
	}
}
