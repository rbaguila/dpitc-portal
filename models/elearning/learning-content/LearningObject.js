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
  images: { 
    type: Types.Relationship, 
    ref: 'LOGallery', 
    index: true 
  },
  video: { 
    type: Types.Relationship, 
    ref: 'LOVideo', 
    index: true
  },
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
  comments: { 
    type: Types.Relationship, 
    ref: 'LOComment', 
    required: false, 
    many: true 
  },
  likes: { 
    type: Types.Relationship,
    ref: 'LUser',
    many: true,
    required: false,
  },
  happy: { 
    type: Types.Relationship,
    ref: 'LUser',
    many: true,
    required: false,
  },
  sad: { 
    type: Types.Relationship,
    ref: 'LUser',
    many: true,
    required: false,
  },  
});

LearningObject.relationship({ ref: 'Chapter', refPath: 'outline' });

LearningObject.schema.virtual('content.full').get(function () {
  return this.content.extended || this.content.brief;
});


LearningObject.schema.virtual('url').get(function(){
  return '/elearning/learning-object/'+this.slug;
});

LearningObject.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

LearningObject.register();