var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Knowledge Model
 * ==========
 * Maybe this should be called publications?!
 */

var Publication = new keystone.List('Publication', {
  map: { name: 'title' }
})

// Publication.add({
//   title: {
//     type: String,
//     required: true,
//     default: ''
//   },
//   publicationType: {
//     type: Types.Select,
//     options: [
//       'Book',
//       'Leaflet',
//       'Brochure',
//       'Flyer',
//       'Comics',
//       'Primer'
//       ],
//     emptyOption: false
//   },
//   publicationLine: {
//     type: String,
//     default: ''
//   },
//   publicationYear: {
//     type: Number,
//     min: [1970, 'Invalid Publication Year'],
//     max: (new Date()).getFullYear()
//   },
//   publisher: {
//     type: String
//   },
//   technicalEditor: {
//     type: String
//   },
//   volumeEditor: {
//     type: String
//   },
//   layoutArtist: {
//     type: String
//   },
//   printer: {
//     type: String
//   },
//   format: {
//     type: String
//   },
//   ISSN: {
//     type: String
//   },
//   ISBN: {
//     type: String,
//     dependsOn: { publicationType: 'Book' }
//   },
//   price: {
//     type: Number,
//     min: 0
//   }

//   // categories: { type: Types.Relationship, ref: 'ISPCategory', many: true}
// });

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
  {price: {
    type: Number,
    min: 0
  }}

  // categories: { type: Types.Relationship, ref: 'ISPCategory', many: true}
);

Publication.defaultColumns = 'title, publicationType, publicationLine, publicationYear'
Publication.register();