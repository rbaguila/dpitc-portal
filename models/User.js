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
	birthday: { type: Types.Date, initial: true, required: true, index: true },
	sex: { 
    type: Types.Select, 
    options: [
      { value: 'Male', label: 'Male' },
      { value: 'Female', label: 'Female' }
    ],
    initial: false,
    required: false 
  },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: false },

  isElearningAdmin: { type: Boolean, label: 'Can access Elearning Admin', index: false},
  isElearningUser: { type: Boolean, label: 'Can access Elearning UI', index: false },

  isPostsAdmin: { type: Boolean, label: 'Can access Posts Admin', index: false},

  isContentsAdmin: { type: Boolean, label: 'Can access Contents Admin', index: false},

  isPagesAdmin: { type: Boolean, label: 'Can access Pages Admin', index: false},

  isUsersAdmin: { type: Boolean, label: 'Can access Users Admin', index: false},

  isAnalyticsAdmin: { type: Boolean, label: 'Can access Analytics Admin', index: false},

  isCommunityAdmin: { type: Boolean, label: 'Can access Community Admin', index: false},

  isPublicationssAdmin: { type: Boolean, label: 'Can access Publications Admin', index: false},
  isPublicationssUser: { type: Boolean, label: 'Can access Publications UI', index: false },

  isCategoriesAdmin: { type: Boolean, label: 'Can access Categories Admin', index: false},


});

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

// Provide access to Posts Component
User.schema.virtual('canAccessPostsAdmin').get(function() {
  return this.isPostsAdmin;
});

// Provide access to Contents Component
User.schema.virtual('canAccessContentsAdmin').get(function() {
  return this.isContentsAdmin;
});

// Provide access to Pages Component
User.schema.virtual('canAccessPagesAdmin').get(function() {
  return this.isPagesAdmin;
});

// Provide access to Users Component
User.schema.virtual('canAccessUsersAdmin').get(function() {
  return this.isPostsAdmin;
});

// Provide access to Analytics Component
User.schema.virtual('canAccessAnalyticsAdmin').get(function() {
  return this.isAnalyticsAdmin;
});

// Provide access to Community Component
User.schema.virtual('canAccessCommunityAdmin').get(function() {
  return this.isCommunityAdmin;
});

// Provide access to Publications Component
User.schema.virtual('canAccessPublicationsAdmin').get(function () {
  return this.isPublicationsAdmin;
});

User.schema.virtual('canAccessPublicationsUI').get(function () {
  return this.isPublicationsUser;
});

// Provide access to Posts Component
User.schema.virtual('canAccessCategoriesAdmin').get(function() {
  return this.isCategoriesAdmin;
});




/**
 * Relationships
 */
User.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });
User.relationship({ ref: 'BlogPost', path: 'blogPosts', refPath: 'author' });
User.relationship({ ref: 'Comment', path: 'comments', refPath: 'author' });


/**
 * Registration
 */
User.defaultColumns = 'name, email, isAdmin';
User.register();
