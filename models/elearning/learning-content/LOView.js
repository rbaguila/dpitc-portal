var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOView = new keystone.List('LOView', {
	track: true,
	nocreate: true,
	hidden: true
})

LOView.add({
	LUser: {
		type: Types.Relationship,
		ref: 'LUser'
	},
	learningObject: {
		type: Types.Relationship,
		ref: 'LearningObject'
	},
	dateViewed: {//change this before deplyoning, use createdAt instead
		type: Types.Date, 
		index: true, 
		default: Date.now 
	}
});

LOView.defaultColumns = 'LUser';

LOView.register();
