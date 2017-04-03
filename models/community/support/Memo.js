var keystone = require('keystone');
var Types = keystone.Field.Types;

var storage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    path: keystone.expandPath('./../dpitc-uploads')
  }
})

var Memo = new keystone.List('Memo', {

});

Memo.add({
  title: {
    type: String, 
    required: true,
    initial: true
  },
  publicationDate: {
    type: Types.Date
  },
  file: {
    type: Types.File,
    storage: storage
  },
  description: {
    type: Types.Textarea,
    height: 100
  }
})

Memo.defaultColumns = 'title, publicationDate, description'

Memo.register()