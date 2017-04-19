var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOView = new keystone.List('LOView', {
	track: true,
	nocreate: true,
	hidden: true
})

LOView.add({
	user: {
		type: Types.Relationship,
		ref: 'User'
	},
	learningObject: {
		type: Types.Relationship,
		ref: 'LearningObject'
	},
	dateViewed: {//change this before deplyoning, use createdAt instead
		type: Types.Date, 
		index: true, 
		default: Date.now 
	},
	typeOfView: {
		type: String,
    	default: null,
	}
});

LOView.defaultColumns = 'LUser';

LOView.register();
