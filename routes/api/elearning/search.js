var keystone = require('keystone'); 
var async = require('async');

var LearningContent = keystone.list('LearningContent');
var Author = keystone.list('Author');


exports = module.exports = function(req, res) {
  
  var locals = res.locals;
  locals.searchKey = req.q

  // TODO
  /*keystone.list('Post').model.find({
    title: new RegExp('^'+req.body.search+'$', "i")
  }, function(err, results) {
    // Do your action here..
    locals.data.locations = results;
    if (results == ''){
      locals.data.invalid = 'Invalid search';
    }
    next(err);
  });
*/

};

