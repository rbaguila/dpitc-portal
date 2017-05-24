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
	{fiestaTitle: { type: String, required: true, initial: false },
	fiestaDescription: { type: Types.Html, wysiwyg: true, height: 150 }},	
	'Technology Section',
	{technologyTitle: { type: String, required: true, initial: false },
	technologyDescription: { type: Types.Html, wysiwyg: true, height: 150 }},	
	'Community Section',
	{communityTitle: { type: String, required: true, initial: false },
	communityDescription: { type: Types.Html, wysiwyg: true, height: 150 },	
	communityBanner: { type: Types.CloudinaryImage },
	communityButtonText: { type: String },
	communityLink: { type: String }},
	'About Section',
	{aboutTitle: { type: String, required: true, initial: false },
	aboutDescription: { type: Types.Html, wysiwyg: true, height: 150 },	
	aboutBanner: { type: Types.CloudinaryImage },
	aboutButtonText: { type: String },
	aboutLink: { type: String },

});

Settings.register();
