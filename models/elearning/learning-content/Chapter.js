var keystone = require('keystone');
var Types = keystone.Field.Types;
var LearningContent = require('./LearningContent');

/*
 * Chapter Model
 *
 */

var Chapter = new keystone.List('Chapter', {
	inherits: LearningContent
});

Chapter.add({
	outline: {
		type: Types.Relationship,
		ref: 'LearningObject',
		index: true,
		many: true
	},
});

Chapter.relationship({ ref: 'Course', refPath: 'outline' });

Chapter.schema.virtual('url').get(function(){
  return '/elearning/chapter/'+this.slug;
});

Chapter.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

Chapter.register();