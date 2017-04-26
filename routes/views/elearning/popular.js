var keystone = require('keystone');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');

var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'elearning';
  locals.url = '/elearning/learning-objects/popular?';

  var pageData = {
    loginRedirect: '/elearning/popular?', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'popular', link: '/elearning/learning-objects/popular?' },
    ]
  }

  locals.popularLO = [];

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.duration = req.query.duration == undefined ? 'month': req.query.duration; 
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  var pastLOviews = [];

  // Get all LOViews withing the past 30 days.
  view.on('init', function (next) {

    var currentDate = moment().toDate();
    var startDate;

    if (locals.duration=='day') 
      startDate = currentDate
    else if (locals.duration=='week')
      startDate = moment().subtract(7, 'days').toDate();
    else if (locals.duration=='month')
      startDate = moment().subtract(30, 'days').toDate();

    LOView.model.find({
      dateViewed: { 
        $gte: startDate, 
        $lt: currentDate
      }
      })
      .populate('learningObject')
      .sort('-dateViewed')
      .exec(function(err, results) {
        if(err) return next(err);

        pastLOviews = results;

        // Get loview.count of all same learningObjects
        async.each(pastLOviews, function(loview, next) {
          //console.log(loview.learningObject);

          LOView.model.find({
            dateViewed: {
              $gte: startDate,
              $lt: currentDate
            },
            learningObject: loview.learningObject._id
           })
          .count()
          .exec(function (err, count) {
            
            if (err) return next(err);
            
            loview.learningObject.viewCount = count;
            
            // Uniquely push to locals.popularLO[]
            if (locals.popularLO.indexOf(loview.learningObject) === -1) {
              locals.popularLO.push(loview.learningObject);
            }            

            next();
          })
        
        }, function(err) {
          next(err);
        });
        
      });
      
  });

  view.on('init', function(next) {
    // Sort locals.popularLO[]
    locals.popularLO.sort( function (a, b) {
      return parseFloat(b.viewCount) - parseFloat(a.viewCount); 
    });

    // paginate locals.popularLO
    locals.paginatePopularLO = paginate(locals.popularLO, locals.page, locals.perPage);
   
    next();
  });

  // Pagination function for an Array of Objects
  // Similar to Keystone JS pagination query
  var paginate = function (array, page, perPage) {

    /*
      keystone's paginate()
      total: all matching results (not just on this page)
      results: array of results for this page
      currentPage: the index of the current page
      totalPages: the total number of pages
      pages: array of pages to display
      previous: index of the previous page, false if at the first page
      next: index of the next page, false if at the last page
      first: the index of the first result included
      last: index of the last result included

    */

    var pagination = {
      total: array.length,
      results: paginateArray(array, perPage, page),
      currentPage: page,
      pages: _.range(1, Math.ceil(array.length / perPage)+1),
      
    };

    pagination.first = pagination.pages[0];
    pagination.last = Math.ceil(array.length / perPage);

    pagination.previous = page == pagination.first ? false : page - 1;
    pagination.next = page == pagination.last ? false : page + 1;

    return pagination;
  }

  var paginateArray = function (array, page_size, page_number) {
    --page_number; // because pages logically start with 1, but technically with 0
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }

  view.render('elearning/popular', pageData);
}
