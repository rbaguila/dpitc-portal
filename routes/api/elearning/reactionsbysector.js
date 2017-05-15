var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
  
  //var visits = [];
	var temp = [];
	//change this before deploying, use createdAt instead
	keystone.list('LSector').model.find().exec(function (err, results) {
		if (err || !results.length) {
			res.send(temp);
		}
		else{
			async.each(results, function (sector, next) {
				var obj = {};
				obj.sector = sector.name;
				obj.likes = 0;
				obj.happy = 0;
				obj.sad = 0;
				obj.average = 0;
				keystone.list('LearningObject').model.find().where('sector', sector._id).exec(function (err, r) {
					for(var j=0;j<r.length;j++){
						obj.likes = obj.likes+r[j].likes.length;
						obj.happy = obj.happy+r[j].happy.length;
						obj.sad = obj.sad+r[j].sad.length;
					}
					obj.average = (obj.likes + obj.happy + obj.sad)/3;
					temp.push(obj);
					if(temp.length==results.length){
						res.send(temp);
					}
				});
			}, function (err) {
				next(err);
			});
		}
	});
};

