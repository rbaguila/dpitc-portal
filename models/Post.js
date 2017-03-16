var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Post.add({
	title: { type: String, required: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	}},
	'Home Slider',
	{
	caption: { type: Types.Html, wysiwyg: true, height: 150 },
	order: { type: String },
	position: { type: Types.Select, options: 'center, top-left, top-right, center-left, center-right,bottom-left, bottom-right, top-center, bottom-center', default: 'center', index: true },
	buttonColor: { type: Types.Select, options: 'red, yellow, green, blue, black, white', default: 'blue', },
	buttonTextColor: { type: Types.Select, options: 'black, white', default: 'white', },

	categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
