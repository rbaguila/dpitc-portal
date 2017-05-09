var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOGallery = new keystone.List('LOGallery', {
	autokey: { from: 'name', path: 'key', unique: true },
  defaultSort: '-publishedAt',
});

LOGallery.add({
	name: { type: String, required: true },
	publishedAt: { type: Date, default: Date.now },
	description: { type: Types.Textarea, height: 100 },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

LOGallery.register();
