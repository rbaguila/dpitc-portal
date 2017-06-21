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
  photo: { type: Types.CloudinaryImage }
}, 'Elearning', {
  learningObjectsTaken: {
    // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
    type: Types.Relationship,
    ref: 'LearningObject',
    many: true
  },
	location: { type: Types.Location, defaults: { country: 'Philippines' }},
  consumerType: { 
		type: Types.Select,
		options: [ 
		{ value: 'Researcher', label: 'Researcher' },
		{ value: 'Business/Private Sector', label: 'Business/Private Sector' },
		{ value: 'Policy Maker', label: 'Policy Maker' },
		{ value: 'Other', label: 'Other' }
		],
		initial: false,
		required: true
	},
	birthday: { type: Types.Date, initial: true, required: true, index: true },
  agencyAffiliation: { type: Types.Text, required: false, index: true },
	sex: {
    type: Types.Select,
    options: [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' }
    ],
    initial: false,
    required: false
  },
  contactNumber: { type: Types.Number, initial: true, required: true, index: true },
  
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: false },
  isElearningAdmin: { type: Boolean, label: 'Can access Elearning Admin', index: false},
  isElearningUser: { type: Boolean, label: 'Can access Elearning UI', index: false },
}, 'Backlog', {
  needsReviewing: { type: Types.Relationship, ref: 'Publication' }
}
);

// Provide access to Keystone
User.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});

// Provide access to Elearning Component
User.schema.virtual('canAccessElearningAdmin').get(function () {
  return this.isElearningAdmin;
});

User.schema.virtual('canAccessElearningUI').get(function () {
  return this.isElearningUser;
});



/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
User.relationship({ ref: 'BlogPost', path: 'blogPosts', refPath: 'author' });
User.relationship({ ref: 'Comment', path: 'comments', refPath: 'author' });
User.relationship({ ref: 'PublicationFeedback', path: 'user'});


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
