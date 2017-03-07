var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Knowledge Model
 * ==========
 */

var Knowledge = new keystone.List('Knowledge', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
})

Knowledge.add({
  title: { type: String, required: true, default: '' },
  state: { type: Types.Select, options: 'Book, Memo', },
  // categories: { type: Types.Relationship, ref: 'ISPCategory', many: true}
});

Knowledge.register();