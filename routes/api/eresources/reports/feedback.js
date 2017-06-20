var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {
  var publicationID = req.query.publication
  // Should reports per user be available?
  // var userID = req.query.userID

  // Publication Specific Report
  if (publicationID) {
    Feedback.model.find({ publication: publicationID }).populate('user publication').exec(function(err, results) {
        if (err) return res.apiError('Error generating report', err);

        res.send(results);
      })
  }

  // Just get it all
  else {
    res.send('Sending you EVERYTHING!!!')
  }
}