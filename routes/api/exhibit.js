var keystone = require('keystone');  

exports = module.exports = function(req, res) {
  
	var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var exhibits;
  
  keystone.list('Exhibit').model.find({}, {title: 1, "image.url":1, "content.brief":1, _id:0}).sort('title').exec(function (err, results) {

				if (err || !results.length) {
					return next(err);
				}
				console.log(results);
				exhibits = results;
				var exhibitJSON = JSON.stringify(exhibits);

  			res.send(exhibitJSON);
	});
  
};

