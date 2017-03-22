var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
 * Course Model
 *
 */

var Course = new keystone.List('Course', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	track: true,
});

Course.add({
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
		ref: 'Chapter',
		index: true,
		many: true
	}
});

Course.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

Course.register();