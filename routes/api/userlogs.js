var keystone = require('keystone');  

exports = module.exports = function(req, res) {
  
	var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');

  keystone.list('UserLog').model.find().exec(function (err, results) {

				if (err || !results.length) {
					return next(err);
				}
				var userlogsJSON = JSON.stringify(results);
  			res.send(userlogsJSON);
	});
  
};

