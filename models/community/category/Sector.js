var keystone = require('keystone')
var Types = keystone.Field.Types;

/**
 * Sector Model
 * ==================
 */

var Sector = new keystone.List('Sector', {
  autokey: { from: 'name', path: 'key', unique: true },
  drilldown: 'industry'
});

Sector.add({
  name: { type: String, required: true },
  industry: { type: Types.Relationship, ref: 'Industry', many: false, required: true, initial: true }
});

Sector.relationship({ ref: 'Commodity', path: 'sector' });
Sector.defaultColumns = 'name, industry'
Sector.register();