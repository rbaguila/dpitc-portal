var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  // console.log(req._parsedUrl.query);

  view.query('industries', keystone.list('Industry').model.find())
  view.query('sectors', keystone.list('Sector').model.find())
  view.query('commodities', keystone.list('Commodity').model.find())


  var viewStyle = req.query.view == undefined ? 'grid' : req.query.view
  var searchTerm = req.query.term
  var searchCategory = req.query.category

  view.query('publications', keystone.list('Publication').model.find())


  var pageData = {
    loginRedirect: '/eresources/publications',
    breadcrumbs: [
      { text: 'E Resources', link: '/eresources'},
      { text: 'Publications', link: '/eresources/publications'},
    ]
  }

  if (viewStyle == 'list') {
    //render list layout
    view.render('eresources/publications-list', pageData);
  } else {
    //render grid layout by default
    view.render('eresources/publications-grid', pageData);
  }
}