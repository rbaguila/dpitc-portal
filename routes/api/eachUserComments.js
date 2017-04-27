var keystone = require('keystone'); 
var async = require('async');
var LOComment = keystone.list('LOComment');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
 
	var start = new Date(req.params.year, 0, 1);
	var end = new Date(req.params.year, 11, 31);

	LOComment.model.find().where('author', req.params.id).where('createdAt').gte(start).lt(end).exec(function(err, results){
		if (err || !results.length) {
      //res.send(null);
    }
    var eachUserCommentsJSON = JSON.stringify(results);
    res.send(eachUserCommentsJSON);
	});

};

