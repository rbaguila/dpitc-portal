var keystone = require('keystone');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  console.log("Slug: " + req.params.exhibit);
  // Set locals
  locals.section = 'exhibit';
  locals.filters = {
    exhibit: req.params.exhibit,
  };
  locals.data = {
    exhibits: [],
  };

  // Load the current post
  view.on('init', function (next) {

    var q = keystone.list('Exhibit').model.findOne({
      slug: locals.filters.exhibit,
    });

    q.exec(function (err, result) {
      locals.data.exhibit = result;
      next(err);
    });

  });

  // Load other posts
  view.on('init', function (next) {

    var q = keystone.list('Exhibit').model.find().sort('-dateFinished').populate('author');

    q.exec(function (err, results) {
      locals.data.exhibits = results;
      next(err);
    });

  });

  // Render the view
  view.render('exhibit');
};
