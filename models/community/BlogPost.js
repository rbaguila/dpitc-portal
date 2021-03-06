var keystone = require('keystone');
var Types = keystone.Field.Types;

var BlogPost = new keystone.List('BlogPost', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

BlogPost.add({
	title: { type: String, required: true, initial: true, index: true },
	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	author: { type: Types.Relationship, ref: 'User', initial: true, index: true },
	publishedDate: { type: Types.Datetime, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 },
	},
  categories: { type: Types.Relationship, ref: 'Industry', many: true, required: true, initial: true, index: true },
});

BlogPost.schema.virtual('content.full').get(function () {
	return this.content.extended || this.content.brief;
});

BlogPost.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
BlogPost.register();
