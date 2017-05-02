var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOLink = new keystone.List('LOLink', {
	autokey: { from: 'title', path: 'key', unique: true },
	defaultSort: '-publishedAt',
});

LOLink.add({
	name: {
		type: String,
		required: true,
		initial: true
	},
	url: {
		type: Types.Url,
		required: true,
		initial: true
	},
	description: {
		type: Types.Textarea,
		height: 80
	},
	/*industry: {
		type: Types.Relationship,
		ref: 'Industry'
	},
	sector: {
		type: Types.Relationship,
		ref: 'Sector',
		filters: { industry: ':industry' }
	},
	commodity: {
		type: Types.Relationship,
		ref: 'Commodity',
		filters: { sector: ':sector' }
	}*/
});

LOLink.defaultColumns = 'name, url, description';

LOLink.register();