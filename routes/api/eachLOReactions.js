var keystone = require('keystone');  

exports = module.exports = function(req, res) {
  
	var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var eachLearningObjReactions = [];

  var totalReactions= 0;

  //TO DO MAY MALI PA DITO!
  keystone.list('LearningObject').model.find().exec(function (err, results) {

				if (err || !results.length) {
					return next(err);
				}

				for(var i=0;i<results.length;i++){
					totalReactions = 0;
					totalReactions += results[i].likes.length + results[i].happy.length + results[i].sad.length;
					results.reactions = totalReactions;
				}
				results.sort(function(a,b){
			        return parseFloat(b.reactions) - parseFloat(a.reactions);
			    });
			    var eachLOReaction = {};
			    var eachLearningObjReactionsJSON;
			    if(req.params.type=="highest"){
					eachLOReaction.label = "Likes";
	                eachLOReaction.value = results[0].likes.length;
	                eachLearningObjReactions.push(eachLOReaction);

	                eachLOReaction = {};
					eachLOReaction.label = "Happy";
	                eachLOReaction.value = results[0].happy.length;
	                eachLearningObjReactions.push(eachLOReaction);

	                eachLOReaction = {};
					eachLOReaction.label = "Sad";
	                eachLOReaction.value = results[0].sad.length;
	                eachLearningObjReactions.push(eachLOReaction);
			    }
			    else if(req.params.type=="lowest"){
			    	eachLOReaction.label = "Likes";
	                eachLOReaction.value = results[(results.length-1)].likes.length;
	                eachLearningObjReactions.push(eachLOReaction);

	                eachLOReaction = {};
					eachLOReaction.label = "Happy";
	                eachLOReaction.value = results[(results.length-1)].happy.length;
	                eachLearningObjReactions.push(eachLOReaction);

	                eachLOReaction = {};
					eachLOReaction.label = "Sad";
	                eachLOReaction.value = results[(results.length-1)].sad.length;
	                eachLearningObjReactions.push(eachLOReaction);
			    }
				var eachLearningObjReactionsJSON = JSON.stringify(eachLearningObjReactions);
  			res.send(eachLearningObjReactionsJSON);
	});
  
};

