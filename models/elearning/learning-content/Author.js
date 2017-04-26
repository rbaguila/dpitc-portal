var keystone = require('keystone');
var Types = keystone.Field.Types;

/*
  Author Model
  made it different from User for learningObject model because it will serve as the source of a learningObject.
*/

var Author = new keystone.List('Author', {
  autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: 'name',
});

Author.add({
  
  name: {
    type: String,
    required: true,
    index: true
  },
  organization: {
    type: String,
    index: true
  }

});

Author.relationship({ ref: 'LearningObject', refPath: 'author' });

Author.defaultColumns = 'name, organization';
Author.register();