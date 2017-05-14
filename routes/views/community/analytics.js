var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'community';

    locals.data = {

    }

    view.query('mainViews', keystone.list('CommunityView').model.find().sort('-time'));

    var pageData = {
      loginRedirect: '/community/analytics',
      breadcrumbs: [
        { text: 'Community', link: '/community'},
        { text: 'Analytics', link: '/community/analytics'},
      ]
    }

    view.render('community/community-analytics', pageData);

}
