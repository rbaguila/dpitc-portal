var keystone = require('keystone');
var Types = keystone.Field.Types;
// var DiscussionComment = require('./comments/DiscussionComment');

/**
 * Discussion Model
 * ==========
 */

var Discussion = new keystone.List('Discussion', {
  map: { name: 'title' }
});

Discussion.add({
  title: { type: String, required: true },
  content: {
    brief: { type: Types.Markdown, height: 150 },
    full: { type: Types.Markdown, height: 400 }
  },
  // comments: [DiscussionComment]
  //categories, comments
})

// Discussion.relationship({ ref: 'DiscussionComment', path: 'discussionComments', refPath: 'discussion' });

Discussion.defaultColumns = 'title';
Discussion.register();
