var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Views Model
 * ==========
 */

var EventView = new keystone.List('EventView', {
  label: 'Event Views'
});

EventView.add({
  eventID: { type: String, index: true, noedit: true },
  ip: { type: String, index: true, noedit: true },
  time: { type: Types.Date, default: Date.now, noedit: true, index: true },
  city: { type: String, noedit: true },
  region: { type: String, noedit: true },
  country: { type: String, default: 'PH', noedit: true },
  loc: { type: String, noedit: true }
});

EventView.defaultColumns = 'discussion, ip, time';
EventView.register();
