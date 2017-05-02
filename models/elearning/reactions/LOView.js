var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOView = new keystone.List('LOView', {
	track: true,
	nocreate: true,
	//hidden: true
})
//Visit or view per Learning Object
//will be added to elearningvisit for total visit

LOView.add({
	user: {
		type: Types.Relationship,
		ref: 'User',
		noedit: true,
	},
	learningObject: {
		type: Types.Relationship,
		ref: 'LearningObject',
		noedit: true,
	},
	dateViewed: {//change this before deplyoning, use createdAt instead
		type: Types.Datetime, 
		index: true, 
		default: Date.now 
	},
	typeOfView: {
		type: String,
    	default: null,
	},
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
	}
});

LOView.defaultSort = '-dateViewed';
LOView.defaultColumns = 'learningObject, user, dateViewed, createdAt';

LOView.register();
