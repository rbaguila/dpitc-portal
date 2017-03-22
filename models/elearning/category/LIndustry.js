var keystone = require('keystone')

/**
 * LIndustry Model
 * ==================
 */

var LIndustry = new keystone.List('LIndustry', {
	autokey: { from: 'name', path: 'key', unique: true }
});

LIndustry.add({
	name: { 
		type: String, 
		required: true 
	}
});

LIndustry.relationship({ ref: 'LSector', path: 'industry' });

LIndustry.register();