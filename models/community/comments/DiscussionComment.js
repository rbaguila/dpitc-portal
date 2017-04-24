var keystone = require('keystone');
var Types = keystone.Field.Types;

var DiscussionComment = new keystone.List('DiscussionComment' , {
  label: 'Discussion Comments'
});

DiscussionComment.add({
  author: { type: Types.Relationship, initial: true, ref: 'User', index: true },
	discussion: { type: Types.Relationship, initial: true, ref: 'Discussion', index: true },
	commentState: { type: Types.Select, options: ['published', 'draft', 'archived'], default: 'published', index: true },
	publishedOn: { type: Types.Date, default: Date.now, noedit: true, index: true }
});

DiscussionComment.add('Content', {
  content: { type: Types.Textarea, height: 300 }
});

DiscussionComment.schema.pre('save', function (next) {
  this.wasNew = this.isNew;
  if(!this.isModified('publishedOn') && this.isModified('commonState') && this.commonState === 'published') {
    this.publishedOn = new Date();
  }
  next();
});

DiscussionComment.schema.post('save', function () {
  if(!this.wasNew) return;
  if(this.author) {
    keystone.list('User').model.findById(this.author).exec(function (err, user) {
      if(user) {
        user.wasActive().save();
      }
    })
  }
});

DiscussionComment.track = true;
DiscussionComment.defaultColumns = 'author, post, publishedOn, commentState';
DiscussionComment.register();
