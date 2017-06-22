var keystone = require('keystone');
var User = keystone.list('User');
	async = require('async');


exports = module.exports = function(req, res) {
	if (req.user) {
		return res.redirect(req.cookies.target || '/signup');
	}
	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.form = req.body;

	var pageData = {
    loginRedirect: ''
	};
	

	view.on('post', { action: 'signup' }, function(next) {
		var newUser = new User.model({
			name: {
				first: req.body.first,
				last: req.body.last,
			},
			email: locals.form.email,
			password: locals.form.password,
					
			birthday: locals.form.birthday,
			consumerType: locals.form.consumerType,
			agencyAffiliation: locals.form.agencyAffiliation,
			sex: locals.form.sex,
			contactNumber: locals.form.contactNumber
		});

		var updater = newUser.getUpdateHandler(req);		
		
		updater.process(req.body, {
        fields: 'email, password, birthday',
        flashErrors: true,
        logErrors: true
      	}, function(err,result) {
        	if (err) {    
          		locals.validationErrors = err.errors;
        	} else {
          		console.log(newUser);
          		req.flash('success', 'Account created. Please sign in.');         
          		return res.redirect('/keystone/signin');
       	 	}
        next();
      	});
		
	});
	
	view.render('signup');
	
}
