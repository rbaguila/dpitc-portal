keystone = require('keystone');
var http = require('http');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var ELearningLog = keystone.list('ELearningLog');


exports = module.exports = function (req, res) {
  var searchKey = req.query.key;

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';
  locals.url = '/elearning/search?key='+req.query.key;
  locals.previousUrl = req.query.from;

  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  locals.formData = req.body || {};

  locals.searchSubmitted = false;
  //locals.searchUrl = locals.url + 'action=elearning.search&search=';
  locals.searchResults = [];
  var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;

  var pageData = {
    loginRedirect: locals.url,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'search results', link: locals.url },
    ]
  }
  
  /* Search */
  view.on('init', function (next) {
    locals.searchSubmitted = true;
  //  locals.searchUrl = locals.searchUrl+req.query.search+'&';

    LearningContent.model.find(
        { $text: { $search: req.query.key } },
        { score: { $meta: "textScore" } }
      )
      .sort( { score: { $meta: "textScore" } } )
      .exec( function(err, results) {
          if (err){
            return next(err);
          }
          locals.searchResults = results;

          locals.paginatedSearchResults = helper.paginate(locals.searchResults, locals.page, locals.perPage);

          next();
          
        });
  });

  /* Add search log */
  view.on('init', function (next) {
    helper.addElearningLog(locals.user, ip, 'SEARCH '+locals.url);
    next();
  });
  
  // Render the view
  view.render('elearning/content/search', pageData);

};