var keystone = require('keystone');
var Types = keystone.Field.Types;

var Link = new keystone.List('Link', {

});

Link.add({
  name: { type: String, required: true, initial: true },
  url: { type: Types.Url, required: true, initial: true },
  description: { type: Types.Textarea, height: 80 },
  image: { type: Types.CloudinaryImage, autoCleanup: true },
  industry: { type: Types.Relationship, ref: 'Industry' },
  sector: { type: Types.Relationship, ref: 'Sector', filters: { industry: ':industry' } },
  commodity: { type: Types.Relationship, ref: 'Commodity', filters: { sector: ':sector' } }
});

Link.defaultColumns = 'name, url, description';
Link.register();
