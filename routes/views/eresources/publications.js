var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';
  locals.filters = {
    industry: req.query.industry,
    sector: req.query.sector,
    commodity: req.query.commodity
  };
  locals.data = {
    publications: [],
    category: [],
    categoryResult: []
    // categories: [],
  };

  locals.redirect = '/eresources'
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'},
    // { text: 'Publications', link: '/eresources/publications'}
  ]
  // console.log(req._parsedUrl.query);

  view.query('industries', keystone.list('Industry').model.find())
  view.query('sectors', keystone.list('Sector').model.find())
  view.query('commodities', keystone.list('Commodity').model.find())


  var viewStyle = req.query.view == undefined ? 'grid' : req.query.view
  var searchTerm = req.query.term
  var searchCategory = req.query.category

  // Load the current filter
  view.on('init', function (next) {

    if (req.query.industry) {
      keystone.list('Industry').model.findOne({ key: locals.filters.industry }).exec(function (err, result) {
        locals.data.industry = result;
        next(err);
      });
    }else if (req.query.sector) {
      keystone.list('Sector').model.findOne({ key: locals.filters.sector }).exec(function (err, result) {
        locals.data.sector = result;
        next(err);
      });
    }else if (req.query.commodity) {
      keystone.list('Commodity').model.findOne({ key: locals.filters.commodity }).exec(function (err, result) {
        locals.data.commodity = result;
        next(err);
      });
    }else {
      next();
    }
  });

  // Load the posts
  view.on('init', function (next) {

    var q = keystone.list('Publication').model.find({
      // page: req.query.page || 1,
      // perPage: 10,
      // maxPages: 10,
      // filters: {
      //   state: 'published',
      // },
    })
      // .sort('-publishedDate')
      // .populate('author categories');
    var category, categoryResult
    if (locals.data.industry) {
      q.where('industry').in([locals.data.industry]);
      categoryResult = locals.data.industry;
      category = 'Industry';
    }else if (locals.data.sector) {
      q.where('sector').in([locals.data.sector]);
      categoryResult = locals.data.sector;
      category = 'Sector';
    }else if (locals.data.commodity) {
      q.where('commodity').in([locals.data.commodity]);
      categoryResult = locals.data.commodity;
      category = 'Commodity';
    }

    locals.data.categoryResult = categoryResult;
    locals.data.category = category;

    q.exec(function (err, results) {
      locals.data.publications = results;
      next(err);
    });
  });

  var viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var searchTerm = req.query.term;
  var searchCategory = req.query.category;

  var page = req.params.page
  if (!page) { page = 1; }

  var PER_PAGE = 4;

  // view.query('publications', keystone.list('Publication').model.find().skip((page - 1) * PER_PAGE).limit(PER_PAGE));

  var Publications = keystone.list('Publication')
  Publications.paginate({
    page: req.query.page || 1,
    perPage: 20,
    maxPages: 15
  })
  .exec(function(err, results) {
    var index = 0;

    results.results.forEach(function(element, index) {
      element['index'] = results.first + (index++)
    })

    locals.data.publications = results;
    console.log(results);

    // next(err)
  })

  locals.data = {

  }

  if (viewStyle == 'list') {
    //render list layout
    view.render('eresources/publications-list');
  } else {
    //render grid layout by default
    view.render('eresources/publications-grid');
  }
}