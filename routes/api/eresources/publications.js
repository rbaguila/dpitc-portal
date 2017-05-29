var keystone = require('keystone');
var Publication = keystone.list('publications');

exports.getPublications = function(req, res) {
  Publication.model.find()
    .exec(function(err, results) {
      if (err) return res.apiError('Error', err);

      res.apiResponse({
        results: results
      });
    });
}

// Looks at title and description
exports.findPublication = function(req, res) {
  var re = new RegExp('.*' + req.params.searchKey + '.*', 'i')
  console.log(re)

  Publication.model.find({ $or: [ {title: { $regex: re }}, {description: { $regex: re }} ] }, function(err, results) {
    if (err) return res.apiError('Error', err)

    res.apiResponse({
      results: results
    });
  });
}