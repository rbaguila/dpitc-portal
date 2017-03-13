var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Discussion Model
 * ==========
 */

var Discussion = new keystone.List('Discussion', {
  map: { name: 'title' }
});

Discussion.add({
  title: {
    type: String,
    required: true,
    default: ''
  },
  content: {
    brief: {
      type: String
    },
    full: {
      type: String
    }
  }
  //categories, comments
})

Discussion.defaultColumns = 'title';
Discussion.register();