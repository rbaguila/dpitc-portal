var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Banner Model
 * =============
 */

 var Banner = new keystone.List('Banner', {
  autokey: { from: 'name', path: 'key', unique: true },
});

Banner.add({
  name: { type: String, required: true },
  author: { type: Types.Relationship, ref: 'User', index: true },
  caption: { type: Types.Html, wysiwyg: true, height: 150 },
  description: { type: String },
  //order: { type: String },
  //route: { type: String },
  //position: { type: Types.Select, options: 'center, top-left, top-right, center-left, center-right,bottom-left, bottom-right, top-center, bottom-center', default: 'center', index: true },
  buttonText: { type: String},
  buttonLink: { type: String, default: '/'},
  state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
  publishedAt: { type: Types.Date, index: true, dependsOn: { state: 'published' }, default: Date.now },
  images: { type: Types.CloudinaryImages },
});

Banner.defaultColumns = 'name|20%, author|20%, description|30%, state|10%, publishedAt|10%';
Banner.register();
