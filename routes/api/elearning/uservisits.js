var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
  
  //var visits = [];
	
	//change this before deploying, use createdAt instead
	keystone.list('LOView').model.find().exec(function (err, results) {
		if (err || !results.length) {
		}
		//visits = results;
		//var visitsJSON = JSON.stringify(visits);
		//console.log(visitsJSON);
		//res.status(200).send(visitsJSON);
		//res.send(visitsJSON);
		//next();
		res.send(results);
	});
};

