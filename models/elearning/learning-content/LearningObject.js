var keystone = require('keystone');
var Types = keystone.Field.Types;
var LearningContent = require('./LearningContent');

/**
 * LearningObject Model
 * ==========
 */

var LearningObject = new keystone.List('LearningObject', {
  inherits: LearningContent
});

LearningObject.add({
  author: { // Not the admin but the actual author of the content
    type: Types.Relationship,
    ref: 'Author',
    many: true,
    required: false,
    default: null  
  },
}, 'Category', {
  isp: { 
    type: Types.Relationship, 
    ref: 'ISP',
    many: false, 
    required: false, // should be true, error in fixtures
    default: null 
  },
  sector: { 
    type: Types.Relationship, 
    ref: 'LSector',
    many: false, 
    required: false, // should be true, error in fixtures
    default: null 
  },
  industry: { 
    type: Types.Relationship, 
    ref: 'LIndustry',
    many: false, 
    required: false, // should be true, error in fixtures
    default: null 
  },
  specificCommodity: { 
    type: String, 
    default: null, 
    required: false 
  },
}, 'Media', {
  gallery: { 
    type: Types.Relationship, 
    ref: 'LOGallery', 
    index: true 
  },
  video: { 
    type: Types.Relationship, 
    ref: 'LOVideo', 
    index: true
  },
  links: {
    type: Types.Relationship,
    ref: 'LOLink',
    many: true,
    index: true
  },
  files: {
    type: Types.Relationship,
    ref: 'LOFileUpload',
    many: true
  }
}, 'Reaction', {
  comments: { 
    type: Types.Relationship, 
    ref: 'LOComment', 
    required: false, 
    many: true 
  },
  likes: { 
    type: Types.Relationship,
    ref: 'User',
    many: true,
    required: false,
  },
  happy: { 
    type: Types.Relationship,
    ref: 'User',
    many: true,
    required: false,
  },
  sad: { 
    type: Types.Relationship,
    ref: 'User',
    many: true,
    required: false,
  },  
} );


/*
// Removed Chapter model for a while, seems unnecessary
LearningObject.relationship({ ref: 'Chapter', refPath: 'outline' });*/
LearningObject.relationship({ ref: 'Course', refPath: 'outline' });
LearningObject.relationship({ ref: 'User', refPath: 'learningObjectsTaken' });

LearningObject.schema.virtual('content.full').get(function () {
  return this.content.extended || this.content.brief;
});


LearningObject.schema.virtual('url').get(function(){
  return '/elearning/learning-object/'+this.slug;
});

LearningObject.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

LearningObject.register();