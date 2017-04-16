var keystone = require('keystone');
var async = require('async');
var moment = require('moment');

var Course = keystone.list('Course');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');
var LOView = keystone.list('LOView');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'elearning';

  var pageData = {
    loginRedirect: '/elearning', 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
    ]
  }

  locals.popularLO = [];

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  // TODO
  // Load Popular LearningObjects
  view.query('learningObjects', keystone.list('LearningObject').model.find().sort('-PublishedAt').limit(12));

  // Load popular LearningObjects
  view.on('init', function(next) {
    var currentDate = moment().toDate();
    var startDate = moment().subtract(30, 'days').toDate();

    // Get all LOViews withing the past 30 days.
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

        locals.popularLOViews = results;
        
        // Add each LearningObject from popularLOViews to popularLO array
        async.each(locals.popularLOViews, function(loview, next) {

          if(locals.popularLO.indexOf(loview.learningObject) === -1){

            LOView.model.find({
              learningObject: loview.learningObject._id
            })
            .exec(function(err, results){
              if(err) next(err);
              loview.learningObject.loviews = results;
              next();
            });

            locals.popularLO.push(loview.learningObject);  
          }
          
        }, function(err) {
          next(err);
        })

        next();
      });
  });

  // TODO paginate
  var paginate = function(array, page_size, page_number) {
    --page_number;
    return array.slice(page_number * page_size, (page_number + 1) * page_size);
  }
 
  view.render('elearning/popular', pageData);
}
