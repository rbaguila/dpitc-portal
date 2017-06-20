var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Publication Download Model
 * ==========
 */

 var PublicationDownload = new keystone.List('PublicationDownload', {
    label: 'Downloads',
    path: 'publication-downloads',
    singular: 'download',
    plural: 'downloads',
    collection: 'publicationDownloads',
    drilldown: 'publication user',
    nocreate: true,
    noedit: true
  });

PublicationDownload.add({
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
  date: {
    type: Types.Date,
    required: true,
    initial: true
  }
});

PublicationDownload.defaultColumns = 'publication user';

PublicationDownload.register();