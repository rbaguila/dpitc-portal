var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * File Upload Model
 * ===========
 * A database model for uploading images to the local file system
 */

var LOFileUpload = new keystone.List('LOFileUpload');

var myStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: keystone.expandPath('./public/uploads/elearning/files'), // required; path where the files should be stored
        publicPath: '/public/uploads/elearning/files', // path where files will be served
    }
});

LOFileUpload.add({
  name: { 
    type: Types.Key, 
    index: true
  },
  file: { 
    type: Types.File,
    storage: myStorage
  },
  createdTimeStamp: { 
    type: Types.Date,
    default: Date.now
  },
  description: {
    type: Types.Html, 
    wysiwyg: true, 
    height: 300 
  },
  alt1: { 
    type: String 
  },
  attributes1: { 
    type: String 
  },
  category: { 
    type: String 
  },      //Used to categorize widgets.
  priorityId: { 
    type: String 
    },    //Used to prioritize display order.
  parent: { 
    type: String 
  },
  children: { 
    type: String 
  },
  url: {
    type: Types.Url
  },
  fileType: {
    type: Types.Select, 
    options: 'doc/docx, xls/xlsx, ppt/pptx, pdf'
  }
        
});


LOFileUpload.defaultColumns = 'name|20%, createdTimeStamp|15%, fileType|5%';
LOFileUpload.register();