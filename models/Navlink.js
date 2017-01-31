var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Navlink = new keystone.List('Navlink', {
	autokey: { from: 'label', path: 'key', unique: true },
});

Navlink.add({
	name: { type: String, required: true },
	label: { type: String },
	order: { type: String },
	href: { type: String, default: '/'},
	publishedDate: { type: Date, default: Date.now },
});

Navlink.register();
