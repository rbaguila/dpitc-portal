var keystone = require('keystone');
var async = require('async');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.data = {
    industries: []
  }

  locals.redirect = '/eresources'
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'}
  ]

  // var pageData = {
  //   loginRedirect: '/eresources',
  //   breadcrumbs: [
  //     { text: 'E Resources', link: '/eresources'},
  //   ]
  // }

  view.query('publications', keystone.list('Publication').model.find().limit(12));
  view.query('links', keystone.list('Link').model.find().limit(3));
  view.query('videos', keystone.list('Video').model.find().limit(3));
  view.query('galleries', keystone.list('Gallery').model.find().limit(3));

  view.on('init', function(next) {
    keystone.list('Industry').model.find().exec(function(err, result) {
      if (err) {
        return next(err);
      }
      locals.data.industries = result;
      // next(err)
      async.each(locals.data.industries, function(industry, next) {
        keystone.list('Publication').model.count().where('industry').in([industry.id]).exec(function(err, count) {
          industry.publicationCount = count;
          next(err);
        });
      }, function(err) {
          next(err);
        }
      );
    });

  });

  // async.each(locals.data.categories, function(category, next) {
  //       keystone.list('Products').model.count().where('categories').in([category.id]).exec(function(err, count) {
  //         category.postCount = count;
  //         next(err);
  //       });

  //     }, function(err) {
  //       next(err);
  //     });

  view.render('eresources/eresources');
}
