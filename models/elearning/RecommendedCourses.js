var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * RecommendedCourse Model
 * ==================
 */

var RecommendedCourses = new keystone.List('RecommendedCourses', {
	autokey: { from: 'learner', path: 'key', unique: true },
});

RecommendedCourses.add({
	learner: { type: Types.Relationship, ref: 'Learner', many: false, index: true },
	//name: { type: String, required: true },
	recommended: { type: Types.Relationship, ref: 'Course', many: true },
	
});


RecommendedCourses.defaultColumns = 'learner|20%, recommended';

RecommendedCourses.register();