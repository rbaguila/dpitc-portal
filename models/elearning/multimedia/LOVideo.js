var keystone = require('keystone');
var Types = keystone.Field.Types;

var LOVideo = new keystone.List('LOVideo', {
	autokey: { from: 'title', path: 'key', unique: true },
});

LOVideo.add({
	title: {
		type: String,
		required: true,
		initial: true
	},
	url: {
		type: Types.Url,
		required: true,
		initial: true,
		label: 'Youtube URL'
	},
	description: {
		type: Types.Textarea,
		height: 80
	},
});

LOVideo.schema.virtual('videoId').get(function () {
	var url = this.url;
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
  return ID;

});

LOVideo.defaultColumns = 'name, url, description';

LOVideo.register();