var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Main Site Model
 * =============
 */

var publicationsSettings = new keystone.List('publicationsSettings', {
	// nocreate: true,
 //  nodelete: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

publicationsSettings.add({
	name: { type: String, required: true }},
	'Publications Description',
	{publicationsTitle: { type: String },
	publicationsDescription: { type: Types.Html, wysiwyg: true, height: 150 },
	publicationsHeading: { type: String }
});

publicationsSettings.register();
