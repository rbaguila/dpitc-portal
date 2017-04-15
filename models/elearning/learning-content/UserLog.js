var keystone = require('keystone');
var Types = keystone.Field.Types;

var UserLog = new keystone.List('UserLog', {
	track: true,
	nocreate: true,
	hidden: true
})

UserLog.add({
	LUser: {
		type: Types.Relationship,
		ref: 'User'
	},
	dateLoggedIn: {//change this before deplyoning, use createdAt instead
		type: Types.Date, 
		index: true, 
		default: Date.now 
	},
	dateLoggedOut: {
		type: Types.Date, 
		index: true, 
		default: Date.now 
	}
});

UserLog.defaultColumns = 'LUser';

UserLog.register();
