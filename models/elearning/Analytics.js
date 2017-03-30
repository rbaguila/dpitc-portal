var keystone = require('keystone')
var Types = keystone.Field.Types;

/**
 * Analytics Model
 * ==================
 */

var Analytics = new keystone.List('Analytics', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Analytics.add({
	learningObjects: { 
		type: Types.Relationship, 
		ref: 'LearningObject',
		many: true, 
		required: false, // should be true, error in fixtures
		initial: true
	}
	/*
	,
	IPSs: {
		type: Types.Relationship, 
		ref: 'ISP',
		many: true, 
		required: false, // should be true, error in fixtures
		initial: true
	},
	LIndustrys: {
		type: Types.Relationship, 
		ref: 'LIndustry',
		many: true, 
		required: false, // should be true, error in fixtures
		initial: true
	}
	LSectors: {
		type: Types.Relationship, 
		ref: 'LSector',
		many: true, 
		required: false, // should be true, error in fixtures
		initial: true
	}
	*/
});

Analytics.defaultColumns = 'learningObjects'

Analytics.register();