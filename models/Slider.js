var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Slider = new keystone.List('Slider', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Slider.add({
	name: { type: String, required: true },
	// caption: { type: String },
	caption: { type: Types.Html, wysiwyg: true, height: 150 },
	description: { type: String },
	order: { type: String },
	route: { type: String },
	position: { type: Types.Select, options: 'center, top-left, top-right, center-left, center-right,bottom-left, bottom-right, top-center, bottom-center', default: 'center', index: true },
	buttonText: { type: String},
	buttonLink: { type: String, default: '/'},
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
});

Slider.register();
