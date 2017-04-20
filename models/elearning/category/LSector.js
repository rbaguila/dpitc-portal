var keystone = require('keystone')
var Types = keystone.Field.Types;

/**
 * LSector Model
 * ==================
 */

var LSector = new keystone.List('LSector', {
	autokey: { from: 'name', path: 'key', unique: true },
	drilldown: 'industry'
});

LSector.add({
	name: { 
		type: String, 
		required: true 
	},
	industry: { 
		type: Types.Relationship, 
		ref: 'LIndustry', 
		many: false, 
		required: false, // should be true, error in fixtures
		initial: true 
	}
});

LSector.relationship({ ref: 'ISP', path: 'sector' });

LSector.schema.virtual('category').get(function () {
  return 'sector';
});

LSector.defaultColumns = 'name, industry'

LSector.register();