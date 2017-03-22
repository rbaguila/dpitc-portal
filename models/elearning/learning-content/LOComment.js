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
	}
});

LOComment.defaultColumns = 'content';

LOComment.register();
