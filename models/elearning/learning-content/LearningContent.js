var keystone = require('keystone');
var Types = keystone.Field.Types;

var LearningContent = new keystone.List('LearningContent', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  defaultSort: '-publishedAt',
  track: true,
  nocreate: false,
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
  publishedAt: { 
    type: Types.Datetime, 
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
      height: 150,
      label: 'One-paragraph Description' 
    },
    extended: { 
      type: Types.Html, 
      wysiwyg: true, 
      height: 400,
      label: 'Full Description' 
    },
  },
});

LearningContent.schema.index({
  title: "text",
  brief: "text",
  extended: "text"
});

LearningContent.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

LearningContent.register();

exports = module.exports = LearningContent