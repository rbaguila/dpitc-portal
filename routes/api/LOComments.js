var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var LOComments = [];
	var start = new Date(req.params.year, 0, 1);
	var end = new Date(req.params.year, 11, 31);
	
	//change this before deplyoning, use createdAt instead
	keystone.list('LOComment').model.find().where('createdAt').gte(start).lt(end).exec(function (err, results) {
		if (err || !results.length) {
			//return (err);
		}
		LOComments = results;
		var LOCommentsJSON = JSON.stringify(LOComments);
		res.send(LOCommentsJSON);
		//next();
	});
};

