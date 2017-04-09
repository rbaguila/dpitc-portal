var keystone = require('keystone');
var Types = keystone.Field.Types;
var User = require('./../User');

/**
 * LUser Model
 * ==========
 */
var LUser = new keystone.List('LUser', {
  // CONFLICT with main repo
  inherits: User
});

LUser.add({
  // Should be inherited from User but conflict from main repo.
  /*name: { 
    type: Types.Name, 
    required: true, 
    index: true 
  },
  email: { 
    type: Types.Email, 
    initial: true, 
    required: true, 
    index: true 
  },
  password: { 
    type: Types.Password, 
    initial: true, 
    required: true 
  },
  */address: { 
    type: String, 
    required: false 
  },
	learningObjectsTaken: { 
    // max of 100 to be considered for threshold purposes and mean newly taken courses / recent
    type: Types.Relationship, 
    ref: 'LearningObject', 
    many: true 
  }, // TODO
	//	preference: { type: Types.Relationship, ref: 'ISP', many: true },
}, 'Permissions', {
    isAdmin: { 
      type: Boolean, 
      label: 'Can access Keystone', 
      index: false 
    },  
  });

LUser.schema.virtual('canAccessKeystone').get(function () {
  return this.isAdmin;
});

LUser.relationship({ path: 'likes', ref: 'LearningObject', refPath: 'likes'});
LUser.relationship({ path: 'happy', ref: 'LearningObject', refPath: 'happy'});
LUser.relationship({ path: 'sad', ref: 'LearningObject', refPath: 'sad'});

/**
 * Registration
 */
LUser.defaultColumns = 'name, email, isAdmin';

LUser.register();