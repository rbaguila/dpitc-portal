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
    ref: 'Publication',
    required: true,
    initial: true
  },
  user: {
    type: Types.Relationship,
    ref: 'User',
    required: true,
    initial: true
  },
  content: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ],
    required: true,
    initial: true
  },
  usefulness: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ],
    required: true,
    initial: true
  },
  design: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ],
    required: true,
    initial: true
  },
  responseTime: {
    type: Types.Select,
    options: [
      'Outstanding',
      'Very Satisfactory',
      'Satisfactory',
      'Fair',
      'Unsatisfactory/Needs Improvement'
    ],
    required: true,
    initial: true
  },
  comments: {
    type: String
  },
  createdAt: {
    type: Types.Date
  }
});

PublicationFeedback.schema.virtual('createdAt.date').get(function() {

});

PublicationFeedback.defaultColumns = 'publication user createdAt';

PublicationFeedback.schema.pre('save', function(next) {
  this.createdAt = new Date();
  return next();
});

PublicationFeedback.register();