var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Discussion Model
 * ==========
 */

var Discussion = new keystone.List('Discussion', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true }
});

Discussion.add({
  title: { type: String, initial: true, required: true, index: true },
  createdAt: { type: Types.Datetime, noedit: true, default: Date.now, index: true },
  industry: { type: Types.Relationship, ref: 'Industry', required: true, initial: true, index: true },
  sector: { type: Types.Relationship, ref: 'Sector', filters: { industry: ':industry' } },
  commodity: { type: Types.Relationship, ref: 'Commodity', filters: { sector: ':sector' } },
  content: {
    brief: { type: Types.Markdown, height: 150 },
    full: { type: Types.Markdown, height: 400 }
  },
  // comments: [DiscussionComment]
  //categories, comments
})

Discussion.relationship({ ref: 'DiscussionComment', path: 'discussionComments', refPath: 'discussion' });

Discussion.defaultColumns = 'title, createdAt';
Discussion.register();
