var keystone = require('keystone');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsRecommended';

    locals.data = {

    };

    var pageData = {
        loginRedirect: '/elearning', 
        breadcrumbs: [
          { text: 'elearning', link: '/elearning' },
          { text: 'elearning analytics', link: '/elearning/analytics'}
        ]
    }

    //Render the view
    view.render('elearning/analytics/analyticsRecommended', pageData);

};