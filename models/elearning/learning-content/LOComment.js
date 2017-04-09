var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOComment = new keystone.List('LOComment', {
	track: true,
	nocreate: true,
	hidden: true
})

LOComment.add({
	content: {
		type: Types.Markdown
	},
	author: {
		type: Types.Relationship,
		ref: 'LUser'
	},
	learningObject: {
		type: Types.Relationship,
		ref: 'LearningObject'
	},
	dateCreated: {//remove this before deploying, use createdAt instead
		type: Types.Date, 
		index: true, 
		default: Date.now 
	}
});

LOComment.defaultColumns = 'content';

LOComment.register();
