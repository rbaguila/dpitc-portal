var keystone = require('keystone');
var Types = keystone.Field.Types;
var User = require('./../User');

/**
 * LUser Model
 * ==========
 */
var LUser = new keystone.List('LUser', {
  inherits: User
});

LUser.add({
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: false },
  address: { type: String, required: false },
	learningObjectsTaken: { type: Types.Relationship, ref: 'LearningObject', many: true }, // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
	// TODO
	//	preference: { type: Types.Relationship, ref: 'ISP', many: true },
});

LUser.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});


LUser.relationship({ ref: 'LearningObject', refPath: 'likes'});
LUser.relationship({ ref: 'LearningObject', refPath: 'happy'});
LUser.relationship({ ref: 'LearningObject', refPath: 'sad'});

/**
 * Registration
 */
LUser.defaultColumns = 'name, email';

LUser.register();