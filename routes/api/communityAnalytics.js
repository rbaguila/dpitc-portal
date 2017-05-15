var keystone = require('keystone');
var http = require('http');
var CommunityView = keystone.list('CommunityView');
var DiscussionView = keystone.list('DiscussionView');
var GroupView = keystone.list('GroupView');
var EventView = keystone.list('EventView');
var ReportView = keystone.list('ReportView');

var host = 'http://pcaarrd-km-community.herokuapp.com';
// var host = 'http://localhost:8080';
config = {
  getEvents: host+'/api/posts/category/event',
  getReports: host+'/api/posts/category/report',
  getDiscussions: host+'/api/posts/category/question',
  getGroups: host+'/api/groups/'
}

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

exports.listEvents = function(req, res) {
  http.get(config.getEvents, function(response) {

    var bodyChunks = [];
    response.on('data', function(chunk) {
      bodyChunks += chunk;
    }).on('end', function() {
      var body = JSON.parse(bodyChunks);

        res.apiResponse({
          posts: body.posts
        });

    });
  }).on('error', function(err) {
    return res.apiError('request error', err);
  });
}

exports.listReports = function(req, res) {
  http.get(config.getReports, function(response) {

    var bodyChunks = [];
    response.on('data', function(chunk) {
      bodyChunks += chunk;
    }).on('end', function() {
      var body = JSON.parse(bodyChunks);

        res.apiResponse({
          posts: body.posts
        });

    });
  }).on('error', function(err) {
    return res.apiError('request error', err);
  });
}

exports.listDiscussions = function(req, res) {
  http.get(config.getDiscussions, function(response) {

    var bodyChunks = [];
    response.on('data', function(chunk) {
      bodyChunks += chunk;
    }).on('end', function() {
      var body = JSON.parse(bodyChunks);

        res.apiResponse({
          posts: body.posts
        });

    });
  }).on('error', function(err) {
    return res.apiError('request error', err);
  });
}

exports.listGroups = function(req, res) {
  http.get(config.getGroups, function(response) {

    var bodyChunks = [];
    response.on('data', function(chunk) {
      bodyChunks += chunk;
    }).on('end', function() {
      var body = JSON.parse(bodyChunks);

        res.apiResponse({
          groups: body.groups
        });

    });
  }).on('error', function(err) {
    return res.apiError('request error', err);
  });
}

exports.listEventViews = function(req, res) {
  EventView.model.find()
    .sort('-time')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        views: items
      });
  });
}

exports.listReportViews = function(req, res) {
  ReportView.model.find()
    .sort('-time')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        views: items
      });
  });
}

exports.listDiscussionViews = function(req, res) {
  DiscussionView.model.find()
    .sort('-time')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        views: items
      });
  });
}

exports.listGroupViews = function(req, res) {
  GroupView.model.find()
    .sort('-time')
    .exec(function(err, items) {
      if (err) return res.apiError('database error', err);

      res.apiResponse({
        views: items
      });
  });
}

exports.addCommView = function(req, res) {
  var data = (req.method == 'POST') ? req.body : req.query;
  var item = new CommunityView.model(data);

  item.save(function(err, view) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      community_view: view
    });
  })
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

exports.addGroupView = function(req, res) {
  var data = (req.method == 'POST') ? req.body : req.query;
  var item = new GroupView.model(data);

  item.save(function(err, view) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      group_view: view
    });
  })
}

exports.addEventView = function(req, res) {
  var data = (req.method == 'POST') ? req.body : req.query;
  var item = new EventView.model(data);

  item.save(function(err, view) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      event_view: view
    });
  })
}

exports.addReportView = function(req, res) {
  var data = (req.method == 'POST') ? req.body : req.query;
  var item = new ReportView.model(data);

  item.save(function(err, view) {
    if (err) return res.apiError('database error', err);

    res.apiResponse({
      report_view: view
    });
  })
}
