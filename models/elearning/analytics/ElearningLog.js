var keystone = require('keystone');
var Types = keystone.Field.Types;

var ELearningLog = new keystone.List('ELearningLog', {
  track: true,
  nocreate: true,
  noedit: true
  //hidden: true
});

ELearningLog.add({
  user: {
    type: String,
    required: false
  },
  event: {
    type: String,
  }

});

ELearningLog.defaultSort = '-createdAt';
ELearningLog.defaultColumns = 'user|15%, event|40%, createdAt';

ELearningLog.register();