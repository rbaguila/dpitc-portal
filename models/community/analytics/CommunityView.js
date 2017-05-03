var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Community Views Model
 * ==========
 */

 var CommunityView = new keystone.List('CommunityView', {
   label: 'Community Views'
 });

 CommunityView.add({
   ip: { type: String, index: true },
   time: { type: Types.Date, default: Date.now, noedit: true, index: true }
 });

 CommunityView.defaultColumns = 'ip, time';
 CommunityView.register();
