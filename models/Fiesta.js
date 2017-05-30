var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Fiesta Model
 * ==========
 */

var Fiesta = new keystone.List('Fiesta', {
	schema: { collection: 'fiesta' },
	label: 'FIESTA',
  singular: 'FIESTA',
  plural: 'FIESTA',
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Fiesta.add({
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

Fiesta.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Fiesta.defaultColumns = 'title, author|20%, publishedDate|20%';
Fiesta.register();
