var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Group Views Model
 * ==========
 */

var GroupView = new keystone.List('GroupView', {
  label: 'Group Views'
});

GroupView.add({
  handle: { type: String, index: true, noedit: true },
  ip: { type: String, index: true, noedit: true },
  time: { type: Types.Date, default: Date.now, noedit: true, index: true },
  city: { type: String, noedit: true },
  region: { type: String, noedit: true },
  country: { type: String, default: 'PH', noedit: true },
  loc: { type: String, noedit: true }
});

GroupView.defaultColumns = 'discussion, ip, time';
GroupView.register();
