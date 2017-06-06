var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Publication Line Model
 * ==========
 */

 var PublicationLine = new keystone.List('PublicationLine', {});

 PublicationLine.add({
  name: { type: String, require: true, initial: true}
 });

PublicationLine.relationship({ ref: 'Publication', path: 'publicationLine'});
 PublicationLine.register();