var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Knowledge Model
 * ==========
 * Maybe this should be called publications?!
 */

var Publication = new keystone.List('Publication', {
  map: { name: 'title' }
});

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./../dpitc-uploads'),
    publicPath: '/public/uploads/files', // path where files will be served
    //NOTE: Should be able to slug title. But How???
    // generateFilename: function(file) {
    //   return file.originalname;
    // },
    whenExists: 'overwrite'
  }
});

Publication.add(
  {title: {
    type: String,
    required: true,
    default: ''
  }},
  {publicationType: {
    type: Types.Select,
    options: [
      'Book',
      'Leaflet',
      'Brochure',
      'Flyer',
      'Comics',
      'Primer'
      ],
    emptyOption: false
  }},
  {publicationLine: {
    type: String,
    default: ''
  }},
  {publisher: {
    type: String
  }},
  {publicationYear: {
    type: Number,
    min: [1970, 'Invalid Publication Year'],
    max: (new Date()).getFullYear()
  }},
  {cover: {
    type: Types.CloudinaryImage
  }},
  {file: {
    type: Types.File,
    storage: storage
  }},
  'Categories',
  {industry: {
    type: Types.Relationship,
    ref: 'Industry'
  }},
  {sector: {
    type: Types.Relationship,
    ref: 'Sector',
    filters: { industry: ':industry' },
    index: true
  }},
  {commodity: {
    type: Types.Relationship, ref: 'Commodity'
  }},
  'Editors',
  {technicalEditor: {
    type: String
  }},
  {volumeEditor: {
    type: String
  }},
  {layoutArtist: {
    type: String
  }},
  'International Standard Numbers',
  {ISSN: {
    type: String
  }},
  {ISBN: {
    type: String,
    dependsOn: { publicationType: 'Book' }
  }},
  'Misc',
  {printer: {
    type: String
  }},
  {format: {
    type: String
  }},
  {numberOfPages: {
    type: Number,
    min: 0
  }},
  {price: {
    type: Number,
    min: 0
  }}
);

// http://keystonejs.com/docs/database/#relationships

Publication.defaultColumns = 'title, publicationType, publicationLine, publicationYear, cover'

Publication.register();

// Publication.model.findOne().populate('sector').exec(function(err, sector) {
//   console.log(sector.name)
// })