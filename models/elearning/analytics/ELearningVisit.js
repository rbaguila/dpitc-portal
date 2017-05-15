var keystone = require('keystone');
var Types = keystone.Field.Types;

var ELearningVisit = new keystone.List('ELearningVisit', {
	track: true,
	nocreate: true,
	//hidden: true
})
//visit in each LO is not included, just other pages in elearning web app
//visit in each LO will be accessed through LOView
ELearningVisit.add({
	ip: { 
		type: String,
		required: false 
	},
	country_code:{
		type: String,
		required: false
	},
	region: {
		type: String,
		required: false
	},
	city: {
		type: String,
		required: false
	},
	dateViewed: {//change this before deplyoning, use createdAt instead
		type: Types.Datetime, 
		index: true, 
		default: Date.now 
	},
	isUser: { type: Boolean, index: false }
});

ELearningVisit.defaultSort = '-dateViewed';
ELearningVisit.defaultColumns = 'ip, dateViewed, createdAt';

ELearningVisit.register();
