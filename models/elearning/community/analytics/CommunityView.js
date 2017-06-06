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
   ip: { type: String, index: true, noedit: true },
   time: { type: Types.Date, default: Date.now, noedit: true, index: true },
   city: { type: String, noedit: true },
   region: { type: String, noedit: true },
   country: { type: String, default: 'PH', noedit: true },
   loc: { type: String, noedit: true }
 });

 CommunityView.defaultColumns = 'ip, time';
 CommunityView.register();
