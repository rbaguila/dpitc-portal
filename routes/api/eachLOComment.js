var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
 
	var start = new Date(req.params.year, 0, 1);
	var end = new Date(req.params.year, 11, 31);

	//TO DO
	//CHANGE THIS, FIND THE LEARNING OBJECT WITH HIGHEST NUMBER OF COMMENTS OR RECENT CREATED LO THEN PRCOEED WITH THE SECOND QUERY
	//change this before deplyoning, use createdAt instead
	keystone.list('LOComment').model.find()
	    .sort('-publishedAt')
	    .exec(function (err, results) {
	    	keystone.list('LOComment').model.find({learningObject: results[req.params.recent].learningObject}).where('publishedAt').gte(start).lt(end).exec(function(err, results){
	    		//console.log(results);
	    		var eachLOCommentsJSON = JSON.stringify(results);
				res.send(eachLOCommentsJSON);
	    	});
	    });
};

