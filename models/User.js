var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var User = new keystone.List('User');

User.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
  address: { 
    type: String, 
    required: false 
  },
  learningObjectsTaken: { 
    // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
    type: Types.Relationship, 
    ref: 'LearningObject', 
    many: true 
  },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: false },
});

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
User.relationship({ ref: 'LearningObject', refPath: 'author'});
User.relationship({ ref: 'Chapter', refPath: 'author'});
User.relationship({ ref: 'Course', refPath: 'author'});


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();

exports = module.exports = User