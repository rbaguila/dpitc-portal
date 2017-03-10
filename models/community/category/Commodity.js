var keystone = require('keystone')
var Types = keystone.Field.Types;
/**
 * Commodity Model
 * ==================
 */

var Commodity = new keystone.List('Commodity', {
  autokey: { from: 'name', path: 'key', unique: true }
});

Commodity.add({
  name: { type: String, required: true },
  sector: { type: Types.Relationship, ref: 'Sector', many: false, required: true, initial: true}
});

Commodity.defaultColumns = 'name, sector'
Commodity.register();