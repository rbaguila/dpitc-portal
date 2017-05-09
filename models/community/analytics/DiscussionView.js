var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Discussion Views Model
 * ==========
 */

 var DiscussionView = new keystone.List('DiscussionView', {
   label: 'Discussion Views'
 });

 DiscussionView.add({
   discussion: { type: Types.Relationship, ref: 'Discussion', initial: true, index: true},
   ip: { type: String, index: true },
   time: { type: Types.Date, default: Date.now, noedit: true, index: true }
 });

 DiscussionView.defaultColumns = 'discussion, ip, time';
 DiscussionView.register();
