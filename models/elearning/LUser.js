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
	learningObjectsTaken: { type: Types.Relationship, ref: 'LearningObject', many: true }, // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
	// TODO
	//	preference: { type: Types.Relationship, ref: 'ISP', many: true },
});


LUser.relationship({ ref: 'LearningContent', refPath: 'likes'});
LUser.relationship({ ref: 'LearningContent', refPath: 'happy'});
LUser.relationship({ ref: 'LearningContent', refPath: 'sad'});

/**
 * Registration
 */
LUser.defaultColumns = 'name, email';

LUser.register();