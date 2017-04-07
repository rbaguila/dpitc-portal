var keystone = require('keystone')
var Types = keystone.Field.Types;

/**
 * ISP Model
 * ==================
 */

var ISP = new keystone.List('ISP', {
	autokey: { from: 'name', path: 'key', unique: true },
	drilldown: 'sector'
});

ISP.add({
	name: { 
		type: String, 
		required: true 
	},
	sector: { 
		type: Types.Relationship, 
		ref: 'LSector',
		many: false, 
		required: false, // should be true, error in fixtures
		initial: true
	}
});

ISP.defaultColumns = 'name, sector'

ISP.register();