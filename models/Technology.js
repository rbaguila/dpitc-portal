var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Technology Model
 * ==========
 */

var Technology = new keystone.List('Technology', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Technology.add({
	title: { type: String, required: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
});

Technology.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Technology.defaultColumns = 'title, author|20%, publishedDate|20%';
Technology.register();
