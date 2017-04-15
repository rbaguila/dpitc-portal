var keystone = require('keystone'); 
var async = require('async');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function(req, res) {
  
	var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');

	LearningObject.model.findOne({
	    slug: req.params.key
	})
	.exec(function(err, result) {
	   	if(err){
	    	return next(err);
	    }
	    var objarray = [];

	    var obj = {};
	    obj.label = "Likes";
	    obj.value = result.likes.length;
        objarray.push(obj);

        obj = {};
		obj.label = "Happy";
        obj.value = result.happy.length;
        objarray.push(obj);

        obj = {};
		obj.label = "Sad";
        obj.value = result.sad.length;
        objarray.push(obj);

        var eachLOReactionsJSON = JSON.stringify(objarray);
  		res.send(eachLOReactionsJSON);
	});
  
};

