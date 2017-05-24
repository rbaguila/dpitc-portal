var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Technology Model
 * ==========
 */

var Technology = new keystone.List('Technology', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Technology.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	link: { type: String },
	category: { type: Types.Select, options: 'agriculture, aquatic resource, natural  reseource', default: 'agriculture', index: true },
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	
});

Technology.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

Technology.defaultColumns = 'title, author|20%, publishedDate|20%';
Technology.register();
