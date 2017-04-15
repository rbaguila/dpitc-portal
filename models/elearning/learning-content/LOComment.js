var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOComment = new keystone.List('LOComment', {
	track: true,
	nocreate: true,
	hidden: false, // should be true
})

LOComment.add({
	author: {
		type: Types.Relationship,
		initial: true,
		ref: 'User',
	},
	learningObject: {
		type: Types.Relationship,
		initial: true,
		ref: 'LearningObject'
	},
	publishedAt: {
		type: Types.Date, 
		index: true, 
		default: Date.now 
	}
}, 'Content', {
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 300
	},
});

LOComment.defaultColumns = 'content';

LOComment.register();
