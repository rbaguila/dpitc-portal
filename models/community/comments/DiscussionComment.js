var keystone = require('keystone');
var Types = keystone.Field.Types;
var Comment = require('./../Comment')

var DiscussionComment = new keystone.List('DiscussionComment' , {
  inherits: Comment
});

DiscussionComment.add({

});

DiscussionComment.register();