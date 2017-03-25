var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOVideo = new keystone.List('LOVideo', {

});

LOVideo.add({
	title: {
		type: String,
		required: true,
		initial: true
	},
	url: {
		type: Types.Url,
		required: true,
		initial: true,
		label: 'Youtube URL'
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

LOVideo.defaultColumns = 'name, url, description';

LOVideo.register();