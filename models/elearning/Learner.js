var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Learner Model
 * ==========
 */
var Learner = new keystone.List('Learner');

Learner.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
  favorite: { type: Types.Relationship, ref: 'Course', many: true },
  coursesTaken: { type: Types.Relationship, ref: 'Course', many: true },//max of 100 to be considered for threshold purposes and mean newly taken courses / recent
  recommendedCourses: { type: Types.Relationship, ref: 'Course', many: true },
});

/**
 * Relationships
 */
//Learner.relationship({ ref: 'RecommendedCourses', path: 'learner' });


/**
 * Registration
 */
Learner.defaultColumns = 'name, email';
Learner.register();