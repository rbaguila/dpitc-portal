var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var LOComments = [];
	//TO DO--- include the year in the parameter
	keystone.list('LOComment').model.find().exec(function (err, results) {

		if (err || !results.length) {
			return next(err);
		}
		LOComments = results;
		var LOCommentsJSON = JSON.stringify(LOComments);
		res.send(LOCommentsJSON);
		//next();
	});
};

