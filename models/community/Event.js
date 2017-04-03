var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Event Model
 * ==========
 */

var Event = new keystone.List('Event', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
})

Event.add({
  title: { type: String, required: true, default: '', index: true },
  startDate: { type: Types.Datetime },
  endDate: { type: Types.Datetime },
  description: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    full: { type: Types.Html, wysiwyg: true, height: 400 },
  },
  image: { type: Types.CloudinaryImage, autoCleanup: true }
  // categories: { type: Types.Relationship, ref: 'ISPCategory', many: true}
});

Event.defaultColumns = 'title, startDate, endDate'
Event.register();
