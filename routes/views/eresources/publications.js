var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  // console.log(req._parsedUrl.query);

  view.query('industries', keystone.list('Industry').model.find());
  view.query('sectors', keystone.list('Sector').model.find());
  view.query('commodities', keystone.list('Commodity').model.find());

  var viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var searchTerm = req.query.term;
  var searchCategory = req.query.category;

  var pageData = {
    loginRedirect: '/eresources/publications',
    breadcrumbs: [
      { text: 'E Resources', link: '/eresources'},
      { text: 'Publications', link: '/eresources/publications'},
    ]
  }

  var page = req.params.page

  if (!page) { page = 1; }

  var PER_PAGE = 20;

  view.query('publications', keystone.list('Publication').model.find().limit(PER_PAGE).skip((page - 1) * PER_PAGE));

  locals.data = {

  }

  if (viewStyle == 'list') {
    //render list layout
    view.render('eresources/publications-list', pageData);
  } else {
    //render grid layout by default
    view.render('eresources/publications-grid', pageData);
  }
}