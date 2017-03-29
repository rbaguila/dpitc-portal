var keystone = require('keystone');
var LearningObject = keystone.list('LearningObject');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals

  locals.data = {
    currLO: [],
    otherLO: [],
    recommendedLO: [],
  };

  // Load the current learning object
  view.on('init', function(next){
    LearningObject.model.findOne({
      slug: req.params.learningobjectslug,
      state: 'published',
    })  
    .populate('author images video isp sector industry')
    .exec(function(err, result){
      if(result != null){
        locals.data.currLO = result;
        console.log(result);
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, LearningObject:' + req.params.learningobjectslug +' not found! (404)'));
      }
      next(err);
    });
  });

  // TODO
  // Load other learning objects besides current
  view.on('init', function(next){
    LearningObject.model.find({
      state: 'published',
    })
    .limit(6)
    .exec(function(err, results){
      if(results != null){
        locals.data.otherLO = results;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, There are no course found! (404)'));
      }
      next(err);
    });
  });

  // TODO
  // Load recommended learning objects
  view.on('init', function(next){
    LearningObject.model.find({
      state: 'published',
    })
    .limit(6)
    .exec(function(err, results){
      if(results != null){
        locals.data.recommendedLO = results;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, There are no course found! (404)'));
      }
      next(err);
    });
  });

  // Render the view
  view.render('elearning/learningObject');

};
