var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');
var LOFeedback = keystone.list('LOFeedback');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.url = '/elearning/feedback';
  locals.section = 'contact';
  locals.feedbackTypes = LOFeedback.fields.feedbackType.ops;
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.feedbackSubmitted = false;

  var pageData = {
    loginRedirect: locals.url, 
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: 'feedback', link: locals.url },
    ]
  }

  view.on('post', { action: 'contact' }, function (next) {

    var application = new LOFeedback.model();
    var updater = application.getUpdateHandler(req);

    updater.process(req.body, {
      flashErrors: true
    }, function (err) {
      if (err) {
        locals.validationErrors = err.errors;
      } else {
        req.flash('success', 'Feedback Submitted.');
        return res.redirect(locals.url);
      }
      next();
    });

  });

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;
    if(currentUser){
      isLOUser = true;
    }
    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var reqData = http.request(options, function(res) {  
        res.setEncoding('utf8');    
        res.on('data', function (chunk) {  
            var obj = JSON.parse(chunk);
            var newVisit = new ELearningVisit.model({
              ip: obj.ip,
              country_code: obj.country_code,
              region: obj.region_name,
              city: obj.city,
              isUser: isLOUser
            });
            newVisit.save(function(err) {
              
            });
        });    
    });

    reqData.write('data\n');
    reqData.write('data\n');
    reqData.end();
    next();
  });

  view.render('elearning/feedback', pageData);

}
