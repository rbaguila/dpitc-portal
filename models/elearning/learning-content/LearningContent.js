var keystone = require('keystone');
var Types = keystone.Field.Types;

var LearningContent = new keystone.List('LearningContent', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  track: true,
  nocreate: true,
  sortable: true,
})

LearningContent.add({
  title: { 
    type: String, 
    required: true 
  },
  state: { 
    type: Types.Select, 
    options: 'draft, published, archived', 
    default: 'draft' 
  },
  author: { 
    type: Types.Relationship, 
    ref: 'User', index: true 
  },
  publishedAt: { 
    type: Types.Date, 
    index: true, 
    dependsOn: { state: 'published' }, 
    default: Date.now 
  },
  thumbnail: { 
    type: Types.CloudinaryImage 
  },
  content: {
    brief: { 
      type: Types.Html, 
      wysiwyg: true, 
      height: 150 
    },
    extended: { 
      type: Types.Html, 
      wysiwyg: true, 
      height: 400 
    },
  },
  tags: { 
    type: Types.TextArray, 
    collapse: true 
  },
});

LearningContent.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

LearningContent.register()

exports = module.exports = LearningContent