var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Course Model
 * ==========
 */

var Course = new keystone.List('Course', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    //track: { createdAt: true, updatedAt: true, createdBy: true, updatedBy:true, showTrack: true },
    track: true,
});

Course.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft' },
    author: { type: Types.Relationship, ref: 'User', index: true },
    publishedAt: { type: Types.Date, index: true, dependsOn: { state: 'published' }, default: Date.now },
    thumbnail: { type: Types.CloudinaryImage },
    images: { type: Types.CloudinaryImages },
    //videoUrl: { type: Types.Url}, 
    videoId: { type: String},
    content: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 },
    },
    isp: { type: String, default: null, required: true },
    industry: { type: Types.Select, required: true, options: 'Agriculture, Aquatic Resources, Natural Resources', default: 'Agriculture'},
    sector: { type: Types.Select, required: true, options: 'Crops, Livestock, Inland Aquatic, Marine Resources, Ocean Environment Services (OES), Forestry, Inland Environment Services (IES)', default: 'Crops'},
    specificCommodity: { type: String, default: null, require: false },
    //},
    tags: { type: Types.TextArray, collapse: true },
    
});

/*
    Relationships
*/
Course.relationship({ ref: 'Learner', path: 'recommendedCourses' });
//Course.relationship({ ref: 'Learner', path: 'coursesTaken' });

Course.schema.virtual('content.full').get(function () {
    return this.content.extended || this.content.brief;
});

Course.schema.virtual('url').get(function(){
    return '/elearning/courses/'+this.slug;
});

Course.defaultColumns = 'title|20%, author|20%, content.brief|30%, state|10%, publishedAt|10%';
Course.register();