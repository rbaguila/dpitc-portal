var keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res);
    var locals = res.locals;
    locals.section = 'eresources';

    locals.data = {

    }

    var pageData = {
      loginRedirect: '/community/news',
      breadcrumbs: [
        { text: 'Community', link: '/community'},
        { text: 'News', link: '/news'},
      ]
    }

    var newsId = req.params.news;

    view.query('main', keystone.list('News').model.findOne({slug: newsId}));
    view.query('news', keystone.list('News').model.find({slug: {$ne: newsId}}));

    view.render('community/news', pageData);

}
