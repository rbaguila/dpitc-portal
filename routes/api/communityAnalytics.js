var keystone = require('keystone');
var CommunityView = keystone.list('CommunityView');
var DiscussionView = keystone.list('DiscussionView');

/**
 * Lists Community Views
 **/

 exports.list = function(req, res) {
  CommunityView.model.find()
    .sort('time')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        views: items
      });

    });
 }

 exports.addDiscView = function(req, res) {
  var data = (req.method == 'POST') ? req.body : req.query;
  var item = new DiscussionView.model(data);

  item.save(function(err, view) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      discussion_view: view
    });
  })
 }
