var keystone = require('keystone'); 
var async = require('async');
var LearningObject = keystone.list('LearningObject');
var LOComment = keystone.list('LOComment');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
 
	var start = new Date(req.params.year, 0, 1);
	var end = new Date(req.params.year, 11, 31);

	LearningObject.model.findOne({
        slug: req.params.key
    })
    .exec(function(err, result) {
    	LOComment.model.find().where('learningObject', result._id).where('createdAt').gte(start).lt(end).exec(function(err, results){
    		if (err || !results.length) {
          //return (err);
        }
        var eachCommentsJSON = JSON.stringify(results);
        res.send(eachCommentsJSON);
    	});
    });

};

