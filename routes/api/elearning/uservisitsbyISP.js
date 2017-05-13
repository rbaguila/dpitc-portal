var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
  
	var data = {};
	//change this before deploying, use createdAt instead
	keystone.list('ISP').model.find().populate('sector').exec(function (err, results) {
		if (err || !results.length) {
			res.send(data);
		}
		else{
			var counter = 0;
			async.each(results, function (isp, next) {
				keystone.list('LearningObject').model.find().where('isp', isp._id).exec(function (err, r) {
					if (err || !r.length) {
					}
					else{
						var ids = [];
						for(var j=0;j<r.length;j++){
							ids.push(r[j]._id);
						}
						keystone.list('LOView').model.count().where('learningObject').in(ids).exec(function (err, count) {
							if(count>0){
								var obj2 = {};
								obj2['Views'] = count.toString();
								if(data[isp.sector.name]==undefined){
									data[isp.sector.name] = {};
								}
								data[isp.sector.name][isp.name] = obj2;
							}
							counter++;
							if(counter==results.length){
								res.send(data);
							}
						});
					}
				});
			}, function (err) {
				next(err);
			});
		}
	});
};

