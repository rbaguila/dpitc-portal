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
   discussionID: { type: String, index: true, noedit: true },
   ip: { type: String, index: true, noedit: true },
   time: { type: Types.Date, default: Date.now, noedit: true, index: true },
   city: { type: String, noedit: true },
   region: { type: String, noedit: true },
   country: { type: String, default: 'PH', noedit: true },
   loc: { type: String, noedit: true }
 });

 DiscussionView.defaultColumns = 'discussion, ip, time';
 DiscussionView.register();
