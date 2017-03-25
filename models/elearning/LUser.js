var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LUser Model
 * ==========
 */
var LUser = new keystone.List('LUser');

LUser.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
	address: { type: String, required: false },
	coursesTaken: { type: Types.Relationship, ref: 'Course', many: true }, // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
	// TODO
	//	preference: { type: Types.Relationship, ref: 'ISP', many: true },
});

/**
 * Registration
 */
LUser.defaultColumns = 'name, email';

LUser.register();