var keystone = require('keystone');  

exports = module.exports = function(req, res) {
  
	var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var LOReactions = [];
  
  var totalLikes = 0, totalHappy = 0, totalSad = 0;

  keystone.list('LearningObject').model.find().exec(function (err, results) {

				if (err || !results.length) {
					//return (err);
				}
				//console.log(results);
				for(var i=0;i<results.length;i++){
					totalLikes += results[i].likes.length;
					totalHappy += results[i].happy.length;
					totalSad += results[i].sad.length;
				}
				var eachLOReaction = {};
				eachLOReaction.label = "Likes";
                eachLOReaction.value = totalLikes;
                //console.log(eachLOReaction);
                LOReactions.push(eachLOReaction);

                eachLOReaction = {};
				eachLOReaction.label = "Happy";
                eachLOReaction.value = totalHappy;
                LOReactions.push(eachLOReaction);

                eachLOReaction = {};
				eachLOReaction.label = "Sad";
                eachLOReaction.value = totalSad;
                LOReactions.push(eachLOReaction);
				var LOReactionsJSON = JSON.stringify(LOReactions);
  			res.send(LOReactionsJSON);
	});
  
};

