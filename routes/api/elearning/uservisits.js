var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
  
  	var visits = [];
	
	//change this before deploying, use createdAt instead
	keystone.list('LOView').model.find().sort('dateViewed').exec(function (err, results) {
		if (err || !results.length) {
			res.send(visits);
		}
		else{
			visits = results;
			keystone.list('ELearningVisit').model.find().sort('dateViewed').exec(function (err, r) {
				if (err || !r.length) {
					res.send(visits);
				}
				else{
					visits = visits.concat(r);
					visits.sort(function(a,b){
					  return new Date(a.dateViewed) - new Date(b.dateViewed);
					});
					res.send(visits);
				}
			});
		}
	});
};

