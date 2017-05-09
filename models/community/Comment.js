var keystone = require('keystone');
var Types = keystone.Field.Types;

var Comment = new keystone.List('Comment', {
  track: true,
  nocreate: true,
  hidden: true
})

Comment.add({
  content: { type: Types.Markdown },
  author: { type: Types.Relationship, ref: 'User' }
});

Comment.defaultColumns = 'content'
Comment.register()

exports = module.exports = Comment
