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
	keystone.list('LOView').model.find().populate('learningObject').exec(function (err, results) {
		if (err || !results.length) {

		}
		else{
			var region_city = [];
			var counter = 0;
			async.each(results, function (loview, next) {
				var obj = {};
				obj.region = loview.region;
				obj.city = loview.city;
				if(inArrayRegionCity(obj.region, obj.city, region_city)==false){
					var loList = getLO(obj.region, obj.city, results);
					keystone.list('ISP').model.find().exec(function (err, resulta) {
						if (err || !resulta.length) {
							counter++;
						}
						else{
							counter++;
							for(var i=0;i<resulta.length;i++){
								resulta[i].score=0;
								var str = resulta[i]._id+"";
								for(var j=0;j<loList.length;j++){
									var str2 = loList[j].isp+"";
									if(str==str2){
										resulta[i].score++;
									}
								}
								if(resulta[i].score>0){
									obj[resulta[i].name] = resulta[i].score;
								}
							}
							region_city.push(obj);
							if(counter==results.length){
								//console.log(region_city);
								res.send(region_city);
							}
						}
					});
				}
				else{
					counter++;
				}
			}, function (err) {
				next(err);
			});
		}
	});
};

function inArrayRegionCity(region, city, region_city){
	for(var i=0;i<region_city.length;i++){
		if(region_city[i].region==region&&region_city[i].city==city) return true;
	}
	return false;
}

function getLO(region, city, list){
	var loList = [];
	for(var i=0;i<list.length;i++){
		if(list[i].region==region&&list[i].city==city){
			loList.push(list[i].learningObject);
		}
	}
	return loList;
}