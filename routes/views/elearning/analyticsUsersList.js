var keystone = require('keystone');
var User = keystone.list('User');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsUsersList';

    locals.data = {
        users: []
    };

    var page = req.query.page == undefined ? 1 : req.query.view;

    view.on('init', function(next){
        User.paginate({
            page: req.query.page,
            perPage: 15,
            maxPages: 10,
        })
        .where('isAdmin', false)
        .exec(function(err, results){
            locals.data.users = results;
            next(err);
        });
        
    });

    //Render the view
    view.render('elearning/analyticsUsersList');

};