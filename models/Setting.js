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
	aboutLink: { type: String }},
	'Footer Section',
	{
	stayConnected: { 
		title: { type: String},
		row1Text: { type: String},
		row2Text: { type: String},
		row3Text: { type: String},
		row4Text: { type: String},
	},
	getInvolved: { 
		title: { type: String},
		row1Text: { type: String},
		row1Link: { type: String},
		row2Text: { type: String},
		row2Link: { type: String},
		row3Text: { type: String},
		row3Link: { type: String},
	},
	aboutFooter: { 
		title: { type: String},
		description: { type: Types.Html, wysiwyg: true, height: 150 },	
		logo1: { type: Types.CloudinaryImage},
		logoLink1: { type: String},
		logo2: { type: Types.CloudinaryImage},
		logoLink2: { type: String},
		logo3: { type: Types.CloudinaryImage},
		logoLink3: { type: String},
	},
	copyright: { type: Types.Html, wysiwyg: true, height: 100 }},
	'Social Media Links',	
	{
	communitySocialLink: { type: String},
	communitySocialImage: { type: Types.CloudinaryImage},
	facebookLink: { type: String},
	twitterLink: { type: String},
	youtubeLink: { type: String},
	email: { type: String},
	
});

Settings.register();
