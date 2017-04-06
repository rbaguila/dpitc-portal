var keystone = require('keystone'); 
var async = require('async');

exports = module.exports = function(req, res) {
  
  var locals = res.locals;
	// var q = keystone.list('Slider').model.find().sort('sortOrder');
	
	// We want to set the content-type header so that the browser understands
  //  the content of the response.
  res.contentType('application/json');
  
  var LOComments = [];
  /*var LOComments = [
  	{
  		"month": "January"
  	},
  	{
  		"month": "February"
  	},
  	{
  		"month": "March"
  	},
  	{
  		"month": "April"
  	},
  	{
  		"month": "May"
  	},
  	{
  		"month": "June"
  	},
  	{
  		"month": "July"
  	},
  	{
  		"month": "August"
  	},
  	{
  		"month": "September"
  	},
  	{
  		"month": "October"
  	},
  	{
  		"month": "November"
  	},
  	{
  		"month": "December"
  	},
  ];
  	var currentMonth = new Date().getMonth();

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 0, 1)).lt(req.params.year, 0, 31).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[0].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 1, 1)).lt(new Date(req.params.year, 1, 28)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[1].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 2, 1)).lt(new Date(req.params.year, 2, 31)).exec(function (err, results) {
		console.log(results);
		if (err) {
			return next(err);
		}
		LOComments[2].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 3, 1)).lt(new Date(req.params.year, 3, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[3].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 4, 1)).lt(new Date(req.params.year, 4, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[4].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 5, 1)).lt(new Date(req.params.year, 5, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[5].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 6, 1)).lt(new Date(req.params.year, 6, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[6].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 7, 1)).lt(new Date(req.params.year, 7, 31)).exec(function (err, results) {
		console.log(results);
		if (err) {
			return next(err);
		}
		LOComments[7].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 8, 1)).lt(new Date(req.params.year, 8, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[8].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 9, 1)).lt(new Date(req.params.year, 9, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[9].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 10, 1)).lt(new Date(req.params.year, 10, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[10].commentCount = results.length;
		//next();
	});

	keystone.list('LOComment').model.find().where('dateCreated').gte(new Date(req.params.year, 11, 1)).lt(new Date(req.params.year, 11, 31)).exec(function (err, results) {

		if (err) {
			return next(err);
		}
		LOComments[11].commentCount = results.length;
		var LOCommentsJSON = JSON.stringify(LOComments);
		console.log(LOCommentsJSON);
		res.send(LOCommentsJSON);
		//next();
	});
	*/
	//TO DO--- include the year in the parameter
	keystone.list('LOComment').model.find().exec(function (err, results) {

		if (err || !results.length) {
			return next(err);
		}
		LOComments = results;
		var LOCommentsJSON = JSON.stringify(LOComments);
		res.send(LOCommentsJSON);
		//next();
	});
};

