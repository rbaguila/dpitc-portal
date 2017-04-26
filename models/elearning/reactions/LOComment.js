var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOComment = new keystone.List('LOComment', {
	track: true,
	nocreate: true,
})

LOComment.add({
	learningObject: {
		type: Types.Relationship,
		initial: true,
		ref: 'LearningObject',
		noedit: true,
	},
}, 'Content', {
	content: {
		type: Types.Html,
		wysiwyg: true,
		height: 300,
		noedit: true,
	},
});

LOComment.defaultSort = '-createdAt';
LOComment.defaultColumns = 'learningObject, createdBy, content, createdAt';

LOComment.register();
