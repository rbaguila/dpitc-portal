var keystone = require('keystone');
var Types = keystone.Field.Types;
var Comment = require('./../Comment')

var DiscussionComment = new keystone.List('DiscussionComment' , {
  inherits: Comment
});

DiscussionComment.add({
  discussion: { type: Types.Relationship, ref: 'Discussion'}
});

DiscussionComment.register();

exports = module.exports = DiscussionComment
