var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Main Site Model
 * =============
 */

var Settings = new keystone.List('Settings', {
	// nocreate: true,
 //  nodelete: true,
  autokey: { from: 'name', path: 'key', unique: true }
});

Settings.add({
	name: { type: String, required: true },
	logoImage: { type: Types.CloudinaryImage }},
	'Fiesta Section',
	{fiestaTitle: { type: String },
	fiestaDescription: { type: Types.Html, wysiwyg: true, height: 150 }},	
	'Technology Section',
	{technologyTitle: { type: String},
	technologyDescription: { type: Types.Html, wysiwyg: true, height: 150 }},	
	'Community Section',
	{communityTitle: { type: String },
	communityDescription: { type: Types.Html, wysiwyg: true, height: 150 },	
	communityBanner: { type: Types.CloudinaryImage },
	communityButtonText: { type: String },
	communityLink: { type: String }},
	'About Section',
	{aboutTitle: { type: String},
	aboutDescription: { type: Types.Html, wysiwyg: true, height: 150 },	
	aboutBanner: { type: Types.CloudinaryImage },
	aboutButtonText: { type: String },
	aboutLink: { type: String },

});

Settings.register();
