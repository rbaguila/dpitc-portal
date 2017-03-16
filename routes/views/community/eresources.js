var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  view.query('industries', keystone.list('Industry').model.find())
  view.query('sectors', keystone.list('Sector').model.find())
  view.query('commodities', keystone.list('Commodity').model.find())

  view.query('publications', keystone.list('Publication').model.find())

  var viewStyle = req.query.view == undefined ? 'grid' : req.query.view
  var pageData = {
    loginRedirect: '/eresources',
    breadcrumbs: [
      { text: 'E Resources', link: '/eresources'},
    ]
  }

  if (viewStyle == 'list') {
    //render list layout
    view.render('community/eresources-list', pageData);
  } else {
    //render grid layout by default
    view.render('community/eresources-grid', pageData);
  }
}