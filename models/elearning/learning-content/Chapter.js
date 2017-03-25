var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
 * Chapter Model
 *
 */

var Chapter = new keystone.List('Chapter', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: true,
});

Chapter.add({
	title: { 
		type: String, 
		required: true 
	},
	state: { 
		type: Types.Select, 
		options: 'draft, published, archived', 
		default: 'draft' 
	},
	author: { 
		type: Types.Relationship, 
		ref: 'User', 
		index: true 
	},
	publishedAt: { 
		type: Types.Date, 
		index: true, 
		dependsOn: { state: 'published' }, 
		default: Date.now 
	},
	thumbnail: { 
		type: Types.CloudinaryImage 
	},
	content: {
				brief: { 
						type: Types.Html, 
						wysiwyg: true, 
						height: 150 
				},
				extended: { 
						type: Types.Html, 
						wysiwyg: true, 
						height: 400 
				},
		},
		outline: {
			type: Types.Relationship,
			ref: 'LearningObject',
			index: true,
			many: true
		},
});

Chapter.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';
Chapter.register();