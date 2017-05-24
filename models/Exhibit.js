var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Exhibit Model
 * ==========
 */

var Exhibit = new keystone.List('Exhibit', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Exhibit.add({
	title: { type: String, required: true },
	commodity: { type: String },
	date: { type: String},
	venue: { type: String },
	consortium: { type: String },
	link: { type: String },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	coverImage: { type: Types.CloudinaryImage },
	// images: { type: Types.CloudinaryImages },
	// content: {
	// 	brief: { type: Types.Html, wysiwyg: true, height: 150 },
	// 	extended: { type: Types.Html, wysiwyg: true, height: 400 },
	// },
	// tags: { type: String }
});

Exhibit.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Exhibit.defaultColumns = 'title, author|20%, publishedDate|20%';
Exhibit.register();
