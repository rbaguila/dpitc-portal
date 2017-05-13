var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  //res.contentType('application/jsonp');
  
  	var visits = [];
  	var temp = [];
	
	//change this before deploying, use createdAt instead
	keystone.list('LOView').model.find().exec(function (err, results) {
		if (err || !results.length) {
			res.send(visits);
		}
		else{
			var userctr = 0;
			var nonuserctr = 0;
			for(var i=0;i<results.length;i++){
				if(results[i].user!=undefined){
					userctr++;
				}
				else{
					nonuserctr++;
				}
			}
			temp = [];
			temp.push('User visits');
			temp.push(userctr);
			visits.push(temp);
			temp = [];
			temp.push('Non-user visits');
			temp.push(nonuserctr);
			visits.push(temp);
			keystone.list('ELearningVisit').model.find().exec(function (err, r) {
				if (err || !r.length) {
					res.send(visits);
				}
				else{
					for(var j=0;j<r.length;j++){
						if(r[j].isUser==true){
							userctr++;
						}
						else{
							nonuserctr++;
						}
					}
					visits = [];
					temp = [];
					temp.push('User visits');
					temp.push(userctr);
					visits.push(temp);
					temp = [];
					temp.push('Non-user visits');
					temp.push(nonuserctr);
					visits.push(temp);
					res.send(visits);
				}
			});
		}
	});
};

