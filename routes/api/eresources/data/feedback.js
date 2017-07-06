var keystone = require('keystone');
var Feedback = keystone.list('PublicationFeedback');

exports.getAllFeedback = function(req, res) {
  return null;
}

exports.getFeedbackCurrentMonth = function(req, res) {
  var now = new Date();

  var start = new Date(now.getFullYear(), now.getMonth(), 1);
  var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  Feedback.model.find({ createdAt: { $gte: start, $lte: end } }).exec(function(err, results) {
    if (err) {
      console.log('Error getting feedback');
      res.send({});
    } else {
      res.send(results);
    }
  });
}
