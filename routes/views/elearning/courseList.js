var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';

  var pageData = {
    loginRedirect: '/elearning/courses?',
    breadcrumbs: [
      { text: 'ELearning', link: '/elearning' },
      { text: 'Courses', link: '/elearning/courses?' },
    ]
  }


  locals.data = {
        courses: [],
    };

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category


  view.on('init', function(next){
        Course.paginate({
            page: req.query.page,
            perPage: 8,
            maxPages: 10,
        })
        .where('state', 'published')
        .sort('-PublishedAt')
        .exec(function(err, results){
            locals.data.courses = results;
            
            next(err);
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

  // Render the view
  view.render('elearning/courseList', pageData);

};
