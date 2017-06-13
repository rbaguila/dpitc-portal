var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Publication Feedback Model
 * ==========
 */

var PublicationFeedback = new keystone.List('PublicationFeedback', {
  label: 'Feedback',
  path: 'publication-feedback',
  singular: 'Feedback',
  plural: 'Feedback',
  collection: 'publicationFeedback',
  drilldown: 'publication user',
  nocreate: true,
  noedit: true
});

PublicationFeedback.add({
  publication: {
    type: Types.Relationship,
    ref: 'Publication'
  },
  user: {
    type: Types.Relationship,
    ref: 'User'
  },
  content: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ]
  },
  usefulness: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ]
  },
  design: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ]
  },
  responseTime: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ]
  },
  comments: {
    type: String
  }
});

PublicationFeedback.defaultColumns = 'publication user';

PublicationFeedback.register();