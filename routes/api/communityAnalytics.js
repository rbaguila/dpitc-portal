var keystone = require('keystone');
var CommunityView = keystone.list('CommunityView');

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
