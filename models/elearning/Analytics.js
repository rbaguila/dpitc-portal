var keystone = require('keystone')
var Types = keystone.Field.Types;

/**
 * Analytics Model
 * ==================
 */

var Analytics = new keystone.List('Analytics', {
	autokey: { from: 'name', path: 'key', unique: true },
	drilldown: 'sector'
});

Analytics.add({
	learningObject: { 
		type: Types.Relationship, 
		ref: 'LearningObject',
		many: false, 
		required: false, // should be true, error in fixtures
		initial: true
	},
	likesCount: { 
		type: Types.Number, 
		default: 0
	},
	happyCount: { 
		type: Types.Number, 
		default: 0
	},
	sadCount: { 
		type: Types.Number, 
		default: 0
	},
	commentsCount: {
		type: Types.Number,
		default: 0
	},
	viewsCount: {
		type: Types.Number,
		default: 0
	}
});

Analytics.defaultColumns = 'name, sector'

Analytics.register();