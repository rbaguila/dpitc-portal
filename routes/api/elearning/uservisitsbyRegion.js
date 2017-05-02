var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
	
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
				var loList = getLO(obj.region, obj.city, results);
				keystone.list('ISP').model.find().exec(function (err, resulta) {
					if (err || !resulta.length) {
						counter++;
					}
					else{
						counter++;
						var checker = 0;
						for(var i=0;i<region_city.length;i++){
							if(region_city[i].region==obj.region&&region_city[i].city==obj.city){
								checker=1;
								break;
							}
						}
						if(checker==0){
							obj.isp = [];
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
									//obj[resulta[i].name] = resulta[i].score;
									
									var arr = [];
									arr.push(resulta[i].name);
									arr.push(resulta[i].score);
									obj.isp.push(arr);
								}
							}
							if(obj.region!=undefined&&obj.city!=undefined){
								region_city.push(obj);
							}
						}
						if(counter==results.length){
							res.send(region_city);
						}
					}
				});
			}, function (err) {
				next(err);
			});
		}
	});
};

function getLO(region, city, list){
	var loList = [];
	for(var i=0;i<list.length;i++){
		if(list[i].region==region&&list[i].city==city){
			loList.push(list[i].learningObject);
		}
	}
	return loList;
}