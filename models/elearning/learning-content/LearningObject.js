var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LearningObject Model
 * ==========
 */

var LearningObject = new keystone.List('LearningObject', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    //track: { createdAt: true, updatedAt: true, createdBy: true, updatedBy:true, showTrack: true },
    track: true,
});

LearningObject.add({
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
    reactions: {
        likes: { 
            type: Number 
        },
        happy: { 
            type: Number 
        },
        sad: { 
            type: Number 
        },    
    },
    tags: { 
        type: Types.TextArray, 
        collapse: true 
    },
});


LearningObject.schema.virtual('content.full').get(function () {
    return this.content.extended || this.content.brief;
});

//TODO
LearningObject.schema.virtual('url').get(function(){
    return '/elearning/courses/'+this.slug;
});

LearningObject.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';

LearningObject.register();