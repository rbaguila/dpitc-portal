var keystone = require('keystone');
var Types = keystone.Field.Types;
var LearningContent = require('./LearningContent');

/*
 * Course Model
 *
 */

var Course = new keystone.List('Course', {
	inherits: LearningContent
});

Course.add({
	outline: {
    type: Types.Relationship,
    ref: 'LearningObject',
    index: true,
    many: true
  },
  /*
  // Removed Chapter model for a while, seems unnecessary
  outline: {
		type: Types.Relationship,
		ref: 'Chapter',
		index: true,
		many: true
	},*/

});

Course.schema.virtual('url').get(function(){
  return '/elearning/course/'+this.slug;
});

Course.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

Course.register();