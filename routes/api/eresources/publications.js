var keystone = require('keystone');
var Publication = keystone.list('publications');
var User = keystone.list('User');


exports.downloadPublication = function(req, res) {
  var user = req.user;
  var pubID = req.query.pubID;

  if (user && pubID) {

    // Increment analytics
    Publication.model.findOneAndUpdate(
      { _id: pubID },
      { $inc: { downloads: 1 } },
      function(err, res) {
        if (err, res) {
          if (err) {
          } else {
          }
        }
      }
    )

    // Set review backlog
    User.model.findOneAndUpdate(
      { _id: user._id },
      { $set: { needsReviewing: pubID } },
      function(err, res) {
        if (err) { }
        else {
        }
      })

    // Return file for download
    Publication.model.findOne({_id: pubID})
      .exec(function(err, result) {
        var filename = getNiceFilename(result.title, result.file.filename);

        res.header("Content-Disposition", "attachment;filename=" + filename);
        res.set('Content-Type', 'application/octet-stream');

        res.send(result.file.url);
      });

  } else {
    console.log('NOT LOGGED IN');
    res.send('Not logged in!');
  }

}

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


function getNiceFilename(title, filename) {
  var fnSlices = filename.split('.');

  var ext = fnSlices[fnSlices.length - 1];
  var name = sanitize(title);

  if (name.length > 25) {
    name = name.substring(0,25);
  }

  return name + '.' + ext;
}

function sanitize(name) {
  name = name.replace(/[\?,\!]/g, '');
  return name;
}